import type { LoaderArgs } from '@remix-run/node'
import { useLoaderData, useSearchParams } from '@remix-run/react'

import SimpleHero from '~/components/Sections/SimpleHero/SimpleHero'
import TeamWithFilters from '~/components/Sections/TeamWithFilters/TeamWithFilters'
import { useTeamProps } from '~/hooks/useTeamProps'
import { datoQuerySubscription, loadFragments } from '~/lib/datocms'
import { prepareFilterProps } from '~/lib/filter.utils'
import { ResponsiveImageFragmentQuery } from '~/lib/generated'
import type { IPrefilledFilter } from '~/types/filter.interface'
import { getLocale } from '~/utils'

export const loader = async ({ request, params }: LoaderArgs) => {
  const locale = getLocale(request)
  const fragments = loadFragments([ResponsiveImageFragmentQuery])

  const initialQuery = `#graphql
    query ($first: IntType, $skip: IntType, $locale: SiteLocale) {
      people: allPeople(locale: $locale, first: $first, skip: $skip) {
        id
        name
        slug
        categories {
          name
        }
        roles {
          name
        }
        jobTitle
        image{
          responsiveImage(
            imgixParams: { fm: jpg, fit: crop, w: 500, h: 500}
          ) {
            ...responsiveImage
          }
        }
      }
      
      _allPeopleMeta {
        count
      }
      common: common(locale: $locale){
        teamHeading
        teamSubheading
        teamImage{
          responsiveImage(imgixParams: { fm: jpg}) {
            ...responsiveImage
          }
        }
      }
  }
  ${fragments}
  `

  let skip = 0
  let count = 0
  let teams: any[] = []

  let results = null
  do {
    results = await datoQuerySubscription({
      request,
      query: initialQuery,
      variables: { first: 100, skip, locale },
    })

    teams = teams.concat(results.datoQuerySubscription.initialData.people)
    count = results.datoQuerySubscription.initialData._allPeopleMeta.count
    skip += 100
  } while (skip < count)
  const common = results.datoQuerySubscription.initialData.common
  const data: any = { teams, common }

  return { datoQuerySubscription: { data } }
}

export default function ProductsTypeIndex() {
  const [searchParams] = useSearchParams()

  const { datoQuerySubscription } = useLoaderData()
  const {
    data: { teams, common },
  } = datoQuerySubscription

  const heroSectionProps = {
    title: common.teamHeading,
    description: common.teamSubheading,
    imageUrl: common.teamImage?.responsiveImage?.src,
  }

  const teamProps = useTeamProps(teams)
  const filtersProps = prepareFilterProps(teamProps, 'teams')

  console.log(searchParams.get('role'))

  return (
    <main className="relative min-h-screen bg-white">
      <SimpleHero {...heroSectionProps} />
      <TeamWithFilters
        filters={filtersProps}
        teams={teamProps}
        prefilledFilters={
          searchParams.get('role')
            ? ([
                {
                  fieldName: 'roles',
                  values: [searchParams.get('role')!.toLowerCase()],
                },
              ] as IPrefilledFilter[])
            : undefined
        }
      />
    </main>
  )
}

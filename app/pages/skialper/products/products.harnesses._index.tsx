import type { LoaderArgs } from '@remix-run/node'
import { useLoaderData, useSearchParams } from '@remix-run/react'
import { useQuerySubscription } from 'react-datocms'

import ProductWithFilters from '~/components/Sections/ProductWithFilters/ProductWithFilters'
import SimpleHero from '~/components/Sections/SimpleHero/SimpleHero'
import { datoQuerySubscription, loadFragments } from '~/lib/datocms'
import { prepareFilterProps } from '~/lib/filter.utils'
import { ResponsiveImageFragmentQuery } from '~/lib/generated'
import { useCardProps } from '~/hooks/useCardProps'
import i18next from '~/i18next.server'
import BreadcrumbsProducts from '~/components/Molecules/Breadcrumbs/BreadcrumbsProducts'
import type { IPrefilledFilter } from '~/types/filter.interface'
import { getLocale } from '~/utils'

export const loader = async ({ request, params }: LoaderArgs) => {
  const locale = getLocale(request)
  const t = await i18next.getFixedT(locale)
  const slug = t('harnessesSlug')
  const fragments = loadFragments([ResponsiveImageFragmentQuery])

  const query = `#graphql
    query ($slug: String, $locale: SiteLocale){
        products: allHarnesses(locale: $locale) {
            id
            name
            slug
            families {
                name
                slug
            }
            weightDeclared
            brand { name }
            awards {
              label 
              shortName
              color{
                hex
              }
            }
            priceEur
            priceUsd
            media {
              webImage {
                responsiveImage(
                  imgixParams: { fm: jpg, fit: crop, w: 1000, h: 1000, fpY:0}
                ) {
                  ...responsiveImage
                }
              }
            }
        }

        _allHarnessesMeta {
            count
        }

        family: allProductFamilies(locale: $locale, filter: { slug: { eq: $slug } }){
          name
          slug
          description
          _allReferencingScopes{
            name 
            slug
          }
          image{
            responsiveImage(
              imgixParams: { fm: jpg }
            ) {
              ...responsiveImage
            }
          }
        }
    }
        ${fragments}

    `

  return datoQuerySubscription({
    request,
    query,
    variables: { locale, slug },
  })
}

export default function ProductsTypeIndex() {
  const [searchParams] = useSearchParams()
  const { datoQuerySubscription } = useLoaderData()

  const {
    data: { products, family },
  } = useQuerySubscription(datoQuerySubscription)

  const heroSectionProps = {
    title: family[0].name,
    description: family[0].description,
    imageUrl: family[0].image?.responsiveImage?.src,
  }

  const productProps = useCardProps(products, family, 'harness')
  const filtersProps = prepareFilterProps(productProps, 'harness')
  const mainScope = family[0]._allReferencingScopes[0]

  return (
    <main className="relative min-h-screen bg-white">
      <BreadcrumbsProducts
        scopeName={mainScope.name}
        scopeSlug={mainScope.slug}
      />{' '}
      <SimpleHero {...heroSectionProps} />
      <ProductWithFilters
        filters={filtersProps}
        products={productProps}
        prefilledFilters={
          searchParams.get('category')
            ? ([
                {
                  fieldName: 'categories',
                  values: [searchParams.get('category')!.toLowerCase()],
                },
              ] as IPrefilledFilter[])
            : undefined
        }
      />
    </main>
  )
}

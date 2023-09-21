import type { LoaderArgs } from '@remix-run/node'
import { useLoaderData, useSearchParams } from '@remix-run/react'

import ArticleWithFilters from '~/components/Sections/ArticleWithFilters'
import SimpleHero from '~/components/Sections/SimpleHero'
import { useArticleCardProps } from '~/hooks/useArticleCardProps'
import { datoQuerySubscription, loadFragments } from '~/lib/datocms'
import { prepareFilterProps } from '~/lib/filter.utils'
import type { IArticle } from '~/types/article.interface'
import type { IPrefilledFilter } from '~/types/filter.interface'
import { getLocale } from '~/utils'
import { ResponsiveImageFragmentQuery } from '~/lib/generated'
export const loader = async ({ request }: LoaderArgs) => {
  const locale = getLocale(request)
  const fragments = loadFragments([ResponsiveImageFragmentQuery])
  const articlesQuery = `#graphql
        query($locale: SiteLocale,) {
            articles: allArticles(locale: $locale, orderBy: _publishedAt_DESC) {
                id
                title
                slug
                categories {
                    name
                }
                metadata {
                    description
                }
                topics {
                    name
                    color
                }
                modules{
                  ... on HeroRecord {
                    __typename
                    id
                    heroType
                    subheading
                    image{
                      responsiveImage(imgixParams: {fm: jpg}) {
                        ...responsiveImage
                      }
                    }
                  }
                }
                _publishedAt
            }
            common: common(locale: $locale){
              blogHeading
              blogSubheading
              blogImage{
                responsiveImage(imgixParams: { fm: jpg}) {
                  ...responsiveImage
                }
              }
            }
        }
        ${fragments}
    `

  const datoQueryRes = await datoQuerySubscription({
    request,
    query: articlesQuery,
    variables: { locale }, // The number of items passed to the query
  })

  return {
    datoQuerySubscription: datoQueryRes.datoQuerySubscription.initialData,
  }
}

export default function Articles() {
  const [searchParams] = useSearchParams()

  const { datoQuerySubscription } = useLoaderData()
  const { articles, common } = datoQuerySubscription

  const articlesProps: IArticle[] = useArticleCardProps(articles)
  const filtersProps = prepareFilterProps(articlesProps, 'articles')

  // TODO: extract data
  const heroSectionProps = {
    title: common.blogHeading,
    imageUrl: common.blogImage?.responsiveImage?.src,
    description: common.blogSubheading,
  }

  return (
    <main className="relative min-h-screen bg-white">
      <SimpleHero {...heroSectionProps} />
      <ArticleWithFilters
        articles={articlesProps}
        filters={filtersProps}
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

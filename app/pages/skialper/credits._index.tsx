import type { MetaFunction, LoaderArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { useQuerySubscription } from 'react-datocms'

import { datoQuerySubscription } from '~/lib/datocms'
import NewsHeading from '~/components/Organisms/NewsHeading/NewsHeading'
import StandardPage from '~/components/Sections/StandardPage/StandardPage'
import NewsTextBlock from '~/components/Organisms/NewsTextBlock/NewsTextBlock'
import { getLocale } from '~/utils'

export const meta: MetaFunction = () => [{ title: "The Buyer's Guide" }]
export const loader = async ({ request, params }: LoaderArgs) => {
  const slug = params.slug
  const locale = getLocale(request)

  const initialQuery = `#graphql
    query page($locale: SiteLocale) {
      credit:credit(locale: $locale) {
        id
        modules{
          ... on HeadingRecord{
            __typename
            text
            size
          }
          ... on ContentRecord{
            __typename
            text
          }
        }
      }
    }
  `

  const datoQuerySubArticle = await datoQuerySubscription({
    request,
    query: initialQuery,
    variables: { locale, slug }, // The number of items passed to the query
  })

  return {
    pageData: datoQuerySubArticle.datoQuerySubscription,
  }
}

export default function Index() {
  // const { t } = useTranslation()
  // const { l } = useLocalizeLink()
  // const { user } = useContext()
  const { pageData } = useLoaderData()
  const { data: page } = useQuerySubscription(pageData)
  const modules = page.credit.modules
  return (
    <StandardPage>
      <>
        {modules
          ? modules.map((module) => {
              switch (module.__typename) {
                case 'HeadingRecord':
                  return (
                    <NewsHeading
                      title={module.text}
                      headingSize={module.size}
                    />
                  )
                case 'ContentRecord':
                  return <NewsTextBlock text={module.text} />
              }
              return null
            })
          : null}
      </>
    </StandardPage>
  )
}

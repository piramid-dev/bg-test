import type { MetaFunction, LoaderArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { useQuerySubscription } from 'react-datocms'
import { t } from 'i18next'

import { useLocalizeLink } from '~/hooks/useLocalizeLink'
import type { NewsTypes } from '~/types/globalTypes'
import { datoQuerySubscription, loadFragments } from '~/lib/datocms'
import type { ArticleRecord } from '~/lib/generated'
import {
  ResponsiveImageFragmentQuery,
  ArticleCardFragmentQuery,
} from '~/lib/generated'
import { useCardProps } from '~/hooks/useCardProps'
import { useArticleCardProps } from '~/hooks/useArticleCardProps'
import type { CoverShapes } from '~/components/Sections/NewsHeader/NewsHeader'
import NewsHeader from '~/components/Sections/NewsHeader/NewsHeader'
import NewsTwoColsText from '~/components/Organisms/NewsTwoColsText/NewsTwoColsText'
import VideoLightbox from '~/components/Organisms/VideoLightbox/VideoLightbox'
import Quote from '~/components/Organisms/Quote/Quote'
import NewsColsTextImage from '~/components/Organisms/NewsColsTextImage/NewsColsTextImage'
import NewsTwoColsHighlight from '~/components/Organisms/NewsTwoColsHighlight/NewsTwoColsHighlight'
import NewsTextBlock from '~/components/Organisms/NewsTextBlock/NewsTextBlock'
import NewsHeading from '~/components/Organisms/NewsHeading/NewsHeading'
import NewsHighlightTextBlock from '~/components/Organisms/NewsHighlightTextBlock/NewsHighlightTextBlock'
import BoxedImage from '~/components/Organisms/BoxedImage/BoxedImage'
import NewsShareBlock from '~/components/Sections/NewsShareBlock/NewsShareBlock'
import ShelfNewsCarousel from '~/components/Organisms/ShelfNewsCarousel/ShelfNewsCarousel'
import SingleNewsCardInfoCarousel from '~/components/Organisms/SingleNewsCardInfoCarousel/SingleNewsCardInfoCarousel'
import ShelfProductCarousel from '~/components/Organisms/ShelfProductCarousel/ShelfProductCarousel'
import { getLocale } from '~/utils'

export const meta: MetaFunction = () => [
  { title: "Products - The Buyer's Guide" },
]

export const loader = async ({ request, params }: LoaderArgs) => {
  const slug = params.slug
  const locale = getLocale(request)

  const fragments = loadFragments([
    ResponsiveImageFragmentQuery,
    ArticleCardFragmentQuery,
  ])

  const initialQuery = `#graphql
    query article($slug: String!, $locale: SiteLocale) {
      article:article(filter: { slug: { eq: $slug } }, locale: $locale) {
        id
        title
        slug
        metadata {
          description
          title
        }
        categories{
          id
          name
          slug
          _allReferencingArticles{
            ... articleCard
          }
        }
        topics{
          id
          name
          color
          slug
        }
        author{
          id
          slug
          name
        }
        photographer{
          id
          slug
          name
        }
        _publishedAt
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
          ... on TwoColumnTextRecord {
            __typename
            id
            firstColumnHeading
            firstColumnText
            secondColumnHeading
            secondColumnText
            swapColumns
          }

          ...on VideoRecord {
            __typename
            id
            title
            url
            cover{
              responsiveImage(imgixParams: {fm: jpg}) {
                ...responsiveImage
              }
            }
          }

          ...on QuoteRecord {
            __typename
            id
            quote
            author
          }

          ... on ImageWithTextRecord{
            __typename
            image{
              responsiveImage(imgixParams: {fm: jpg}) {
                ...responsiveImage
              }
            }
            text
            swapColumns
          }

          ... on FeaturedTwoColumnTextRecord{
            __typename
            firstColumnText
            secondColumnText
            swapColumns
          }

          ... on HeadingRecord{
            __typename
            text
            size
          }

          ... on ContentRecord{
            __typename
            text
          }

          ... on ImageRecord{
            __typename
            image{
              responsiveImage(imgixParams: {fm: jpg}) {
                ...responsiveImage
              }
            }
          }

          ... on FeaturedHeadingRecord{
            __typename
            text
            subtext
          }

          ... on ProductsSliderRecord{
            __typename
            heading
            actionText
            actionUrl
            products{
              ... on SkiRecord{
                __typename
                id
                name
                slug
                brand {
                  name
                  slug
                }
                categories {
                  name
                  slug
                }
                families {
                  name
                  slug
                }
                awards {
                  label 
                  shortName
                  color{
                    hex
                  }
                }
                testedPreview
                weightDeclared
                waistWidthDeclared
                families{
                  slug
                }
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
              ... on BootRecord{
                __typename
                id
                name
                slug
                brand{
                  name
                  slug
                }
                categories{
                  name
                }
                families{
                  name
                }
                awards {
                  label 
                  shortName
                  color{
                    hex
                  }
                }
                testedPreview
                leverNumber
                weightDeclared
                families{
                  slug
                }
                media{
                  webImage{
                    responsiveImage(
                      imgixParams: { fm: jpg, fit: crop, w: 1000, h: 1000, fpY:1}
                    ) {
                      ...responsiveImage
                    }
                  }
                }
              }
              ... on BindingRecord{
                __typename
                id
                name
                slug
                brand{
                  name
                  slug
                }
                categories{
                  name
                }
                families{
                  name
                }
                awards {
                  label 
                  shortName
                  color{
                    hex
                  }
                }
                testedPreview
                types{
                  name
                }
                weightDeclared
                families{
                  slug
                }
                media{
                  webImage{
                    responsiveImage(
                      imgixParams: { fm: jpg, fit: crop, w: 1000, h: 1000, fpY:1}
                    ) {
                      ...responsiveImage
                    }
                  }
                }
              }

              ... on SplitboardRecord{
                __typename
                id
                name
                slug
                families {
                    name
                    slug
                }
                colors { name rgb { hex } order }
                categories { name }
                edgeEffective
                weightDeclared
                sidecutRadius
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
                construction { name }
                families{
                  slug
                }
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

              ... on ArtvaRecord{
                __typename
                id
                name
                slug
                brand {
                    name
                    slug
                }
                weightDeclared
                families {
                    name
                    slug
                }
                brand {
                  id
                }
                awards {
                  label
                  name
                  shortName
                  color{
                    hex
                  }
                }
                priceEur
                priceUsd
                autonomy
                families{
                  slug
                }
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

              ... on AirbagRecord{
                __typename
                id
                name
                slug
                brand {
                    name
                    slug
                }
                families {
                    name
                    slug
                }
                weightDeclared
                inflationType { name }
                inflationSystem { name }
                volume
                volumeAirbag
                weightDeclared
                awards {
                  label
                  name
                  shortName
                  color{
                    hex
                  }
                }
                priceEur
                priceUsd
                families{
                  slug
                }
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

              ... on ProbeRecord{
                __typename
                id
                name
                slug
                families {
                    name
                    slug
                }
                openLength
                material { name }
                weightDeclared
                brand { name }
                awards {
                  label
                  name
                  shortName
                  color{
                    hex
                  }
                }
                priceEur
                priceUsd
                families{
                  slug
                }
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

              ... on ShovelRecord{
                __typename
                id
                name
                slug
                families {
                    name
                    slug
                }
                material { name }
                weightDeclared
                brand { name }
                awards {
                  label
                  name
                  shortName
                  color{
                    hex
                  }
                }
                priceEur
                priceUsd
                families{
                  slug
                }
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

              ... on SplitboardBindingRecord{
                __typename
                id
                name
                slug
                families {
                    name
                    slug
                }
                categories { name }
                colors { name rgb { hex } order }
                heelLifterAvailable
                nagativeHibackAvailable
                weightDeclared
                brand { name }
                awards {
                  label
                  name
                  shortName
                  color{
                    hex
                  }
                }
                priceEur
                priceUsd
                families{
                  slug
                }
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

              ... on SplitboardBootRecord{
                __typename
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
                  name
                  shortName
                  color{
                    hex
                  }
                }
                priceEur
                priceUsd
                categories {
                  name
                }
                colors { name rgb { hex } order }
                families{
                  slug
                }
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

              ... on PoleRecord{
                __typename
                id
                name
                slug
                families {
                    name
                    slug
                }
                shaftMaterials { name }
                weightMeasured
                brand { name }
                awards {
                  label
                  name
                  shortName
                  color{
                    hex
                  }
                }
                priceEur
                priceUsd
                types { name }
                families{
                  slug
                }
                media {
                  webImagePreview {
                    responsiveImage(
                      imgixParams: { fm: jpg, fit: crop, w: 1000, h: 1000, fpY:0.5}
                    ) {
                      ...responsiveImage
                    }
                  }
                }
              }

              ... on HelmetRecord{
                __typename
                id
                name
                slug
                families {
                    name
                    slug
                }
                certification
                weightDeclared
                brand { name }
                awards {
                  label
                  name
                  shortName
                  color{
                    hex
                  }
                }
                priceEur
                priceUsd
                families{
                  slug
                }
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

              ... on CramponRecord{
                __typename
                id
                name
                slug
                families {
                    name
                    slug
                }
                materials { name }
                weightDeclared
                brand { name }
                awards {
                  label
                  name
                  shortName
                  color{
                    hex
                  }
                }
                priceEur
                priceUsd
                families{
                  slug
                }
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

              ... on AxRecord{
                __typename
                id
                name
                slug
                families {
                    name
                    slug
                }
                handleMaterial { name }
                headMaterial { name }
                weightDeclared
                brand { name }
                awards {
                  label
                  name
                  shortName
                  color{
                    hex
                  }
                }
                priceEur
                priceUsd
                families{
                  slug
                }
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

              ... on HarnessRecord{
                __typename
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
                  name
                  shortName
                  color{
                    hex
                  }
                }
                priceEur
                priceUsd
                families{
                  slug
                }
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

              ... on SkinRecord{
                __typename
                id
                name
                slug
                families {
                    name
                    slug
                }
                materials { name }
                categories { name }
                brand { name }
                awards {
                  label
                  name
                  shortName
                  color{
                    hex
                  }
                }
                priceEur
                priceUsd
                weightWetMeasured
                weightDryMeasured
                families{
                  slug
                }
                media {
                  webImage {
                    responsiveImage(
                      imgixParams: { fm: jpg, fit: crop, w: 1000, h: 1000, fpY:0.5}
                    ) {
                      ...responsiveImage
                    }
                  }
                }
              }
            }
          }

          ... on ComparativeSliderRecord{
            __typename
            legend
            slides{
              ... on ComparativeSlideRecord{
                __typename
                image{
                  responsiveImage(imgixParams: {fm: jpg}) {
                    ...responsiveImage
                  }
                }
                heading
                traits{
                  ... on TraitRecord{
                    __typename
                    label
                    value
                  }
                }
              }
            } 
          }
        }
      }
    }
    ${fragments}
  `

  const datoQuerySubArticle = await datoQuerySubscription({
    request,
    query: initialQuery,
    variables: { locale, slug }, // The number of items passed to the query
  })

  return {
    articleData: datoQuerySubArticle.datoQuerySubscription,
  }
}

export default function Article() {
  // HEADER
  // coverImageSrc: puo essere presente o meno
  // coverImageShape: 'squared', 'inverted-rounded-corners', 'rounded'
  const { l } = useLocalizeLink()

  const { articleData } = useLoaderData()
  const { data: articleSubData } = useQuerySubscription(articleData)

  const article = articleSubData?.article as ArticleRecord
  const relatedArticles = articleSubData?.article.categories.reduce(
    (acc, category) => [...acc, ...category._allReferencingArticles],
    [],
  )
  const modules = article?.modules

  //check each modules and switch the component based on the type

  const shelfNewsTwoProps = {
    showAllTo: l('/articles'),
    showAllLabel: t('seeAll'),
    title: t('relatedArticles'),
    news: [
      ...useArticleCardProps(
        relatedArticles.filter(
          (relatedArticle) => relatedArticle.slug !== article.slug,
        ),
      ),
    ],
  }
  return (
    <main className="relative min-h-screen bg-white">
      {modules
        ? modules.map((module) => {
            switch (module.__typename) {
              case 'HeroRecord':
                const headerProps = {
                  categoryChips: [
                    ...article.categories.map((category) => ({
                      label: category.name,
                      to: `/category/${category.slug}`,
                      variant: 'overlay' as const,
                    })),
                    ...article.topics.map((topic) => ({
                      label: topic.name,
                      to: `/topic/${topic.slug}`,
                      variant: 'white' as const,
                    })),
                  ],
                  type: 'about' as NewsTypes,
                  color: article.topics[0].color,
                  title: (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: article.title as string,
                      }}
                    />
                  ),
                  shortDesc: module.subheading as string,
                  coverImageShape: module.heroType as CoverShapes,
                  coverImageSrc: module.image?.responsiveImage?.src,
                  authors: [
                    ...article.author.map((author) => ({
                      name: author.name,
                      to: l(`/team/${author.slug}`),
                      role: t('author'),
                    })),
                    ...article.photographer.map((photographer) => ({
                      name: photographer.name,
                      to: l(`/team/${photographer.slug}`),
                      role: t('photographer'),
                    })),
                  ],
                }
                return <NewsHeader {...headerProps} />
              case 'TwoColumnTextRecord':
                const twoColTextProps = {
                  leftColumn: {
                    title: module.firstColumnHeading,
                    content: module.firstColumnText,
                  },
                  rightColumn: {
                    title: module.secondColumnHeading,
                    content: module.secondColumnText,
                  },
                  swapContent: module.swapColumns,
                }
                return <NewsTwoColsText {...twoColTextProps} />
              case 'VideoRecord':
                const videoProps = {
                  title: module.title,
                  videoUrl: module.url,
                  videoCover: module.cover?.responsiveImage?.src,
                }
                return <VideoLightbox {...videoProps} />
              case 'QuoteRecord':
                const quoteProps = {
                  quote: module.quote,
                  author: module.author,
                }
                return <Quote {...quoteProps} />
              case 'ImageWithTextRecord':
                const imageTextProps = {
                  imageUrl: module.image?.responsiveImage?.src,
                  text: module.text,
                  imagePosition: module.swapColumns ? 'right' : 'left',
                }
                return <NewsColsTextImage {...imageTextProps} />
              case 'FeaturedTwoColumnTextRecord':
                const twoColsHighlightProps = {
                  highlight: module.firstColumnText,
                  text: module.secondColumnText,
                  highlightPos: module.swapColumns ? 'right' : 'left',
                  color: article.topics[0].color,
                }
                return <NewsTwoColsHighlight {...twoColsHighlightProps} />
              case 'HeadingRecord':
                return (
                  <NewsHeading title={module.text} headingSize={module.size} />
                )
              case 'ContentRecord':
                return <NewsTextBlock text={module.text} />
              case 'ImageRecord':
                return (
                  <BoxedImage
                    imageUrl={module.image?.responsiveImage?.src as string}
                  />
                )
              case 'FeaturedHeadingRecord':
                return (
                  <NewsHighlightTextBlock
                    title={module.subtext}
                    text={module.text}
                  />
                )
              case 'ProductsSliderRecord':
                const productcarouselProps1 = {
                  title: module.heading,
                  showAllLabel: module.actionText,
                  showAllTo: module.actionUrl,
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  products: useCardProps(module.products),
                }

                // console.log(productcarouselProps1)
                return <ShelfProductCarousel {...productcarouselProps1} />
              case 'ComparativeSliderRecord':
                const comparativeSliderProps = {
                  infoCards: module.slides.map((slide) => ({
                    imageUrl: slide.image?.responsiveImage?.src,
                    title: slide.heading,
                    infos: slide.traits.map((trait) => ({
                      data: trait.label,
                      value: trait.value,
                    })),
                  })),
                  legend: module.legend,
                }
                return (
                  <SingleNewsCardInfoCarousel {...comparativeSliderProps} />
                )
            }
            return null
          })
        : null}

      <NewsShareBlock />

      <ShelfNewsCarousel {...shelfNewsTwoProps} />
    </main>
  )
}

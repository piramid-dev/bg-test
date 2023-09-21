import type { MetaFunction, LoaderArgs } from '@remix-run/node'
import { useLoaderData, useNavigation } from '@remix-run/react'
import { useTranslation } from 'react-i18next'

import { useLocalizeLink } from '~/hooks/useLocalizeLink'
import SimpleHero from '~/components/Sections/SimpleHero/SimpleHero'
import FeaturedPostsCarousel from '~/components/Organisms/FeaturedPostsCarousel/FeaturedPostsCarousel'
import SectionFullSuperButtons from '~/components/Organisms/SectionFullSuperButtons/SectionFullSuperButtons'
import SectionFullWidth from '~/components/Organisms/SectionFullWidth/SectionFullWidth'
import ShelfNewsHighlight from '~/components/Organisms/ShelfNewsHighlight/ShelfNewsHighlight'
import ShelfProductCarousel from '~/components/Organisms/ShelfProductCarousel/ShelfProductCarousel'
import CardInfoBrand from '~/components/Organisms/CardInfoBrand/CardInfoBrand'
import { datoQuerySubscription, loadFragments } from '~/lib/datocms'
import { useCardProps } from '~/hooks/useCardProps'
import { useArticleCardProps } from '~/hooks/useArticleCardProps'
import type {
  SkiRecord,
  BrandRecord,
  SkinRecord,
  PoleRecord,
} from '~/lib/generated'
import {
  ResponsiveImageFragmentQuery,
  ArticleCardFragmentQuery,
} from '~/lib/generated'
import { getLocale } from '~/utils'

export const meta: MetaFunction = () => [
  { title: "Products - The Buyer's Guide" },
]

export const loader = async ({ request, params }: LoaderArgs) => {
  const slug = params.slug
  const fragments = loadFragments([
    ResponsiveImageFragmentQuery,
    ArticleCardFragmentQuery,
  ])
  const locale = getLocale(request)

  // const first = 100
  const brandQuery = `#graphql
    query ($slug: String, $locale: SiteLocale) {
      brand: brand(filter: { slug: { eq: $slug } }, locale: $locale) {
        id
        slug
        name
        image{
          responsiveImage(
            imgixParams: { fm: jpg }
          ) {
            ...responsiveImage
          }
        }
        heading
        subheading
        description
        information
        website
        country
        relatedFamiliesHeading
        relatedArticlesHeading
        relatedArticlesSubheading
        relatedProductsHeading
        relatedProductsSubheading
        featuredArticles{
          ...articleCard
        }
        relatedArticles{
          ...articleCard
        }
        relatedProductsImage{
          responsiveImage(
            imgixParams: { fm: jpg }
          ) {
            ...responsiveImage
          }
        }
        relatedFamiliesImage{
          responsiveImage(
            imgixParams: { fm: jpg }
          ) {
            ...responsiveImage
          }
        }
        relatedFamiliesImageMobile{
          responsiveImage(
            imgixParams: { fm: jpg }
          ) {
            ...responsiveImage
          }
        }
        relatedFamilies{
          id
          name
          slug
          imageSmall{
            responsiveImage(
              imgixParams: { fm: jpg}
            ) {
              ...responsiveImage
            }
          }
        }
        logo{
          responsiveImage(
            imgixParams: { fm: jpg }
          ) {
            ...responsiveImage
          }
        }
        _allReferencingSkis{
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
        _allReferencingSkins{
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
          media {
            webImage {
              responsiveImage(
                imgixParams: { fm: jpg, fit: crop, w: 1000, h: 1000, fpY:1}
              ) {
                ...responsiveImage
              }
            }
          }
        }
        _allReferencingPoles{
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
          awards {
            label 
            shortName
            color{
              hex
            }
          }
          types { name }
          weightMeasured
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
      }
    }
    ${fragments}
  `

  const datoQuerySub = await datoQuerySubscription({
    request,
    query: brandQuery,
    variables: { slug, locale }, // The number of items passed to the query
  })

  return {
    categoryData: datoQuerySub.datoQuerySubscription,
  }
}

export default function Category() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const transition = useNavigation()
  const { t } = useTranslation()
  const { l } = useLocalizeLink()

  const { categoryData } = useLoaderData()
  const brand = categoryData.initialData.brand as BrandRecord
  const relatedSkins = brand._allReferencingSkins as SkinRecord[]
  const relatedPoles = brand._allReferencingPoles as PoleRecord[]
  const relatedSkis = brand._allReferencingSkis as SkiRecord[]

  const heroSectionProps = {
    title: brand.heading,
    subtitle: brand.subheading,
    description: brand.description,
    imageUrl: brand.image?.responsiveImage?.src,
  }
  const BrandInfoProps = {
    title: 'Informazioni ',
    text: brand.information,
    logo: brand.logo?.responsiveImage?.src,
    infos: [
      {
        data: 'Prodotti',
        value: relatedSkis.length + relatedSkins.length + relatedPoles.length,
      },
      {
        data: 'Link',
        value: brand.website,
        valueIsLink: true,
      },
      {
        data: 'Nazione',
        value: brand.country,
      },
    ],
  }

  const sectionBtn1Props = {
    title: brand.relatedFamiliesHeading,
    imageUrl: {
      desktop: brand.relatedFamiliesImage?.responsiveImage?.src,
      mobile: brand.relatedFamiliesImageMobile?.responsiveImage?.src,
    },
    imagePositio: 'cover',
    buttons: brand.relatedFamilies.map((family) => ({
      label: family.name,
      to: l(`/products/${family.slug}`),
      leftImageSrc: family.imageSmall?.responsiveImage?.src,
    })),
  }

  console.log(brand.featuredArticles)

  const featuredPostsProps = {
    title: t('featuredArticles'),
    posts: [...useArticleCardProps(brand.featuredArticles)],
  }

  const ShelfNewsProps = {
    title: brand.relatedArticlesHeading,
    subtitle: brand.relatedArticlesSubheading,
    news: [...useArticleCardProps(brand.relatedArticles)],
  }

  const sectionTwoProps = {
    title: brand.relatedProductsHeading,
    subtitle: brand.relatedProductsSubheading,
    imageUrl: {
      desktop: brand.relatedProductsImage?.responsiveImage?.src,
      mobile: brand.relatedProductsImage?.responsiveImage?.src,
    },
    textPosition: 'bottom',
  }

  const ProductcarouselOneProps = {
    title: t('skis'),
    count: relatedSkis.length,
    products: useCardProps(relatedSkis),
  }

  const ProductcarouselTwoProps = {
    title: t('skins'),
    count: relatedSkins.length,
    products: useCardProps(relatedSkins),
  }

  const ProductcarouselThreeProps = {
    title: t('poles'),
    count: relatedPoles.length,
    products: useCardProps(relatedPoles),
  }

  return (
    <main className="relative min-h-screen bg-white">
      <SimpleHero {...heroSectionProps} />
      <FeaturedPostsCarousel {...featuredPostsProps} />

      <CardInfoBrand {...BrandInfoProps} />
      <SectionFullSuperButtons {...sectionBtn1Props} />
      <ShelfNewsHighlight {...ShelfNewsProps} />
      <SectionFullWidth {...sectionTwoProps} />

      {ProductcarouselOneProps.products &&
      ProductcarouselOneProps.products.length > 0 ? (
        <ShelfProductCarousel {...ProductcarouselOneProps} />
      ) : null}
      {ProductcarouselTwoProps.products &&
      ProductcarouselTwoProps.products.length > 0 ? (
        <ShelfProductCarousel {...ProductcarouselTwoProps} />
      ) : null}
      {ProductcarouselThreeProps.products &&
      ProductcarouselThreeProps.products.length > 0 ? (
        <ShelfProductCarousel {...ProductcarouselThreeProps} />
      ) : null}
    </main>
  )
}

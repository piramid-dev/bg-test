import type { V2_MetaFunction, LoaderArgs } from '@remix-run/node'
import { useTranslation } from 'react-i18next'
import { useLoaderData } from '@remix-run/react'

import { useCardProps } from '~/hooks/useCardProps'
import { useLocalizeLink } from '~/hooks/useLocalizeLink'
// import { useContext } from '~/hooks/useContext'
import SimpleHero from '~/components/Sections/SimpleHero/SimpleHero'
import ShelfNewsCarousel from '~/components/Organisms/ShelfNewsCarousel/ShelfNewsCarousel'
import OverlappedTextBlock from '~/components/Organisms/OverlappedTextBlock/OverlappedTextBlock'
import VideoLightbox from '~/components/Organisms/VideoLightbox/VideoLightbox'
import SectionTwoCols from '~/components/Organisms/SectionTwoCols/SectionTwoCols'
import ShelfTeamCarousel from '~/components/Organisms/ShelfTeamCarousel/ShelfTeamCarousel'
import ShelfProductCarousel from '~/components/Organisms/ShelfProductCarousel/ShelfProductCarousel'
import { datoQuerySubscription, loadFragments } from '~/lib/datocms'
import {
  ArticleCardFragmentQuery,
  ResponsiveImageFragmentQuery,
} from '~/lib/generated'
import { useArticleCardProps } from '~/hooks/useArticleCardProps'
import { getLocale } from '~/utils'

export const meta: V2_MetaFunction = () => [{ title: "The Buyer's Guide" }]

export const loader = async ({ request, params }: LoaderArgs) => {
  const fragments = loadFragments([
    ArticleCardFragmentQuery,
    ResponsiveImageFragmentQuery,
  ])
  const locale = getLocale(request)

  const homeQuery = `#graphql
    query(
        $locale: SiteLocale, 
      ){
      about : about(locale: $locale){
        heading
        video{
          url
        }
        videoCover{
          responsiveImage(
            imgixParams: { fm: jpg }
          ) {
            ...responsiveImage
          }
        }
        relatedArticles{
          ...articleCard
        }
        relatedArticlesHeading
        featuredProductsHeading
        featuredProductsSubheading
        featuredProductsImage{
          responsiveImage(
            imgixParams: { fm: jpg }
          ) {
            ...responsiveImage
          }
        }
        bestProducts{
          
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
          _allReferencingBoots{
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
          _allReferencingBindings{
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

          _allReferencingSplitboards{
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

          _allReferencingArtvas{
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

          _allReferencingAirbags{
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

          _allReferencingProbes{
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

          _allReferencingShovels{
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

          _allReferencingSplitboardBindings{
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

          _allReferencingSplitboardBoots{
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

          _allReferencingPoles{
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

          _allReferencingHelmets{
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

          _allReferencingCrampons{
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

          _allReferencingAxes{
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

          _allReferencingHarnesses{
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

          _allReferencingSkins{
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
        selectedProducts{
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
          _allReferencingBoots{
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
          _allReferencingBindings{
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

          _allReferencingSplitboards{
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

          _allReferencingArtvas{
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

          _allReferencingAirbags{
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

          _allReferencingProbes{
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

          _allReferencingShovels{
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

          _allReferencingSplitboardBindings{
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

          _allReferencingSplitboardBoots{
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

          _allReferencingPoles{
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

          _allReferencingHelmets{
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

          _allReferencingCrampons{
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

          _allReferencingAxes{
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

          _allReferencingHarnesses{
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

          _allReferencingSkins{
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
      lastArticles: allArticles(first: 10, orderBy: _firstPublishedAt_DESC, locale: $locale) {
        ...articleCard
      }
      common: common(locale: $locale) {
        blogHeading
        launchText
        launchTextSecondary
        teamHeading
        teamSubheading
        teamImage{
          responsiveImage(
            imgixParams: { fm: jpg }
          ) {
            ...responsiveImage
          }
        }
      }
      tester: allPeople(locale: $locale, filter: {roles: {eq: 178289417}}) {
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
      authors: allPeople(locale: $locale, filter: {roles: {eq: 182039963}}) {
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
    }
    ${fragments}
  `

  const datoQuery = await datoQuerySubscription({
    request,
    query: homeQuery,
    variables: {
      locale: locale,
    },
  })

  return {
    subscriptionPageData: datoQuery.datoQuerySubscription,
  }
}

export default function Index() {
  const { t } = useTranslation()
  const { l } = useLocalizeLink()
  // const { user } = useContext()
  const { subscriptionPageData } = useLoaderData()
  const about = subscriptionPageData.initialData.about
  const lastArticles = subscriptionPageData.initialData.lastArticles
  const common = subscriptionPageData.initialData.common
  const tester = subscriptionPageData.initialData.tester
  const authors = subscriptionPageData.initialData.authors
  const bestProducts = subscriptionPageData.initialData.about.bestProducts
  const selectedProducts =
    subscriptionPageData.initialData.about.selectedProducts

  const bestProductsMerged = [
    ...bestProducts.map((award) => {
      return award._allReferencingSkis
    }),
    ...bestProducts.map((award) => {
      return award._allReferencingBoots
    }),
    ...bestProducts.map((award) => {
      return award._allReferencingBindings
    }),
    ...bestProducts.map((award) => {
      return award._allReferencingSplitboards
    }),
    ...bestProducts.map((award) => {
      return award._allReferencingArtvas
    }),
    ...bestProducts.map((award) => {
      return award._allReferencingAirbags
    }),
    ...bestProducts.map((award) => {
      return award._allReferencingProbes
    }),
    ...bestProducts.map((award) => {
      return award._allReferencingShovels
    }),
    ...bestProducts.map((award) => {
      return award._allReferencingSplitboardBindings
    }),
    ...bestProducts.map((award) => {
      return award._allReferencingSplitboardBoots
    }),
    ...bestProducts.map((award) => {
      return award._allReferencingPoles
    }),
    ...bestProducts.map((award) => {
      return award._allReferencingHelmets
    }),
    ...bestProducts.map((award) => {
      return award._allReferencingCrampons
    }),
    ...bestProducts.map((award) => {
      return award._allReferencingAxes
    }),
    ...bestProducts.map((award) => {
      return award._allReferencingHarnesses
    }),
    ...bestProducts.map((award) => {
      return award._allReferencingSkins
    }),
  ].flat(1)

  //remove duplicates from bestProductsMerged
  const bestProductsMergedUnique = bestProductsMerged.filter(
    (thing, index, self) => index === self.findIndex((t) => t.id === thing.id),
  )

  const selectedProductsMerged = [
    ...selectedProducts.map((award) => {
      return award._allReferencingSkis
    }),
    ...selectedProducts.map((award) => {
      return award._allReferencingBoots
    }),
    ...selectedProducts.map((award) => {
      return award._allReferencingBindings
    }),
    ...selectedProducts.map((award) => {
      return award._allReferencingSplitboards
    }),
    ...selectedProducts.map((award) => {
      return award._allReferencingArtvas
    }),
    ...selectedProducts.map((award) => {
      return award._allReferencingAirbags
    }),
    ...selectedProducts.map((award) => {
      return award._allReferencingProbes
    }),
    ...selectedProducts.map((award) => {
      return award._allReferencingShovels
    }),
    ...selectedProducts.map((award) => {
      return award._allReferencingSplitboardBindings
    }),
    ...selectedProducts.map((award) => {
      return award._allReferencingSplitboardBoots
    }),
    ...selectedProducts.map((award) => {
      return award._allReferencingPoles
    }),
    ...selectedProducts.map((award) => {
      return award._allReferencingHelmets
    }),
    ...selectedProducts.map((award) => {
      return award._allReferencingCrampons
    }),
    ...selectedProducts.map((award) => {
      return award._allReferencingAxes
    }),
    ...selectedProducts.map((award) => {
      return award._allReferencingHarnesses
    }),
    ...selectedProducts.map((award) => {
      return award._allReferencingSkins
    }),
  ].flat(1)

  //remove duplicates from bestProductsMerged
  const selectedProductsMergedUnique = selectedProductsMerged.filter(
    (thing, index, self) => index === self.findIndex((t) => t.id === thing.id),
  )

  const heroSectionProps = {
    title: about.heading,
    imageUrl: 'https://picsum.photos/seed/picsum/1920/1080',
  }

  const ShelfNewsProps = {
    title: common.blogHeading,
    news: useArticleCardProps(lastArticles),
  }

  const ShelfNewsProps2 = {
    title: about.relatedArticlesHeading,
    news: [...useArticleCardProps(about.relatedArticles)],
  }

  const OverlappedTextProps = {
    eyelet: common.launchTextSecondary,
    text: common.launchText,
  }

  const videoProps = {
    videoUrl: about.video.url,
    videoCover: about.videoCover.responsiveImage?.src,
  }

  const twoColPropsTeam = {
    title: common.teamHeading,
    shortDesc: common.teamSubheading,
    imageUrl: common.teamImage.responsiveImage?.src,
  }

  const twoColPropsStars = {
    title: about.featuredProductsHeading,
    shortDesc: about.featuredProductsSubheading,
    imageUrl: about.featuredProductsImage.responsiveImage?.src,
  }

  const TeamcarouselOneProps = {
    title: t('tester'),
    showAllLabel: t('seeAll'),
    showAllTo: l('/team'),
    teams: [
      ...tester.map((person) => {
        return {
          chips: [
            ...person.categories.map((category) => category.name),
            ...person.roles.map((role) => role.name),
          ],
          name: person.name.split(' ')[0],
          surname: person.name.split(' ').slice(1).join(' '),
          qualification: person.jobTitle,
          profileImageUrl: person.image?.responsiveImage?.src,
          to: l(`/team/${person.slug}`),
        }
      }),
    ],
  }

  const TeamcarouselTwoProps = {
    title: t('authors'),
    showAllLabel: t('seeAll'),
    showAllTo: l('/team'),
    teams: [
      ...authors.map((person) => {
        return {
          chips: [
            ...person.categories.map((category) => category.name),
            ...person.roles.map((role) => role.name),
          ],
          name: person.name.split(' ')[0],
          surname: person.name.split(' ').slice(1).join(' '),
          qualification: person.jobTitle,
          profileImageUrl: person.image?.responsiveImage?.src,
          to: l(`/team/${person.slug}`),
        }
      }),
    ],
  }

  const ProductcarouselProps1 = {
    title: t('bestOfTheYear'),
    showAllLabel: t('seeAll'),
    showAllTo: l('/products'),
    products: useCardProps(bestProductsMergedUnique),
  }

  const ProductcarouselProps2 = {
    title: t('selectdForYou'),
    showAllLabel: t('seeAll'),
    showAllTo: l('/products'),
    products: useCardProps(selectedProductsMergedUnique),
  }

  return (
    <>
      <SimpleHero {...heroSectionProps} />
      <ShelfNewsCarousel {...ShelfNewsProps} />
      <OverlappedTextBlock {...OverlappedTextProps} />
      <VideoLightbox {...videoProps} />
      <ShelfNewsCarousel {...ShelfNewsProps2} />
      <SectionTwoCols {...twoColPropsTeam} />

      <ShelfTeamCarousel {...TeamcarouselOneProps} />
      <ShelfTeamCarousel {...TeamcarouselTwoProps} />

      <SectionTwoCols {...twoColPropsStars} />
      <ShelfProductCarousel {...ProductcarouselProps1} />
      <ShelfProductCarousel {...ProductcarouselProps2} />
    </>
  )
}

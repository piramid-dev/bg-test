import type { V2_MetaFunction, LoaderArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { useTranslation } from 'react-i18next'

import { useLocalizeLink } from '~/hooks/useLocalizeLink'
import SimpleHero from '~/components/Sections/SimpleHero/SimpleHero'
import SectionFullSuperButtons from '~/components/Organisms/SectionFullSuperButtons/SectionFullSuperButtons'
import SectionFullWidth from '~/components/Organisms/SectionFullWidth/SectionFullWidth'
import ShelfNewsHighlight from '~/components/Organisms/ShelfNewsHighlight/ShelfNewsHighlight'
import ShelfProductCarousel from '~/components/Organisms/ShelfProductCarousel/ShelfProductCarousel'
import ShelfStyleCarousel from '~/components/Organisms/ShelfStyleCarousel/ShelfStyleCarousel'
import { useArticleCardProps } from '~/hooks/useArticleCardProps'
import { datoQuerySubscription, loadFragments } from '~/lib/datocms'
import type {
  CategoryRecord,
  BootRecord,
  SkiRecord,
  BindingRecord,
  CommonRecord,
  ScopeRecord,
  SplitboardRecord,
  SplitboardBootRecord,
  SplitboardBindingRecord,
  PoleRecord,
  SkinRecord,
  AxRecord,
  CramponRecord,
  HarnessRecord,
  HelmetRecord,
  ArtvaRecord,
  ShovelRecord,
  ProbeRecord,
  AirbagRecord,
} from '~/lib/generated'
import {
  ResponsiveImageFragmentQuery,
  ArticleCardFragmentQuery,
} from '~/lib/generated'
import { useCardProps } from '~/hooks/useCardProps'
import { getLocale } from '~/utils'

export const meta: V2_MetaFunction = () => [
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
  const categoryQuery = `#graphql
    query ($slug: String, $locale: SiteLocale) {
      common: common(locale: $locale) {
        id
        brandHeading
        brandSubheading
        safetyHeading
        safetyFamiliesRelated{
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
        safetyImage{
          responsiveImage(
            imgixParams: { fm: jpg}
          ) {
            ...responsiveImage
          }
        }
        safetyImageMobile{
          responsiveImage(
            imgixParams: { fm: jpg}
          ) {
            ...responsiveImage
          }
        }
        blogHeading
        categoryHeading
        categoryCtaText
        categoryCtaUrl
      }
      scope: scope(filter: { slug: { eq: $slug } }, locale: $locale) {
        id
        name
        slug
        heading
        subheading
        description
        relatedFamiliesHeading
        relatedArticles{
          ...articleCard
        }
        _allReferencingCategories{
          id
          name
          slug
          heading
          subheading
          image{
            responsiveImage(
              imgixParams: { fm: jpg, fit: crop, w: 740, h: 1170, fpY:0.5, fpX:0.9 }
            ) {
              ...responsiveImage
            }
          }
        }
        _allReferencingSkis{
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
        _allReferencingBoots{
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
          leverNumber
          weightDeclared
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
        _allReferencingBindings{
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
          types {
            name
          }
          weightDeclared
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
        _allReferencingSplitboards{
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
            name
            shortName
            color{
              hex
            }
          }
          priceEur
          priceUsd
          construction { name }
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
        _allReferencingSkins{
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
        _allReferencingAxes{
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
        _allReferencingCrampons{
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
        _allReferencingHarnesses{
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
        _allReferencingHelmets{
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
        _allReferencingArtvas{
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
            shortName
            color{
              hex
            }
          }
          priceEur
          priceUsd
          autonomy
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
        _allReferencingProbes{
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
        _allReferencingAirbags{
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
        image{
          responsiveImage(
            imgixParams: { fm: jpg}
          ) {
            ...responsiveImage
          }
        }
        relatedFamiliesImage{
          responsiveImage(
            imgixParams: { fm: jpg}
          ) {
            ...responsiveImage
          }
        }
        relatedFamiliesImageMobile{
          responsiveImage(
            imgixParams: { fm: jpg}
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
        relatedArticlesHeading
        relatedArticlesSubheading
        relatedProductsHeading
        relatedProductsSubheading
        relatedProductsTextPosition
        relatedProductsImage{
          responsiveImage(
            imgixParams: { fm: jpg}
          ) {
            ...responsiveImage
          }
        }
      }
    }
    ${fragments}
  `

  const datoQuerySub = await datoQuerySubscription({
    request,
    query: categoryQuery,
    variables: { slug, locale }, // The number of items passed to the query
  })

  return {
    categoryData: datoQuerySub.datoQuerySubscription,
  }
}

export default function Category() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation()
  const { l } = useLocalizeLink()

  const { categoryData } = useLoaderData()
  const scope = categoryData.initialData.scope as ScopeRecord
  const common = categoryData.initialData.common as CommonRecord
  const relatedBoots = scope._allReferencingBoots as BootRecord[]
  const relatedBindings = scope._allReferencingBindings as BindingRecord[]
  const relatedSkis = scope._allReferencingSkis as SkiRecord[]
  const relatedCategories = scope?._allReferencingCategories as CategoryRecord[]
  const relatedSplitboards =
    scope?._allReferencingSplitboards as SplitboardRecord[]
  const relatedSplitboardBoots =
    scope?._allReferencingSplitboardBoots as SplitboardBootRecord[]
  const relatedSplitboardBindings =
    scope?._allReferencingSplitboardBindings as SplitboardBindingRecord[]

  const relatedPoles = scope?._allReferencingPoles as PoleRecord[]
  const relatedSkins = scope?._allReferencingSkins as SkinRecord[]
  const relatedAxes = scope?._allReferencingAxes as AxRecord[]
  const relatedCrampons = scope?._allReferencingCrampons as CramponRecord[]
  const relatedHarnesses = scope?._allReferencingHarnesses as HarnessRecord[]
  const relatedHelmets = scope?._allReferencingHelmets as HelmetRecord[]
  const relatedArtvas = scope?._allReferencingArtvas as ArtvaRecord[]
  const relatedShovels = scope?._allReferencingShovels as ShovelRecord[]
  const relatedProbes = scope?._allReferencingProbes as ProbeRecord[]
  const relatedAirbags = scope?._allReferencingAirbags as AirbagRecord[]

  const heroSectionProps = {
    title: scope.heading,
    subtitle: scope.subheading,
    description: scope.description,
    imageUrl: scope.image?.responsiveImage?.src,
  }
  const sectionBtn1Props = {
    title: scope.relatedFamiliesHeading,
    imageUrl: {
      desktop: scope.relatedFamiliesImage?.responsiveImage?.src,
      mobile: scope.relatedFamiliesImageMobile?.responsiveImage?.src,
    },
    imagePositio: 'cover',
    buttons: scope.relatedFamilies.map((family) => ({
      label: family.name,
      to: `/products/${family.slug}`,
      leftImageSrc: family.imageSmall?.responsiveImage?.src,
    })),
  }

  const sectionTwoProps = {
    title: scope.relatedProductsHeading,
    subtitle: scope.relatedProductsSubheading,
    imageUrl: {
      desktop: scope.relatedProductsImage?.responsiveImage?.src,
      mobile: scope.relatedProductsImage?.responsiveImage?.src,
    },
    textPosition: scope.relatedProductsTextPosition,
  }

  const ShelfNewsProps = {
    title: scope.relatedArticlesHeading,
    subtitle: scope.relatedArticlesSubheading,
    news: [...useArticleCardProps(scope.relatedArticles)],
  }

  const ProductcarouselOneProps = {
    title: t('skis'),
    count: relatedSkis.length,
    products: useCardProps(
      relatedSkis,
      relatedSkis.length > 0 ? relatedSkis[0].families : [],
      'ski',
    ),
  }

  const ProductcarouselTwoProps = {
    title: t('boots'),
    count: relatedBoots.length,
    products: useCardProps(
      relatedBoots,
      relatedBoots.length > 0 ? relatedBoots[0].families : [],
      'boot',
    ),
  }

  const ProductcarouselThreeProps = {
    title: t('bindings'),
    count: relatedBindings.length,
    products: useCardProps(
      relatedBindings,
      relatedBindings.length > 0 ? relatedBindings[0].families : [],
      'binding',
    ),
  }

  const ProductcarouselFourProps = {
    title: t('splitboards'),
    count: relatedSplitboards.length,
    products: useCardProps(
      relatedSplitboards,
      relatedSplitboards.length > 0 ? relatedSplitboards[0].families : [],
      'splitboard',
    ),
  }

  const ProductcarouselFiveProps = {
    title: t('splitboardBoots'),
    count: relatedSplitboardBoots.length,
    products: useCardProps(
      relatedSplitboardBoots,
      relatedSplitboardBoots.length > 0
        ? relatedSplitboardBoots[0].families
        : [],
      'splitboard_boot',
    ),
  }

  const ProductcarouselSixProps = {
    title: t('splitboardBindings'),
    count: relatedSplitboardBindings.length,
    products: useCardProps(
      relatedSplitboardBindings,
      relatedSplitboardBindings.length > 0
        ? relatedSplitboardBindings[0].families
        : [],
      'splitboard_binding',
    ),
  }

  const ProductcarouselSevenProps = {
    title: t('poles'),
    count: relatedPoles.length,
    products: useCardProps(
      relatedPoles,
      relatedPoles.length > 0 ? relatedPoles[0].families : [],
      'pole',
    ),
  }

  const ProductcarouselEightProps = {
    title: t('skins'),
    count: relatedSkins.length,
    products: useCardProps(
      relatedSkins,
      relatedSkins.length > 0 ? relatedSkins[0].families : [],
      'skin',
    ),
  }

  const ProductcarouselNineProps = {
    title: t('axes'),
    count: relatedAxes.length,
    products: useCardProps(
      relatedAxes,
      relatedAxes.length > 0 ? relatedAxes[0].families : [],
      'axe',
    ),
  }

  const ProductcarouselTenProps = {
    title: t('crampons'),
    count: relatedCrampons.length,
    products: useCardProps(
      relatedCrampons,
      relatedCrampons.length > 0 ? relatedCrampons[0].families : [],
      'crampon',
    ),
  }

  const ProductcarouselElevenProps = {
    title: t('harnesses'),
    count: relatedHarnesses.length,
    products: useCardProps(
      relatedHarnesses,
      relatedHarnesses.length > 0 ? relatedHarnesses[0].families : [],
      'harness',
    ),
  }

  const ProductcarouselTwelveProps = {
    title: t('helmets'),
    count: relatedHelmets.length,
    products: useCardProps(
      relatedHelmets,
      relatedHelmets.length > 0 ? relatedHelmets[0].families : [],
      'helmet',
    ),
  }

  const ProductcarouselThirteenProps = {
    title: t('artvas'),
    count: relatedArtvas.length,
    products: useCardProps(
      relatedArtvas,
      relatedArtvas.length > 0 ? relatedArtvas[0].families : [],
      'artva',
    ),
  }

  const ProductcarouselFourteenProps = {
    title: t('shovels'),
    count: relatedShovels.length,
    products: useCardProps(
      relatedShovels,
      relatedShovels.length > 0 ? relatedShovels[0].families : [],
      'shovel',
    ),
  }

  const ProductcarouselFifteenProps = {
    title: t('probes'),
    count: relatedProbes.length,
    products: useCardProps(
      relatedProbes,
      relatedProbes.length > 0 ? relatedProbes[0].families : [],
      'probe',
    ),
  }

  const ProductcarouselSixteenProps = {
    title: t('airbags'),
    count: relatedAirbags.length,
    products: useCardProps(
      relatedAirbags,
      relatedAirbags.length > 0 ? relatedAirbags[0].families : [],
      'airbag',
    ),
  }

  const ShelfCategoriesProps = {
    title: common.categoryHeading,
    subtitle: scope.name,
    ctaText: '',
    ctaBtnTo: '',
    ctaBtnLabel: '',
    styles: [
      ...(relatedCategories
        ? relatedCategories.map((category) => {
            return {
              title: category.heading,
              subtitle: category.subheading,
              imageUrl: category.image?.responsiveImage?.src,
              to: l(`/categories/${category.slug}`),
              variant: 'dark',
            }
          })
        : []),
    ],
  }

  //if scope slug is differenf from 'scialpinismo' add {ctaText: common.categoryCtaText,ctaBtnTo: common.categoryCtaUrl, ctaBtnLabel: t('findOutNow'),} to ShelfCategoriesProps
  if (scope.slug === t('skiTouringSlug')) {
    ShelfCategoriesProps.ctaText = common.categoryCtaText
    ShelfCategoriesProps.ctaBtnTo = common.categoryCtaUrl
    ShelfCategoriesProps.ctaBtnLabel = t('findOutNow')
  }

  // console.log(skis)
  return (
    <main className="relative min-h-screen bg-white">
      <SimpleHero {...heroSectionProps} />
      <SectionFullSuperButtons {...sectionBtn1Props} />
      <ShelfNewsHighlight {...ShelfNewsProps} />
      <SectionFullWidth {...sectionTwoProps} />
      {relatedSkis.length > 0 ? (
        <ShelfProductCarousel {...ProductcarouselOneProps} />
      ) : null}
      {relatedBoots.length > 0 ? (
        <ShelfProductCarousel {...ProductcarouselTwoProps} />
      ) : null}
      {relatedBindings.length > 0 ? (
        <ShelfProductCarousel {...ProductcarouselThreeProps} />
      ) : null}
      {relatedSplitboards.length > 0 ? (
        <ShelfProductCarousel {...ProductcarouselFourProps} />
      ) : null}
      {relatedSplitboardBoots.length > 0 ? (
        <ShelfProductCarousel {...ProductcarouselFiveProps} />
      ) : null}
      {relatedSplitboardBindings.length > 0 ? (
        <ShelfProductCarousel {...ProductcarouselSixProps} />
      ) : null}
      {relatedPoles.length > 0 ? (
        <ShelfProductCarousel {...ProductcarouselSevenProps} />
      ) : null}
      {relatedSkins.length > 0 ? (
        <ShelfProductCarousel {...ProductcarouselEightProps} />
      ) : null}
      {relatedAxes.length > 0 ? (
        <ShelfProductCarousel {...ProductcarouselNineProps} />
      ) : null}
      {relatedCrampons.length > 0 ? (
        <ShelfProductCarousel {...ProductcarouselTenProps} />
      ) : null}
      {relatedHarnesses.length > 0 ? (
        <ShelfProductCarousel {...ProductcarouselElevenProps} />
      ) : null}
      {relatedHelmets.length > 0 ? (
        <ShelfProductCarousel {...ProductcarouselTwelveProps} />
      ) : null}
      {relatedArtvas.length > 0 ? (
        <ShelfProductCarousel {...ProductcarouselThirteenProps} />
      ) : null}
      {relatedShovels.length > 0 ? (
        <ShelfProductCarousel {...ProductcarouselFourteenProps} />
      ) : null}
      {relatedProbes.length > 0 ? (
        <ShelfProductCarousel {...ProductcarouselFifteenProps} />
      ) : null}
      {relatedAirbags.length > 0 ? (
        <ShelfProductCarousel {...ProductcarouselSixteenProps} />
      ) : null}

      {relatedCategories.length > 0 ? (
        <ShelfStyleCarousel {...ShelfCategoriesProps} />
      ) : null}
    </main>
  )
}

import type { MetaFunction, LoaderArgs } from '@remix-run/node'
import { useLoaderData, useNavigation } from '@remix-run/react'
import { useTranslation } from 'react-i18next'

// import { responsiveImageFragment } from '~/lib/fragments'
import { useLocalizeLink } from '~/hooks/useLocalizeLink'
import SimpleHero from '~/components/Sections/SimpleHero/SimpleHero'
import SectionFullSuperButtons from '~/components/Organisms/SectionFullSuperButtons/SectionFullSuperButtons'
import SectionFullWidth from '~/components/Organisms/SectionFullWidth/SectionFullWidth'
import ShelfNewsHighlight from '~/components/Organisms/ShelfNewsHighlight/ShelfNewsHighlight'
import ShelfNewsCarousel from '~/components/Organisms/ShelfNewsCarousel/ShelfNewsCarousel'
import ShelfProductCarousel from '~/components/Organisms/ShelfProductCarousel/ShelfProductCarousel'
import ShelfTeamCarousel from '~/components/Organisms/ShelfTeamCarousel/ShelfTeamCarousel'
import ShelfBrandCarousel from '~/components/Organisms/ShelfBrandCarousel/ShelfBrandCarousel'
import ShelfStyleCarousel from '~/components/Organisms/ShelfStyleCarousel/ShelfStyleCarousel'
import SectionTwoCols from '~/components/Organisms/SectionTwoCols/SectionTwoCols'
import { datoQuerySubscription, loadFragments } from '~/lib/datocms'
import { useCardProps } from '~/hooks/useCardProps'
import type {
  CategoryRecord,
  BootRecord,
  SkiRecord,
  BindingRecord,
  PersonRecord,
  CommonRecord,
  BrandRecord,
  ArticleRecord,
  SplitboardRecord,
  SplitboardBootRecord,
  SplitboardBindingRecord,
  SkinRecord,
  PoleRecord,
} from '~/lib/generated'
import {
  ResponsiveImageFragmentQuery,
  ArticleCardFragmentQuery,
} from '~/lib/generated'
// import { useLocalizeLink } from '~/hooks/useLocalizeLink'
import { useArticleCardProps } from '~/hooks/useArticleCardProps'
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
  const categoryQuery = `#graphql
    query ($slug: String, $locale: SiteLocale) {
      brands: allBrands( filter: {isFeatured: {eq: true}}, locale: $locale){
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
      }
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
        teamHeading
        teamSubheading
        teamSliderTitle
        teamImage{
          responsiveImage(
            imgixParams: { fm: jpg}
          ) {
            ...responsiveImage
          }
        }
      }
      category: category(filter: { slug: { eq: $slug } }, locale: $locale) {
        id
        name
        slug
        heading
        subheading
        description
        relatedFamiliesHeading
        scope{
          id
          name
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
        }
        _allReferencingPeople{
          id
          name
          slug
          categories{
            name
          }
          roles{
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
        _allReferencingArticles{
          ...articleCard
        }
        _allReferencingPoles{
          __typename
          id
          name
          slug
          categories {
            name
            slug
          }
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
        relatedArticles{
          ...articleCard
        }
        relatedProductsImage{
          responsiveImage(
            imgixParams: { fm: jpg}
          ) {
            ...responsiveImage
          }
        }
      }
      lastArticles: allArticles(first: 10, orderBy: _firstPublishedAt_DESC, locale: $locale) {
        ...articleCard
      }
    }
    ${fragments}
  `

  const datoQuerySub = await datoQuerySubscription({
    request,
    query: categoryQuery,
    variables: { slug, locale },
  })

  return {
    categoryData: datoQuerySub.datoQuerySubscription,
    categoriesRelatedData:
      datoQuerySub.datoQuerySubscription.initialData.category.scope
        ._allReferencingCategories,
  }
}

export default function Category() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const transition = useNavigation()
  const { t } = useTranslation()
  const { l } = useLocalizeLink()

  // const { l } = useLocalizeLink()

  const { categoryData, categoriesRelatedData } = useLoaderData()
  const category = categoryData.initialData.category as CategoryRecord
  const people = category._allReferencingPeople as PersonRecord[]
  const common = categoryData.initialData.common as CommonRecord
  const brands = categoryData.initialData.brands as BrandRecord[]
  const relatedBoots = category._allReferencingBoots as BootRecord[]
  const relatedBindings = category._allReferencingBindings as BindingRecord[]
  const relatedSkis = category._allReferencingSkis as SkiRecord[]
  const relatedSplitboards =
    category._allReferencingSplitboards as SplitboardRecord[]
  const relatedSplitboardBoots =
    category._allReferencingSplitboardBoots as SplitboardBootRecord[]
  const relatedSplitboardBindings =
    category._allReferencingSplitboardBindings as SplitboardBindingRecord[]
  const relatedSkins = category._allReferencingSkins as SkinRecord[]
  const relatedPoles = category._allReferencingPoles as PoleRecord[]

  const categoriesRelated = categoriesRelatedData as CategoryRecord[]
  const relatedArticles = category.relatedArticles as ArticleRecord[]
  const lastArticles = categoryData.initialData.lastArticles as ArticleRecord[]

  const twoColProps = {
    title: common.teamHeading,
    shortDesc: common.teamSubheading,
    imageUrl: common.teamImage?.responsiveImage?.src,
  }

  const heroSectionProps = {
    title: category.heading!,
    subtitle: category.subheading,
    description: category.description,
    imageUrl: category.image?.responsiveImage?.src,
  }
  const sectionBtn1Props = {
    title: category.relatedFamiliesHeading,
    imageUrl: {
      desktop: category.relatedFamiliesImage?.responsiveImage?.src,
      mobile: category.relatedFamiliesImageMobile?.responsiveImage?.src,
    },
    imagePositio: 'cover',
    buttons: category.relatedFamilies.map((family) => ({
      label: family.name,
      to: l(`/products/${family.slug}?category=${category.name}`),
      leftImageSrc: family.imageSmall?.responsiveImage?.src,
    })),
  }

  const sectionBtn2Props = {
    title: common.safetyHeading,
    imageUrl: {
      desktop: common.safetyImage?.responsiveImage?.src,
      mobile: common.safetyImageMobile?.responsiveImage?.src,
    },
    imagePosition: 'left',
    buttons: [
      ...common.safetyFamiliesRelated.map((family) => ({
        label: family.name,
        to: l(`/products/${family.slug}?category=${category.name}`),
        leftImageSrc: family.imageSmall?.responsiveImage?.src,
      })),
    ],
  }
  const sectionTwoProps = {
    title: category.relatedProductsHeading,
    subtitle: category.relatedProductsSubheading,
    imageUrl: {
      desktop: category.relatedProductsImage?.responsiveImage?.src,
      mobile: category.relatedProductsImage?.responsiveImage?.src,
    },
    textPosition: 'bottom',
  }

  const ShelfNewsProps = {
    title: category.relatedArticlesHeading,
    subtitle: category.relatedArticlesSubheading,
    news: useArticleCardProps(relatedArticles),
    showAllLabel: t('seeAll'),
    showAllTo: l(`/articles?category=${category.name}`),
  }

  const ShelfNewsTwoProps = {
    title: common.blogHeading,
    news: useArticleCardProps(lastArticles),
  }

  const ProductcarouselOneProps = {
    title: t('skis'),
    count: relatedSkis.length,
    products: useCardProps(
      relatedSkis,
      relatedSkis.length > 0 ? relatedSkis[0].families : [],
      'ski',
    ),
    showAllLabel: t('showAll'),
    showAllTo: l(`/products/skis?category=${category.name}`),
  }

  const ProductcarouselTwoProps = {
    title: t('boots'),
    count: relatedBoots.length,
    products: useCardProps(
      relatedBoots,
      relatedBoots.length > 0 ? relatedBoots[0].families : [],
      'boot',
    ),
    showAllLabel: t('showAll'),
    showAllTo: l(`/products/boots?category=${category.name}`),
  }

  const ProductcarouselThreeProps = {
    title: t('bindings'),
    count: relatedBindings.length,
    products: useCardProps(
      relatedBindings,
      relatedBindings.length > 0 ? relatedBindings[0].families : [],
      'binding',
    ),
    showAllLabel: t('showAll'),
    showAllTo: l(`/products/bindings?category=${category.name}`),
  }

  const ProductcarouselFourProps = {
    title: t('splitboards'),
    count: relatedSplitboards.length,
    products: useCardProps(
      relatedSplitboards,
      relatedSplitboards.length > 0 ? relatedSplitboards[0].families : [],
      'splitboard',
    ),
    showAllLabel: t('showAll'),
    showAllTo: l(`/products/splitboards?category=${category.name}`),
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
    showAllLabel: t('showAll'),
    showAllTo: l(`/products/splitboards-boots?category=${category.name}`),
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
    showAllLabel: t('showAll'),
    showAllTo: l(`/products/splitboards-bindings?category=${category.name}`),
  }

  const ProductcarouselSevenProps = {
    title: t('skins'),
    count: relatedSkins.length,
    products: useCardProps(
      relatedSkins,
      relatedSkins.length > 0 ? relatedSkins[0].families : [],
      'skin',
    ),
  }

  const ProductcarouselEightProps = {
    title: t('poles'),
    count: relatedPoles.length,
    products: useCardProps(
      relatedPoles,
      relatedPoles.length > 0 ? relatedPoles[0].families : [],
      'pole',
    ),
  }

  const TeamcarouselProps = {
    title: common.teamSliderTitle,
    teams: [
      ...people.map((person) => {
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

  const BrandsProps = {
    title: common.brandHeading,
    subtitle: common.brandSubheading,
    brands: [
      ...brands.map((brand) => {
        return {
          name: brand.name,
          imageUrl: brand.image?.responsiveImage?.src,
          to: `/brands/${brand.slug}`,
        }
      }),
    ],
  }

  const ShelfCategoriesProps = {
    title: common.categoryHeading,
    subtitle: category?.scope?.name,
    ctaText: common.categoryCtaText,
    ctaBtnTo: common.categoryCtaUrl,
    ctaBtnLabel: t('findOutNow'),
    styles: [
      ...categoriesRelated.map((category) => {
        return {
          title: category.heading,
          subtitle: category.subheading,
          imageUrl: category.image?.responsiveImage?.src,
          to: l(`/categories/${category.slug}`),
          variant: 'dark',
        }
      }),
    ],
  }

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
        <ShelfProductCarousel {...ProductcarouselEightProps} />
      ) : null}
      {relatedSkins.length > 0 ? (
        <ShelfProductCarousel {...ProductcarouselSevenProps} />
      ) : null}

      <SectionTwoCols {...twoColProps} />
      <ShelfTeamCarousel {...TeamcarouselProps} />

      {brands.length > 0 ? <ShelfBrandCarousel {...BrandsProps} /> : null}
      <SectionFullSuperButtons {...sectionBtn2Props} />
      <ShelfNewsCarousel {...ShelfNewsTwoProps} />
      <ShelfStyleCarousel {...ShelfCategoriesProps} />
    </main>
  )
}

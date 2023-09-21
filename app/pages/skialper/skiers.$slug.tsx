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
  SkierRecord,
  BootRecord,
  SkiRecord,
  BindingRecord,
  PersonRecord,
  CommonRecord,
  BrandRecord,
  ArticleRecord,
} from '~/lib/generated'
import {
  ResponsiveImageFragmentQuery,
  ArticleCardFragmentQuery,
} from '~/lib/generated'
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
  const skierQuery = `#graphql
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
        teamImage{
          responsiveImage(
            imgixParams: { fm: jpg}
          ) {
            ...responsiveImage
          }
        }
      }

      skier: skier(filter: { slug: { eq: $slug } }, locale: $locale) {
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
        _allReferencingArticles{
          ...articleCard
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
              imgixParams: { fm: jpg }
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
        relatedArticles{
          ...articleCard
        }
        relatedProductsHeading
        relatedProductsSubheading
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
    query: skierQuery,
    variables: { slug, locale }, // The number of items passed to the query
  })

  return {
    skierData: datoQuerySub.datoQuerySubscription,
  }
}

export default function Category() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const transition = useNavigation()
  const { t } = useTranslation()
  const { l } = useLocalizeLink()

  const { skierData } = useLoaderData()
  const skier = skierData.initialData.skier as SkierRecord
  const people = skier._allReferencingPeople as PersonRecord[]
  const common = skierData.initialData.common as CommonRecord
  const brands = skierData.initialData.brands as BrandRecord[]
  const relatedBoots = skier._allReferencingBoots as BootRecord[]
  const relatedBindings = skier._allReferencingBindings as BindingRecord[]
  const relatedSkis = skier._allReferencingSkis as SkiRecord[]
  const categoriesRelated = skier.scope
    ?._allReferencingCategories as CategoryRecord[]

  const relatedArticles = skier.relatedArticles as ArticleRecord[]
  const lastArticles = skierData.initialData.lastArticles as ArticleRecord[]

  const twoColProps = {
    title: common.teamHeading,
    shortDesc: common.teamSubheading,
    imageUrl: common.teamImage?.responsiveImage?.src,
  }

  const heroSectionProps = {
    title: skier.heading,
    subtitle: skier.subheading,
    description: skier.description,
    imageUrl: skier.image?.responsiveImage?.src,
  }
  const sectionBtn1Props = {
    title: skier.relatedFamiliesHeading,
    imageUrl: {
      desktop: skier.relatedFamiliesImage?.responsiveImage?.src,
      mobile: skier.relatedFamiliesImageMobile?.responsiveImage?.src,
    },
    imagePositio: 'cover',
    buttons: skier.relatedFamilies.map((family) => ({
      label: family.name,
      to: l(`/products/${family.slug}?skier=${skier.name}`),
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
        to: l(`/products/${family.slug}?skier=${skier.name}`),
        leftImageSrc: family.imageSmall?.responsiveImage?.src,
      })),
    ],
  }
  const sectionTwoProps = {
    title: skier.relatedProductsHeading,
    subtitle: skier.relatedProductsSubheading,
    imageUrl: {
      desktop: skier.relatedProductsImage?.responsiveImage?.src,
      mobile: skier.relatedProductsImage?.responsiveImage?.src,
    },
    textPosition: 'bottom',
  }

  const ShelfNewsProps = {
    title: skier.relatedArticlesHeading,
    subtitle: skier.relatedArticlesSubheading,
    news: useArticleCardProps(relatedArticles),
  }

  const ShelfNewsTwoProps = {
    title: common.blogHeading,
    news: useArticleCardProps(lastArticles),
  }

  const ProductcarouselOneProps = {
    title: t('skis'),
    count: relatedSkis.length,
    products: useCardProps(relatedSkis, relatedSkis[0].families, 'ski'),
    showAllLabel: t('showAll'),
    showAllTo: l(`/products/skis?skier=${skier.name}`),
  }

  const ProductcarouselTwoProps = {
    title: t('boots'),
    count: relatedBoots.length,
    products: useCardProps(relatedBoots, relatedBoots[0].families, 'boot'),
    showAllLabel: t('showAll'),
    showAllTo: l(`/products/boots?skier=${skier.name}`),
  }

  const ProductcarouselThreeProps = {
    title: t('bindings'),
    count: relatedBindings.length,
    products: useCardProps(
      relatedBindings,
      relatedBindings[0].families,
      'binding',
    ),
    showAllLabel: t('showAll'),
    showAllTo: l(`/products/bindings?skier=${skier.name}`),
  }

  const TeamcarouselProps = {
    title: common.teamHeading,
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
          to: l(`/brands/${brand.slug}`),
        }
      }),
    ],
  }
  const ShelfCategoriesProps = {
    title: common.categoryHeading,
    subtitle: skier.scope?.name,
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
      <ShelfProductCarousel {...ProductcarouselOneProps} />
      <ShelfProductCarousel {...ProductcarouselTwoProps} />
      <ShelfProductCarousel {...ProductcarouselThreeProps} />
      <SectionTwoCols {...twoColProps} />
      <ShelfTeamCarousel {...TeamcarouselProps} />

      {brands.length > 0 ? <ShelfBrandCarousel {...BrandsProps} /> : null}
      <SectionFullSuperButtons {...sectionBtn2Props} />
      <ShelfNewsCarousel {...ShelfNewsTwoProps} />
      <ShelfStyleCarousel {...ShelfCategoriesProps} />
    </main>
  )
}

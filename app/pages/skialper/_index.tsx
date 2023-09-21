import type { MetaFunction, LoaderArgs } from '@remix-run/node'
import { useTranslation } from 'react-i18next'
import { useLoaderData } from '@remix-run/react'

import { useLocalizeLink } from '~/hooks/useLocalizeLink'
// import { useContext } from '~/hooks/useContext'
import FeaturedPostsCarousel from '~/components/Organisms/FeaturedPostsCarousel/FeaturedPostsCarousel'
import LaunchBannerCarousel from '~/components/Organisms/LaunchBannerCarousel/LaunchBannerCarousel'
import Masonry from '~/components/Organisms/Masonry/Masonry'
import ShelfStyleCarousel from '~/components/Organisms/ShelfStyleCarousel/ShelfStyleCarousel'
import SectionFullSuperButtons from '~/components/Organisms/SectionFullSuperButtons/SectionFullSuperButtons'
import SectionFullWidth from '~/components/Organisms/SectionFullWidth/SectionFullWidth'
import ShelfProductCarousel from '~/components/Organisms/ShelfProductCarousel/ShelfProductCarousel'
import ShelfBrandCarousel from '~/components/Organisms/ShelfBrandCarousel/ShelfBrandCarousel'
import ShelfNewsHighlight from '~/components/Organisms/ShelfNewsHighlight/ShelfNewsHighlight'
import SectionTwoCols from '~/components/Organisms/SectionTwoCols/SectionTwoCols'
import ShelfTeamCarousel from '~/components/Organisms/ShelfTeamCarousel/ShelfTeamCarousel'
import { datoQuerySubscription, loadFragments } from '~/lib/datocms'
import { useArticleCardProps } from '~/hooks/useArticleCardProps'
import { useCardProps } from '~/hooks/useCardProps'
import { useContext } from '~/hooks/useContext'
import { getUserId } from '~/session.server'
import type {
  CategoryRecord,
  ProductFamilyRecord,
  BrandRecord,
  PersonRecord,
  LauncherRecord,
} from '~/lib/generated'
import {
  ResponsiveImageFragmentQuery,
  ArticleCardFragmentQuery,
} from '~/lib/generated'
import remixI18n from '~/i18next.server'
import { getLocale } from '~/utils'

export const meta: MetaFunction = () => [{ title: "The Buyer's Guide" }]

export const loader = async ({ request, params }: LoaderArgs) => {
  const fragments = loadFragments([
    ResponsiveImageFragmentQuery,
    ArticleCardFragmentQuery,
  ])
  const t = await remixI18n.getFixedT(request, 'common')
  const locale = getLocale(request)
  const scopeSlug = t('skiTouringSlug')
  const url = new URL(request.url)

  const search = new URLSearchParams(url.search)

  const userId = (await getUserId(request)) || search.get('userId')
  const userQuery = `#graphql
      query ($idCommercelayer: String) {
        user(filter: {idCommercelayer: {eq: $idCommercelayer}}) {
          id
        }
      }
    `

  const datoQuerySub = await datoQuerySubscription({
    request,
    query: userQuery,
    variables: { idCommercelayer: userId },
  })

  const { id } = datoQuerySub.datoQuerySubscription.initialData.user || {}

  const homeQuery = `#graphql
    query(
        $slug: String, 
        $locale: SiteLocale, 
        $first: IntType, 
        $skip: IntType, 
        $poleOrderBy: [PoleModelOrderBy],
        $bootOrderBy: [BootModelOrderBy],
        $bindingOrderBy: [BindingModelOrderBy],
        $skinOrderBy: [SkinModelOrderBy],
        $skiOrderBy: [SkiModelOrderBy],
        $personOrderBy: [PersonModelOrderBy],
        $userId: ItemId
      ){
      hasSubmittedCommercial: allForms(filter: {user: {eq: $userId}, formType: {eq: "commercial"}}) {
        id
      }
      hasSubmittedPrompter: allForms(filter: {user: {eq: $userId}, formType: {eq: "prompter"}}) {
        id
      }
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
      poles: allPoles(locale: $locale, first: $first, skip: $skip, orderBy: $poleOrderBy){
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
        types { name }
        weightMeasured
        awards {
          label 
          shortName
          color{
            hex
          }
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
      skins: allSkins(locale: $locale, first: $first, skip: $skip, orderBy: $skinOrderBy){
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
              imgixParams: { fm: jpg, fit: crop, w: 1000, h: 1000, fpY:0.5}
            ) {
              ...responsiveImage
            }
          }
        }
      }
      bindings: allBindings(locale: $locale, first: $first, skip: $skip, orderBy: $bindingOrderBy){
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
          types {
            name
          }
          weightDeclared
          media {
            webImage {
              responsiveImage(
                imgixParams: { fm: jpg, fit: crop, w: 1000, h: 1000, fpY:0 }
              ) {
                ...responsiveImage
              }
            }
          }
      }
      boots: allBoots(locale: $locale, first: $first, skip: $skip, orderBy: $bootOrderBy){
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
      skis: allSkis(locale: $locale, first: $first, skip: $skip, orderBy: $skiOrderBy){
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
      home : home(locale: $locale){
        featuredArticles{
          ...articleCard
        }
        articleCarouselTitle
        articleCarouselSubtitle
        articleCarouselArticles {
          ...articleCard
        }
        gallery{
          responsiveImage(imgixParams: { fm:jpg }) {
            ...responsiveImage
          }
        }
        launchVideo{
          url
        }
        launcherCarousel{
          title
          description
          backgroundColor
          image{
            responsiveImage(
              imgixParams: { fm: png}
            ) {
              ...responsiveImage
            }
          }
          primaryButtonLabel
          secondaryButtonLabel
          primaryButtonUrl
          secondaryButtonUrl
          animation
          showGuests
          showUsers
          showSubscribers
          showFormNotSubmitted
        }
        launchText
        launchVideoCaption
        relatedFamiliesHeading
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
        relatedProductsImage{
          responsiveImage(
            imgixParams: { fm: jpg}
          ) {
            ...responsiveImage
          }
        }
        relatedProductsHeading
        relatedProductsSubheading
      }
      scope: scope(filter: { slug: { eq: $slug } }, locale:$locale) {
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
      common: common(locale:$locale) {
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
      people: allPeople(first: $first, locale: $locale, orderBy: $personOrderBy){
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
      _allSkisMeta {
        count
      }
      _allBootsMeta {
        count
      }
      _allBindingsMeta {
        count
      }
      _allSkinsMeta {
        count
      }
      _allPolesMeta {
        count
      }

    }
  ${fragments}
  `

  //create a "skip" const random between 0 and 3
  const skip = Math.floor(Math.random() * 3)
  const sorting = [
    '_createdAt_ASC',
    '_createdAt_DESC',
    '_updatedAt_ASC',
    '_updatedAt_DESC',
    '_firstPublishedAt_ASC',
    '_firstPublishedAt_DESC',
    '_publishedAt_ASC',
    '_publishedAt_DESC',
  ]
  const sortingIndex = Math.floor(Math.random() * sorting.length)
  const sortingValue = sorting[sortingIndex]
  const datoQuery = await datoQuerySubscription({
    request,
    query: homeQuery,
    variables: {
      slug: scopeSlug,
      locale: locale,
      first: 8,
      skip: skip,
      poleOrderBy: sortingValue,
      bootOrderBy: sortingValue,
      bindingOrderBy: sortingValue,
      skinOrderBy: sortingValue,
      skiOrderBy: sortingValue,
      personOrderBy: sortingValue,
      userId: id,
    },
  })

  return {
    homeData: datoQuery.datoQuerySubscription,
  }
}

export default function Index() {
  const { t } = useTranslation()
  const { l } = useLocalizeLink()
  const { isUser, validPass } = useContext()

  const { homeData } = useLoaderData()
  const home = homeData.initialData.home
  const common = homeData.initialData.common
  const skis = homeData.initialData.skis
  const boots = homeData.initialData.boots
  const bindings = homeData.initialData.bindings
  const skins = homeData.initialData.skins
  const poles = homeData.initialData.poles
  const brands = homeData.initialData.brands
  const people = homeData.initialData.people
  const hasSubmittedCommercial = homeData.initialData.hasSubmittedCommercial
  const hasSubmittedPrompter = homeData.initialData.hasSubmittedPrompter
  const allSkisCount = homeData.initialData._allSkisMeta.count
  const allBootsCount = homeData.initialData._allBootsMeta.count
  const allBindingsCount = homeData.initialData._allBindingsMeta.count
  const allSkinsCount = homeData.initialData._allSkinsMeta.count
  const allPolesCount = homeData.initialData._allPolesMeta.count

  const relatedCategories = homeData.initialData.scope
    ?._allReferencingCategories as CategoryRecord[]

  const featuredPostsProps = {
    title: t('featuredArticles'),
    posts: [...useArticleCardProps(home.featuredArticles)],
  }

  const launcherBanners = [
    ...home.launcherCarousel
      .filter(
        (banner: LauncherRecord) =>
          !isUser === banner.showGuests ||
          isUser === banner.showUsers ||
          validPass === banner.showSubscribers,
      )
      .filter((banner: LauncherRecord) => {
        if (banner.showFormNotSubmitted != '') {
          if (banner.showFormNotSubmitted === 'commercial') {
            return hasSubmittedCommercial.length === 0
          } else if (banner.showFormNotSubmitted === 'prompter') {
            return hasSubmittedPrompter.length === 0
          }
        }
        return true
      })
      .map((banner: LauncherRecord) => ({
        bgColor: banner.backgroundColor,
        title: banner.title,
        description: banner.description,
        imageUrl: banner.image?.responsiveImage?.src,
        primaryButton: {
          label: banner.primaryButtonLabel,
          to: banner.primaryButtonUrl,
        },
        secondaryButton: {
          label: banner.secondaryButtonLabel,
          to: banner.secondaryButtonUrl,
        },
        animation: banner.animation,
      })),
  ]

  const sectionMasonry = {
    images: home.gallery.map((image: any) => {
      return image.responsiveImage?.src
    }),
    textBox: home.launchText,
    video: {
      videoUrl: home.launchVideo?.url,
      videoCaption: home.launchVideoCaption,
    },
  }

  console.log(relatedCategories)

  const shelfStyles = {
    title: common.categoryHeading,
    subtitle: t('Scialpinismo'),
    ctaText: common.categoryCtaText,
    ctaBtnTo: common.categoryCtaUrl,
    ctaBtnLabel: t('findOutNow'),
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

  const sectionBtnProps1 = {
    title: home.relatedFamiliesHeading,
    imageUrl: {
      desktop: home.relatedFamiliesImage?.responsiveImage?.src,
      mobile: home.relatedFamiliesImageMobile?.responsiveImage?.src,
    },
    imagePosition: 'right',
    buttons: home.relatedFamilies.map((family: ProductFamilyRecord) => ({
      label: family.name,
      to: l(`/products/${family.slug}`),
      leftImageSrc: family.imageSmall?.responsiveImage?.src,
    })),
  }

  const sectionSelection = {
    title: home.relatedProductsHeading,
    subtitle: home.relatedProductsSubheading,
  }
  const ProductcarouselProps1 = {
    title: t('skis'),
    showAllTo: l(`/products/${t('skisSlug')}`),
    showAllLabel: t('seeAll'),
    products: useCardProps(skis),
    count: allSkisCount,
  }

  const ProductcarouselProps2 = {
    title: t('boots'),
    showAllTo: l(`/products/${t('bootsSlug')}`),
    showAllLabel: t('seeAll'),
    products: useCardProps(boots, boots[0].families, 'boot'),
    count: allBootsCount,
  }

  const ProductcarouselProps3 = {
    title: t('bindings'),
    showAllTo: l(`/products/${t('bindingsSlug')}`),
    showAllLabel: t('seeAll'),
    products: useCardProps(bindings, bindings[0].families, 'binding'),
    count: allBindingsCount,
  }

  const ProductcarouselProps4 = {
    title: t('poles'),
    showAllTo: l(`/products/${t('polesSlug')}`),
    showAllLabel: t('seeAll'),
    products: useCardProps(poles, poles[0].families, 'pole'),
    count: allPolesCount,
  }

  const ProductcarouselProps5 = {
    title: t('skins'),
    showAllTo: l(`/products/${t('skinsSlug')}`),
    showAllLabel: t('seeAll'),
    products: useCardProps(skins, skins[0].families, 'skin'),
    count: allSkinsCount,
  }

  const sectionBtnProps2 = {
    title: common.safetyHeading,
    imageUrl: {
      desktop: common.safetyImage?.responsiveImage?.src,
      mobile: common.safetyImageMobile?.responsiveImage?.src,
    },
    imagePosition: 'left',
    buttons: [
      ...common.safetyFamiliesRelated.map((family: ProductFamilyRecord) => ({
        label: family.name,
        to: l(`/products/${family.slug}`),
        leftImageSrc: family.imageSmall?.responsiveImage?.src,
      })),
    ],
  }

  const shelfBrandsProps = {
    title: common.brandHeading,
    subtitle: common.brandSubheading,
    brands: [
      ...brands.map((brand: BrandRecord) => {
        return {
          name: brand.name,
          imageUrl: brand.image?.responsiveImage?.src,
          to: l(`/brands/${brand.slug}`),
        }
      }),
    ],
  }

  const ShelfNewsProps = {
    variant: 'light',
    title: home.articleCarouselTitle,
    subtitle: home.articleCarouselSubtitle,
    news: [...useArticleCardProps(home.articleCarouselArticles)],
  }

  const TeamIntroProps = {
    title: common.teamHeading,
    shortDesc: common.teamSubheading,
    imageUrl: common.teamImage?.responsiveImage?.src,
    type: 'star',
  }

  const TeamcarouselProps = {
    title: t('team'),
    showAllLabel: t('seeAll'),
    showAllTo: l(`/${t('teamSlug')}`),
    teams: [
      ...people.map((person: PersonRecord) => {
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

  return (
    <div>
      <FeaturedPostsCarousel {...featuredPostsProps} />
      <Masonry {...sectionMasonry} />
      {launcherBanners.length > 0 ? (
        <LaunchBannerCarousel launcherBanners={launcherBanners} />
      ) : null}
      <ShelfStyleCarousel {...shelfStyles} />
      <SectionFullSuperButtons {...sectionBtnProps1} />
      <SectionFullWidth {...sectionSelection} />
      <ShelfProductCarousel {...ProductcarouselProps1} />
      <ShelfProductCarousel {...ProductcarouselProps2} />
      <ShelfProductCarousel {...ProductcarouselProps3} />
      <ShelfProductCarousel {...ProductcarouselProps4} />
      <ShelfProductCarousel {...ProductcarouselProps5} />

      <SectionFullSuperButtons {...sectionBtnProps2} />

      {brands.length > 0 ? <ShelfBrandCarousel {...shelfBrandsProps} /> : null}

      <ShelfNewsHighlight {...ShelfNewsProps} />

      <SectionTwoCols {...TeamIntroProps} />
      <ShelfTeamCarousel {...TeamcarouselProps} />
    </div>
  )
}

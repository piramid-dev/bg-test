import type { V2_MetaFunction, LoaderArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import type { ResponsiveImageType } from 'react-datocms'
import { useQuerySubscription } from 'react-datocms'
import { t } from 'i18next'

import { useLocalizeLink } from '~/hooks/useLocalizeLink'
import { datoQuerySubscription, loadFragments } from '~/lib/datocms'
import PhotoGalleryWrapper from '~/components/Atoms/PhotoGalleryWrapper/PhotoGalleryWrapper'
import TeamHeader from '~/components/Sections/TeamHeader/TeamHeader'
import SectionWrapper from '~/components/Atoms/SectionWrapper/SectionWrapper'
import CardText from '~/components/Organisms/CardText/CardText'
import VideoLightbox from '~/components/Organisms/VideoLightbox/VideoLightbox'
import ShelfNewsCarousel from '~/components/Organisms/ShelfNewsCarousel/ShelfNewsCarousel'
import ShelfProductCarousel from '~/components/Organisms/ShelfProductCarousel/ShelfProductCarousel'
import CardInfo from '~/components/Organisms/CardInfo/CardInfo'
import PhotoGrid from '~/components/Atoms/PhotoGrid/PhotoGrid'
import type { ArticleRecord, CommonRecord, PersonRecord } from '~/lib/generated'
import {
  ResponsiveImageFragmentQuery,
  ArticleCardFragmentQuery,
  TeamProductsSetupFragmentQuery,
} from '~/lib/generated'
import { useCardProps } from '~/hooks/useCardProps'
import { useArticleCardProps } from '~/hooks/useArticleCardProps'
import { getLocale } from '~/utils'

export const meta: V2_MetaFunction = () => [
  { title: "Products - The Buyer's Guide" },
]

export const loader = ({ request, params }: LoaderArgs) => {
  const slug = params.slug
  const fragments = loadFragments([
    ResponsiveImageFragmentQuery,
    ArticleCardFragmentQuery,
    TeamProductsSetupFragmentQuery,
  ])
  const locale = getLocale(request)

  // const first = 100
  const initialQuery = `#graphql
      query($slug: String, $locale: SiteLocale){
        person: person(filter: { slug: { eq: $slug } }, locale: $locale) {
          id
          name
          slug
          jobTitle
          image {
            responsiveImage(imgixParams: { fm: jpg, fit: crop, w: 1500, h: 1500, fpY:0.5}) {
              ...responsiveImage
            }
          }
          description
          urls{
            url
            label
          }
          gallery{
            responsiveImage(imgixParams: { fit: crop}) {
              ...responsiveImage
            }
          }
          video{
            url
            title
            cover{
              responsiveImage(imgixParams: { fit: crop}) {
                ...responsiveImage
              }
            }
          }
          birthDate
          information
          traits{
            label
            value
          }
          _allReferencingArticles{
            ...articleCard
          }
          products{
            ...teamProductsSetup
          }
          relatedProductsHeading
          relatedProductsSubheading
          relatedFamilies{
            id
            name
          }
          roles{
            id
            name
          }
          categories{
            id
            name
            slug
          }
          _allReferencingBoots{
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

        }
        common: common(locale: $locale){
          workedOnHeading
          workedOnSubheading
          
        }
      }
      ${fragments}
    `

  return datoQuerySubscription({
    request,
    query: initialQuery,
    variables: { slug, locale }, // The number of items passed to the query
  })
}

export default function Products() {
  const { datoQuerySubscription } = useLoaderData()
  const { data } = useQuerySubscription(datoQuerySubscription)
  const person = data.person as PersonRecord
  const common = data.common as CommonRecord
  const { l } = useLocalizeLink()
  const articles = person._allReferencingArticles as ArticleRecord[]
  const TeamHeaderSpecs = {
    categoryChips: [
      ...person.categories.map((category) => ({
        label: category.name,
        to: l(`/categories/${category.slug}`),
      })),
    ],
    roleChips: [
      ...person.roles.map((role) => ({
        label: role.name,
        to: `/team?role=${role.name}`,
      })),
    ],
    title: person.name,
    role: person.jobTitle,
    shortDesc: person.description,
    coverImage: person.image?.responsiveImage as ResponsiveImageType,
    socialLinks: [
      ...person.urls.map((url) => ({
        label: url.label,
        to: url.url,
      })),
    ],
  }
  const age =
    new Date().getFullYear() - new Date(person.birthDate).getFullYear()

  const aboutTable = {
    title: 'Caratteristiche tester',
    specs: [
      ...person.traits.map((trait) => ({
        data: trait.label,
        value: trait.value as any,
      })),
      { data: 'Anni', value: age },
    ],
  }

  const videoProps = {
    videoUrl: person.video.length > 0 ? person.video[0].url : null,
    videoCover:
      person.video.length > 0
        ? person.video[0].cover?.responsiveImage?.src
        : null,
    title: person.video.length > 0 ? person.video[0].title : null,
  }

  const aboutDesc = {
    title: 'Informazioni',
    text: person.information,
    locked: false,
  }

  const galleryImages = [
    ...person.gallery.map((image) => {
      return image.responsiveImage?.src
    }),
  ]

  const ShelfNewsProps = {
    title: t('authorOf'),
    news: useArticleCardProps(articles),
  }

  const setupProducts = person.products.map((product) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useCardProps([product])[0]
  })

  const ProductcarouselSetup = {
    title: t('theirSetup'),
    products: setupProducts,
  }

  const ProductcarouselTestedOne = {
    title: t('skis'),
    products: useCardProps(person._allReferencingSkis),
  }

  const ProductcarouselTestedTwo = {
    title: t('splitboards'),
    products: useCardProps(person._allReferencingSplitboards),
  }

  const ProductcarouselTestedThree = {
    title: t('boots'),
    products: useCardProps(person._allReferencingBoots),
  }

  return (
    <main className="relative min-h-screen bg-white">
      <TeamHeader {...TeamHeaderSpecs} />
      <SectionWrapper
        title="A proposito"
        containerClass="py-10 lg:py-20"
        background="white"
      >
        <div className="lg:columns-2 [&>*]:mb-3 [&>*:last-child]:mb-0">
          <div>
            <CardInfo
              title={aboutTable.title}
              infos={aboutTable.specs}
              showLock={false}
            />
          </div>
          <div>
            <CardText {...aboutDesc} showLock={false} />
          </div>
        </div>
      </SectionWrapper>
      {ProductcarouselSetup.products.length > 0 ? (
        <ShelfProductCarousel {...ProductcarouselSetup} background="white" />
      ) : null}

      <div className="container pb-12 pt-8 ">
        <PhotoGalleryWrapper>
          <PhotoGrid images={galleryImages} />
        </PhotoGalleryWrapper>
      </div>

      {person.video.length > 0 ? <VideoLightbox {...videoProps} /> : null}

      <div className="bg-dove-500">
        <div className="container mx-auto py-10 lg:py-20">
          <h3 className="h2 mb-5 font-sans">{common.workedOnHeading}</h3>
          <p className="display-m font-sans lg:w-1/2">
            {common.workedOnSubheading}
          </p>
        </div>
        {person._allReferencingSkis.length > 0 ? (
          <ShelfProductCarousel
            {...ProductcarouselTestedOne}
            background="dove-500"
          />
        ) : null}
        {person._allReferencingSplitboards.length > 0 ? (
          <ShelfProductCarousel
            {...ProductcarouselTestedTwo}
            background="dove-500"
          />
        ) : null}
        {person._allReferencingBoots.length > 0 ? (
          <ShelfProductCarousel
            {...ProductcarouselTestedThree}
            background="dove-500"
          />
        ) : null}
      </div>
      {ShelfNewsProps.news.length > 0 ? (
        <ShelfNewsCarousel {...ShelfNewsProps} variant="light" />
      ) : null}
    </main>
  )
}

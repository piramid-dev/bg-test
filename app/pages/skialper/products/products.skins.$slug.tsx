import type { MetaFunction, LoaderArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { useQuerySubscription } from 'react-datocms'
import { useTranslation } from 'react-i18next'

import { useLocalizeLink } from '~/hooks/useLocalizeLink'
import PhotoGalleryWrapper from '~/components/Atoms/PhotoGalleryWrapper/PhotoGalleryWrapper'
import ShelfNewsCarousel from '~/components/Organisms/ShelfNewsCarousel/ShelfNewsCarousel'
import ShelfProductCarousel from '~/components/Organisms/ShelfProductCarousel/ShelfProductCarousel'
import ProductHeader from '~/components/Sections/ProductHeader/ProductHeader'
import ProductInWords from '~/components/Sections/ProductInWords/ProductInWords'
import ScrollSpyNav from '~/components/Sections/ScrollSpyNav/ScrollSpyNav'
import { datoQuerySubscription, loadFragments } from '~/lib/datocms'
import {
  ResponsiveImageFragmentQuery,
  ArticleCardFragmentQuery,
} from '~/lib/generated'
import ProductTechSpecs from '~/components/Sections/ProductTechSpecs/ProductTechSpecs'
import type { ProductTechSpecsProps } from '~/components/Sections/ProductTechSpecs/ProductTechSpecs'
import type {
  SkinRecord,
  SkiRecord,
  ArticleRecord,
  ScopeRecord,
} from '~/lib/generated'
import BreadcrumbsProducts from '~/components/Molecules/Breadcrumbs/BreadcrumbsProducts'
import i18next from '~/i18next.server'
import { useArticleCardProps } from '~/hooks/useArticleCardProps'
import { useCardProps } from '~/hooks/useCardProps'
import { getLocale } from '~/utils'

export const meta: MetaFunction = () => [
  { title: "Products - The Buyer's Guide" },
]

export const loader = async ({ request, params }: LoaderArgs) => {
  const slug = params.slug
  const origin = new URL(request.url).origin
  const locale = getLocale(request)
  const t = await i18next.getFixedT(locale)
  const familySlug = t('skinsSlug')

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //we use print to access the query as a string
  const fragments = loadFragments([
    ResponsiveImageFragmentQuery,
    ArticleCardFragmentQuery,
  ])
  //a graph query to get a single ski

  const initialQuery = `#graphql
    query ($slug: String, $locale: SiteLocale, $familySlug: String) {
      skin: skin(locale: $locale, filter: { slug: { eq: $slug } }) {
        id
        name
        slug  
        testedDescription
        testedIn
        brand {
          name
          slug
        }
        awards {
          label 
          logo {
            responsiveImage(
              imgixParams: { fm: png}
            ) {
              ...responsiveImage
            }
          }
        }
        materialsDescription
        materials{
          name
        }
        scopes{
          name
          slug
        }
        pricesDescription
        weightDryMeasured
        weightWetMeasured
        speedSliding
        time
        distance
        categories {
          id
          name
          slug
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
              name
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
        }
        metadata {
          description
          title
        }
        media {
          webImage {
            responsiveImage(
              imgixParams: { fm: jpg}
            ) {
              ...responsiveImage
            }
          }
          webImageTest {
            responsiveImage(
              imgixParams: { fm: jpg}
            ) {
              ...responsiveImage
            }
          }
          webGallery{
            responsiveImage(
              imgixParams: { fm: jpg}
            ) {
              ...responsiveImage
            }
          }
        }        
        priceEur
        priceUsd
      }
      family: allProductFamilies(locale: $locale, filter: { slug: { eq: $familySlug } }){
        name
        slug
      }
      lastArticles: allArticles(first: 10, orderBy: _firstPublishedAt_DESC) {
        ...articleCard
      }
      common: common{
        blogHeading
      }
    }
    ${fragments}
  `

  //fetch average.json from /public/data/average.json
  const average = await fetch(`${origin}/data/average.skis.json`).then((res) =>
    res.json(),
  )

  const datoQuerySubSkin = await datoQuerySubscription({
    request,
    query: initialQuery,
    variables: { locale, slug, familySlug }, // The number of items passed to the query
  })

  return {
    average,
    skinData: datoQuerySubSkin.datoQuerySubscription,
  }
}

export default function Products() {
  const { t } = useTranslation()
  const { l } = useLocalizeLink()

  const { skinData } = useLoaderData()
  const { data } = useQuerySubscription(skinData)
  const skin = data.skin as SkinRecord
  const relatedSkis = skin.categories[0]._allReferencingSkis as SkiRecord[]
  const relatedSkins = skin.categories[0]._allReferencingSkins as SkinRecord[]
  const isTested = true
  const family = data.family as [{ name: string; slug: string }]
  const lastArticles = data.lastArticles as ArticleRecord[]
  const common = data.common as { blogHeading: string }
  const scopes = skin.scopes as ScopeRecord[]
  const ProductInWordProps = {
    title: 'Le Valutazioni della Buyers',
    locked: false,
    intro: skin.testedDescription,
    images: skin.media[0].webGallery.map((image) => {
      return image.responsiveImage?.src
    }),
  }
  const ProductHeaderProps = {
    chips: skin.categories.map((category) => {
      return { label: category.name, to: l(`/categories/${category.slug}`) }
    }),
    brand: [
      {
        label: skin.brand?.name,
        to: skin.brand?.slug,
      },
    ],
    title: skin.name,
    shortDesc: skin.metadata?.description,
    productId: skin.id,
    userId: '123456789',
    ProductCoverData: {
      coverAltTxt: skin.media[0].webImage?.responsiveImage?.alt,
      coverImageSrc: skin.media[0].webImage?.responsiveImage?.src,
      coverImageFullSrc: skin.media[0].webImage?.responsiveImage?.src,
      testedIn: `TESTED ${skin.testedIn}`,
      awards: [
        ...skin.awards.map((award) => {
          return {
            name: award.label,
            img: award.logo?.responsiveImage?.src,
          }
        }),
      ],
    },
  }
  const ProductTechSpecsProps = {
    locked: false,
    dataCompare: {
      measurements: [
        {
          data: 'Peso a secco',
          measured: skin.weightDryMeasured,
          unit: 'gr',
        },
        {
          data: 'Peso bagnata',
          measured: skin.weightWetMeasured,
          unit: 'gr',
        },
        {
          data: 'Velocità di scorrimento',
          measured: skin.speedSliding,
          unit: 'm/s',
        },
        {
          data: 'Tempo di scorrimento',
          measured: skin.time,
          unit: 's',
        },
        {
          data: 'Distanza di scorrimento',
          measured: skin.distance,
          unit: 'm',
        },
      ],
    },
    firstSpecs: [
      {
        data: 'MATERIALI',
        value:
          skin.materialsDescription === ''
            ? (() => {
                console.log(skin)
                if (skin.materials) {
                  return skin.materials.map((m) => `100% ${m.name}`).join(', ')
                }
                return ''
              })()
            : skin.materialsDescription,
      },
    ],
    secondSpecs: [
      {
        data: 'PREZZO',
        value: skin.pricesDescription,
      },
    ],
  } as ProductTechSpecsProps

  //remove firstSpecs node from ProductTechSpecsProps if all the items have "value" empty
  if (
    ProductTechSpecsProps.firstSpecs &&
    ProductTechSpecsProps.firstSpecs.filter((item) => item.value !== '')
      .length === 0
  ) {
    delete ProductTechSpecsProps.firstSpecs
  }

  //remove secondSpecs node from ProductTechSpecsProps if all the items have "value" empty
  if (
    ProductTechSpecsProps.secondSpecs &&
    ProductTechSpecsProps.secondSpecs.filter((item) => item.value !== '')
      .length === 0
  ) {
    delete ProductTechSpecsProps.secondSpecs
  }

  const ShelfNewsProps = {
    title: common.blogHeading,
    news: useArticleCardProps(lastArticles),
  }

  const similarProducts = [
    ...relatedSkins.filter((_skin) => _skin.id !== skin.id),
  ]

  const ProductcarouselOneProps = {
    title: t('useItWith'),
    products: [
      ...useCardProps(
        relatedSkis,
        relatedSkis.length > 0 ? relatedSkis[0].families : [],
        'splitboard',
      ),
    ],
  }

  const ProductcarouselTwoProps = {
    title: t('similarProducts'),
    products: [
      ...useCardProps(
        similarProducts,
        similarProducts.length > 0 ? similarProducts[0].families : [],
        'splitboard',
      ),
    ],
  }

  return (
    <main className="relative min-h-screen bg-white">
      <BreadcrumbsProducts
        familyName={family[0].name}
        familySlug={family[0].slug}
        scopeName={scopes[0].name}
        scopeSlug={scopes[0].slug}
      />
      <PhotoGalleryWrapper>
        <ProductHeader {...ProductHeaderProps} />

        {isTested ? (
          <ScrollSpyNav labels={[t('inWords'), t('techSpec')]}>
            <>
              <ProductInWords {...ProductInWordProps} />
              <ProductTechSpecs {...ProductTechSpecsProps} />
            </>
          </ScrollSpyNav>
        ) : (
          <ProductInWords {...ProductInWordProps} />
        )}
      </PhotoGalleryWrapper>
      <ShelfNewsCarousel {...ShelfNewsProps} variant="dark" />
      <ShelfProductCarousel {...ProductcarouselOneProps} />
      <ShelfProductCarousel {...ProductcarouselTwoProps} />
    </main>
  )
}

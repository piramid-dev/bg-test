import type { V2_MetaFunction, LoaderArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { useQuerySubscription } from 'react-datocms'
import { useTranslation } from 'react-i18next'

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
import type { ShovelRecord, ArticleRecord, ScopeRecord } from '~/lib/generated'
import ProductTechSpecs from '~/components/Sections/ProductTechSpecs/ProductTechSpecs'
import BreadcrumbsProducts from '~/components/Molecules/Breadcrumbs/BreadcrumbsProducts'
import i18next from '~/i18next.server'
import { useArticleCardProps } from '~/hooks/useArticleCardProps'
import { useCardProps } from '~/hooks/useCardProps'
import { getLocale } from '~/utils'

export const meta: V2_MetaFunction = () => [
  { title: "Products - The Buyer's Guide" },
]

export const loader = async ({ request, params }: LoaderArgs) => {
  const slug = params.slug
  const origin = new URL(request.url).origin
  const locale = getLocale(request)
  const t = await i18next.getFixedT(locale)
  const familySlug = t('shovelsSlug')

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //we use print to access the query as a string
  const fragments = loadFragments([
    ResponsiveImageFragmentQuery,
    ArticleCardFragmentQuery,
  ])
  //a graph query to get a single ski

  const initialQuery = `#graphql
    query ($slug: String, $locale: SiteLocale, $familySlug: String) {
      shovel: shovel(locale: $locale, filter: { slug: { eq: $slug } }) {
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
        metadata {
          description
          title
        }
        material{
          name
        }
        handleDescription
        weightDeclared
        handleSize
        bucketSize
        openLength
        scopes{
          name
          slug
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
      products: allShovels {
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

  const datoQuerySubShovel = await datoQuerySubscription({
    request,
    query: initialQuery,
    variables: { locale, slug, familySlug }, // The number of items passed to the query
  })

  return {
    average,
    shovelData: datoQuerySubShovel.datoQuerySubscription,
  }
}

export default function Products() {
  const { shovelData } = useLoaderData()
  const { t } = useTranslation()

  const { data } = useQuerySubscription(shovelData)
  const shovel = data.shovel as ShovelRecord
  const products = data.products as ShovelRecord[]
  const family = data.family as [{ name: string; slug: string }]
  const lastArticles = data.lastArticles as ArticleRecord[]
  const common = data.common as { blogHeading: string }
  const scopes = shovel.scopes as ScopeRecord
  const isTested = true

  const ProductInWordProps = {
    title: 'Le Valutazioni della Buyers',
    locked: false,
    intro: shovel.testedDescription,
    images: shovel.media[0].webGallery.map((image) => {
      return image.responsiveImage?.src
    }),
  }
  const ProductHeaderProps = {
    chips: [],
    brand: [
      {
        label: shovel.brand?.name,
        to: shovel.brand?.slug,
      },
    ],
    title: shovel.name,
    shortDesc: shovel.metadata?.description,
    productId: shovel.id,
    userId: '123456789',
    ProductCoverData: {
      coverAltTxt: shovel.media[0].webImage?.responsiveImage?.alt,
      coverImageSrc: shovel.media[0].webImage?.responsiveImage?.src,
      coverImageFullSrc: shovel.media[0].webImage?.responsiveImage?.src,
      testedIn: `TESTED ${shovel.testedIn}`,
      awards: [
        ...shovel.awards.map((award) => {
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
          data: 'Lunghezza aperta',
          declared: shovel.openLength,
          unit: 'cm',
        },
        {
          data: 'Ingombro benna',
          declared: shovel.bucketSize,
          unit: 'cm',
        },
        {
          data: 'Ingombro manico',
          declared: shovel.handleSize,
          unit: 'cm',
        },
        {
          data: 'Peso',
          declared: shovel.weightDeclared,
          unit: 'g',
        },
      ],
    },
    firstSpecs: [
      {
        data: 'Materiale',
        value: shovel.material?.name,
      },

      {
        data: 'Descrizione manico',
        value: shovel.handleDescription,
      },
    ],
    secondSpecs: [
      {
        data: 'PREZZO',
        value:
          shovel.priceEur && shovel.priceUsd
            ? `${shovel.priceEur} € / ${shovel.priceUsd} $`
            : shovel.priceEur
            ? `${shovel.priceEur} €`
            : shovel.priceUsd
            ? `${shovel.priceUsd} $`
            : '',
      },
    ],
  }

  const ShelfNewsProps = {
    title: common.blogHeading,
    news: useArticleCardProps(lastArticles),
  }

  const similarProducts = [
    ...products.filter((product) => product.id !== shovel.id),
  ]

  const ProductcarouselOneProps = {
    title: t('similarProducts'),
    products: [
      ...useCardProps(
        similarProducts,
        similarProducts.length > 0 ? similarProducts[0].families : [],
        'shovel',
      ),
    ],
  }
  return (
    <main className="relative min-h-screen bg-white">
      <BreadcrumbsProducts
        familyName={family[0].name}
        familySlug={family[0].slug}
        scopeName={scopes.name}
        scopeSlug={scopes.slug}
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
    </main>
  )
}

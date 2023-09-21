import type { MetaFunction, LoaderArgs } from '@remix-run/node'
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
import type { PoleRecord, ScopeRecord } from '~/lib/generated'
import ProductTechSpecs from '~/components/Sections/ProductTechSpecs/ProductTechSpecs'
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
  const familySlug = t('polesSlug')

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //we use print to access the query as a string
  const fragments = loadFragments([
    ResponsiveImageFragmentQuery,
    ArticleCardFragmentQuery,
  ])
  //a graph query to get a single ski

  const initialQuery = `#graphql
    query ($slug: String, $locale: SiteLocale, $familySlug: String) {
      pole: pole(locale: $locale, filter: { slug: { eq: $slug } }) {
        id
        name
        slug  
        testedDescription
        testedIn
        brand {
          name
          slug
        }
        scopes{
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
        handleMaterials{
          name
        }
        shaftMaterials{
          name
        }
        types{
          name
        }
        weightMeasured
        basketDiameter
        sizeWeighed
        basketShape
        tipDescription
        sizesDescription
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
      products: allPoles {
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

  const datoQuerySubPole = await datoQuerySubscription({
    request,
    query: initialQuery,
    variables: { locale, slug, familySlug }, // The number of items passed to the query
  })

  return {
    average,
    poleData: datoQuerySubPole.datoQuerySubscription,
  }
}

export default function Products() {
  const { poleData } = useLoaderData()
  const { t } = useTranslation()

  const { data } = useQuerySubscription(poleData)
  const pole = data.pole as PoleRecord
  const products = data.products as PoleRecord[]
  const family = data.family as [{ name: string; slug: string }]
  const lastArticles = data.lastArticles as ArticleRecord[]
  const common = data.common as { blogHeading: string }
  const scopes = pole.scopes as ScopeRecord[]
  const isTested = true

  const ProductInWordProps = {
    title: 'Le Valutazioni della Buyers',
    locked: false,
    intro: pole.testedDescription,
    images: pole.media[0].webGallery.map((image) => {
      return image.responsiveImage?.src
    }),
  }
  const ProductHeaderProps = {
    chips: [],
    brand: [
      {
        label: pole.brand?.name,
        to: pole.brand?.slug,
      },
    ],
    title: pole.name,
    shortDesc: pole.metadata?.description,
    productId: pole.id,
    userId: '123456789',
    ProductCoverData: {
      coverAltTxt: pole.media[0].webImage?.responsiveImage?.alt,
      coverImageSrc: pole.media[0].webImage?.responsiveImage?.src,
      coverImageFullSrc: pole.media[0].webImage?.responsiveImage?.src,
      testedIn: `TESTED ${pole.testedIn}`,
      awards: [
        ...pole.awards.map((award) => {
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
    mainLabel: 'la misura',
    mainData: pole.sizeWeighed,
    dataCompare: {
      measurements: [
        {
          data: 'Diametro cestello',
          declared: pole.basketDiameter,
          unit: 'cm',
        },
        {
          data: 'Peso',
          measured: pole.weightMeasured,
          unit: 'g',
        },
      ],
    },
    firstSpecs: [
      {
        data: 'Materiale manico',
        value: pole.handleMaterials.map((material) => material.name).join(', '),
      },
      {
        data: 'Materiale canna',
        value: pole.shaftMaterials.map((material) => material.name).join(', '),
      },
      {
        data: 'Tipologia',
        value: pole.types.map((type) => type.name).join(', '),
      },
      {
        data: 'Forma cestello',
        value: pole.basketShape,
      },
      {
        data: 'Descrizione punta',
        value: pole.tipDescription,
      },
    ],
    secondSpecs: [
      {
        data: 'Misure disponibili',
        value: pole.sizesDescription,
      },
      {
        data: 'PREZZO',
        value:
          pole.priceEur && pole.priceUsd
            ? `${pole.priceEur} € / ${pole.priceUsd} $`
            : pole.priceEur
            ? `${pole.priceEur} €`
            : pole.priceUsd
            ? `${pole.priceUsd} $`
            : '',
      },
    ],
  }

  const ShelfNewsProps = {
    title: common.blogHeading,
    news: useArticleCardProps(lastArticles),
  }

  const similarProducts = [
    ...products.filter((product) => product.id !== pole.id),
  ]

  const ProductcarouselOneProps = {
    title: t('similarProducts'),
    products: [
      ...useCardProps(
        similarProducts,
        similarProducts.length > 0 ? similarProducts[0].families : [],
        'pole',
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
    </main>
  )
}

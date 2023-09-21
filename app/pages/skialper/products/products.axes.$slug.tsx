import type { MetaFunction, LoaderArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { useQuerySubscription } from 'react-datocms'
import { useTranslation } from 'react-i18next'

import ScrollSpyNav from '~/components/Sections/ScrollSpyNav/ScrollSpyNav'
import PhotoGalleryWrapper from '~/components/Atoms/PhotoGalleryWrapper/PhotoGalleryWrapper'
import ShelfNewsCarousel from '~/components/Organisms/ShelfNewsCarousel/ShelfNewsCarousel'
import ShelfProductCarousel from '~/components/Organisms/ShelfProductCarousel/ShelfProductCarousel'
import ProductHeader from '~/components/Sections/ProductHeader/ProductHeader'
import ProductInWords from '~/components/Sections/ProductInWords/ProductInWords'
import { datoQuerySubscription, loadFragments } from '~/lib/datocms'
import {
  ResponsiveImageFragmentQuery,
  ArticleCardFragmentQuery,
} from '~/lib/generated'
import type { AxRecord, ArticleRecord, ScopeRecord } from '~/lib/generated'
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
  const locale = getLocale(request)
  const slug = params.slug
  const origin = new URL(request.url).origin
  const t = await i18next.getFixedT(locale)
  const familySlug = t('axesSlug')

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //we use print to access the query as a string
  const fragments = loadFragments([
    ResponsiveImageFragmentQuery,
    ArticleCardFragmentQuery,
  ])
  //a graph query to get a single ski

  const initialQuery = `#graphql
    query ($slug: String, $locale: SiteLocale, $familySlug: String) {
      ax: ax(locale: $locale, filter: { slug: { eq: $slug } }) {
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
        scopes{
          name
          slug
        }
        weightDeclared
        handleLengthMin
        handleLengthMax
        handleLengthDescription
        handleMaterial { name }
        headMaterial { name }
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
      products: allAxes {
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

  const datoQuerySubAx = await datoQuerySubscription({
    request,
    query: initialQuery,
    variables: { locale, slug, familySlug }, // The number of items passed to the query
  })

  return {
    average,
    axData: datoQuerySubAx.datoQuerySubscription,
  }
}

export default function Products() {
  const { t } = useTranslation()

  const { axData } = useLoaderData()
  const { data } = useQuerySubscription(axData)
  const ax = data.ax as AxRecord
  const products = data.products as AxRecord[]
  const family = data.family as [{ name: string; slug: string }]
  const lastArticles = data.lastArticles as ArticleRecord[]
  const common = data.common as { blogHeading: string }
  const scopes = ax.scopes as ScopeRecord
  const ProductInWordProps = {
    title: 'Le Valutazioni della Buyers',
    locked: false,
    intro: ax.testedDescription,
    images: ax.media[0].webGallery.map((image) => {
      return image.responsiveImage?.src
    }),
  }
  const ProductHeaderProps = {
    chips: [],
    brand: [
      {
        label: ax.brand?.name,
        to: ax.brand?.slug,
      },
    ],
    title: ax.name,
    shortDesc: ax.metadata?.description,
    productId: ax.id,
    userId: '123456789',
    ProductCoverData: {
      coverAltTxt: ax.media[0].webImage?.responsiveImage?.alt,
      coverImageSrc: ax.media[0].webImage?.responsiveImage?.src,
      coverImageFullSrc: ax.media[0].webImage?.responsiveImage?.src,
      testedIn: `TESTED ${ax.testedIn}`,
      awards: [
        ...ax.awards.map((award) => {
          return {
            name: award.label,
            img: award.logo?.responsiveImage?.src,
          }
        }),
      ],
    },
  }
  console.log(ax)

  const ProductTechSpecsProps = {
    locked: false,
    dataCompare: {
      measurements: [
        {
          data: 'Peso',
          declared: ax.weightDeclared,
          unit: 'g',
        },
        {
          data: 'Lunghezza manico minima',
          declared: ax.handleLengthMin,
          unit: 'cm',
        },
        {
          data: 'Lunghezza manico massima',
          declared: ax.handleLengthMax,
          unit: 'cm',
        },
      ],
    },
    firstSpecs: [
      {
        data: 'Descrizione lunghezza',
        value: ax.handleLengthDescription,
      },
      {
        data: 'Materiale manico',
        value: ax.handleMaterial?.name,
      },
      {
        data: 'Materiale testa',
        value: ax.headMaterial?.name,
      },
    ],
    secondSpecs: [
      {
        data: 'PREZZO',
        value:
          ax.priceEur && ax.priceUsd
            ? `${ax.priceEur} € / ${ax.priceUsd} $`
            : ax.priceEur
            ? `${ax.priceEur} €`
            : ax.priceUsd
            ? `${ax.priceUsd} $`
            : '',
      },
    ],
  }

  const ShelfNewsProps = {
    title: common.blogHeading,
    news: useArticleCardProps(lastArticles),
  }
  const similarProducts = [
    ...products.filter((product) => product.id !== ax.id),
  ]
  const ProductcarouselOneProps = {
    title: t('similarProducts'),
    products: [
      ...useCardProps(
        similarProducts,
        similarProducts.length > 0 ? similarProducts[0].families : [],
        'axe',
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
        <ScrollSpyNav labels={[t('inWords'), t('techSpec')]}>
          <>
            <ProductInWords {...ProductInWordProps} />
            <ProductTechSpecs {...ProductTechSpecsProps} />
          </>
        </ScrollSpyNav>
      </PhotoGalleryWrapper>
      <ShelfNewsCarousel {...ShelfNewsProps} variant="dark" />
      <ShelfProductCarousel {...ProductcarouselOneProps} />
    </main>
  )
}

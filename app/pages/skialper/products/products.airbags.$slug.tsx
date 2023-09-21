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
import type { AirbagRecord, ArticleRecord, ScopeRecord } from '~/lib/generated'
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
  const familySlug = t('airbagsSlug')

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //we use print to access the query as a string
  const fragments = loadFragments([
    ResponsiveImageFragmentQuery,
    ArticleCardFragmentQuery,
  ]) //a graph query to get a single ski

  const initialQuery = `#graphql
    query ($slug: String, $locale: SiteLocale, $familySlug: String) {
      airbag: airbag(locale: $locale, filter: { slug: { eq: $slug } }) {
        id
        name
        slug  
        testedDescription
        testedIn
        brand {
          name
          slug
        }
        metadata {
          description
          title
        }
        inflationType{
          name
        }
        inflationSystem{
          name
        }
        volumeAirbag
        volume
        weightDeclared
        weightDescription
        sizes
        inflationTime
        inflationTimeDescription
        volumeBaloon
        sizesDescription
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
      products: allAirbags {
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

  const datoQuerySubAirbag = await datoQuerySubscription({
    request,
    query: initialQuery,
    variables: { locale, slug, familySlug }, // The number of items passed to the query
  })

  return {
    average,
    airbagData: datoQuerySubAirbag.datoQuerySubscription,
  }
}

export default function Products() {
  const { t } = useTranslation()

  const { airbagData } = useLoaderData()
  const { data } = useQuerySubscription(airbagData)
  const airbag = data.airbag as AirbagRecord
  const products = data.products as AirbagRecord[]
  const family = data.family as [{ name: string; slug: string }]
  const lastArticles = data.lastArticles as ArticleRecord[]
  const scopes = airbag.scopes as ScopeRecord
  const common = data.common as { blogHeading: string }
  const isTested = true

  const ProductInWordProps = {
    title: 'Le Valutazioni della Buyers',
    locked: false,
    intro: airbag.testedDescription,
    images: airbag.media[0].webGallery.map((image) => {
      return image.responsiveImage?.src
    }),
  }
  const ProductHeaderProps = {
    chips: [],
    brand: [
      {
        label: airbag.brand?.name,
        to: airbag.brand?.slug,
      },
    ],
    title: airbag.name,
    shortDesc: airbag.metadata?.description,
    productId: airbag.id,
    userId: '123456789',
    ProductCoverData: {
      coverAltTxt: airbag.media[0].webImage?.responsiveImage?.alt,
      coverImageSrc: airbag.media[0].webImage?.responsiveImage?.src,
      coverImageFullSrc: airbag.media[0].webImage?.responsiveImage?.src,
      testedIn: `TESTED ${airbag.testedIn}`,
      awards: [
        ...airbag.awards.map((award) => {
          return {
            name: award.label,
            img: award.logo?.responsiveImage?.src,
          }
        }),
      ],
    },
  }

  const ShelfNewsProps = {
    title: common.blogHeading,
    news: useArticleCardProps(lastArticles),
  }

  const ProductTechSpecsProps = {
    locked: false,
    dataCompare: {
      measurements: [
        {
          data: 'Peso',
          declared: airbag.weightDeclared,
          unit: 'g',
        },
        {
          data: 'Volume airbag',
          declared: airbag.volumeAirbag,
          unit: 'L',
        },
        {
          data: 'Volume pallone',
          declared: airbag.volumeBaloon,
          unit: 'L',
        },
        {
          data: 'Volume',
          declared: airbag.volume,
          unit: 'L',
        },
      ],
    },
    firstSpecs: [
      {
        data: 'Descrizione peso',
        value: airbag.weightDescription,
      },
      {
        data: 'Tipologia gonfiaggio',
        value: airbag.inflationType?.name,
      },
      {
        data: 'Sistema gonfiaggio',
        value: airbag.inflationSystem?.name,
      },
      {
        data: 'Tempo gonfiaggio',
        value:
          airbag.inflationTime + ' sec. ' + airbag.inflationTimeDescription,
      },
    ],
    secondSpecs: [
      {
        data: 'Capienze disponibili',
        value: airbag.sizesDescription,
      },
      {
        data: 'Misure disponibili',
        value: airbag.sizes,
      },
      {
        data: 'PREZZO',
        value:
          airbag.priceEur && airbag.priceUsd
            ? `${airbag.priceEur} € / ${airbag.priceUsd} $`
            : airbag.priceEur
            ? `${airbag.priceEur} €`
            : airbag.priceUsd
            ? `${airbag.priceUsd} $`
            : '',
      },
    ],
  }

  const similarProducts = [
    ...products.filter((product) => product.id !== airbag.id),
  ]

  const ProductcarouselOneProps = {
    title: t('similarProducts'),
    products: [
      ...useCardProps(
        similarProducts,
        similarProducts.length > 0 ? similarProducts[0].families : [],
        'backpack',
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

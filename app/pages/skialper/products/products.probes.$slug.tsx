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
import type { ProbeRecord, ArticleRecord, ScopeRecord } from '~/lib/generated'
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
  const familySlug = t('probesSlug')

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //we use print to access the query as a string
  const fragments = loadFragments([
    ResponsiveImageFragmentQuery,
    ArticleCardFragmentQuery,
  ])
  //a graph query to get a single ski

  const initialQuery = `#graphql
    query ($slug: String, $locale: SiteLocale, $familySlug: String) {
      probe: probe(locale: $locale, filter: { slug: { eq: $slug } }) {
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
        cableMaterial{
          name
        }
        material{
          name
        }
        closingDescription
        diameter
        openLength
        segmentsLength
        weightDeclared
        tipDescription
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
      products: allProbes {
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

  const datoQuerySubProbe = await datoQuerySubscription({
    request,
    query: initialQuery,
    variables: { locale, slug, familySlug }, // The number of items passed to the query
  })

  return {
    average,
    probeData: datoQuerySubProbe.datoQuerySubscription,
  }
}

export default function Products() {
  const { t } = useTranslation()

  const { probeData } = useLoaderData()
  const { data } = useQuerySubscription(probeData)
  const probe = data.probe as ProbeRecord
  const products = data.products as ProbeRecord[]
  const family = data.family as [{ name: string; slug: string }]
  const lastArticles = data.lastArticles as ArticleRecord[]
  const common = data.common as { blogHeading: string }
  const scopes = probe.scopes as ScopeRecord
  const isTested = true

  const ProductInWordProps = {
    title: 'Le Valutazioni della Buyers',
    locked: false,
    intro: probe.testedDescription,
    images: probe.media[0].webGallery.map((image) => {
      return image.responsiveImage?.src
    }),
  }
  const ProductHeaderProps = {
    chips: [],
    brand: [
      {
        label: probe.brand?.name,
        to: probe.brand?.slug,
      },
    ],
    title: probe.name,
    shortDesc: probe.metadata?.description,
    productId: probe.id,
    userId: '123456789',
    ProductCoverData: {
      coverAltTxt: probe.media[0].webImage?.responsiveImage?.alt,
      coverImageSrc: probe.media[0].webImage?.responsiveImage?.src,
      coverImageFullSrc: probe.media[0].webImage?.responsiveImage?.src,
      testedIn: `TESTED ${probe.testedIn}`,
      awards: [
        ...probe.awards.map((award) => {
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
          data: 'Diametro',
          declared: probe.diameter,
          unit: 'mm',
        },
        {
          data: 'Lunghezza aperta',
          declared: probe.openLength,
          unit: 'cm',
        },
        {
          data: 'Lunghezza segmenti',
          declared: probe.segmentsLength,
          unit: 'cm',
        },
        {
          data: 'Peso',
          declared: probe.weightDeclared,
          unit: 'g',
        },
      ],
    },
    firstSpecs: [
      {
        data: 'Materiale',
        value: probe.material?.name,
      },
      {
        data: 'Materiale Cavo',
        value: probe.cableMaterial?.name,
      },
      {
        data: 'Descrizione chiusura',
        value: probe.closingDescription,
      },
      {
        data: 'Descrizione punta',
        value: probe.tipDescription,
      },
    ],
    secondSpecs: [
      {
        data: 'PREZZO',
        value:
          probe.priceEur && probe.priceUsd
            ? `${probe.priceEur} € / ${probe.priceUsd} $`
            : probe.priceEur
            ? `${probe.priceEur} €`
            : probe.priceUsd
            ? `${probe.priceUsd} $`
            : '',
      },
    ],
  }

  const ShelfNewsProps = {
    title: common.blogHeading,
    news: useArticleCardProps(lastArticles),
  }

  const similarProducts = [
    ...products.filter((product) => product.id !== probe.id),
  ]

  const ProductcarouselOneProps = {
    title: t('similarProducts'),
    products: [
      ...useCardProps(
        similarProducts,
        similarProducts.length > 0 ? similarProducts[0].families : [],
        'probe',
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

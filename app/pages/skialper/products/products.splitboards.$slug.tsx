import { redirect } from '@remix-run/node'
import type {
  ActionArgs,
  type V2_MetaFunction,
  type LoaderArgs,
} from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { useQuerySubscription } from 'react-datocms'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

import { useLocalizeLink } from '~/hooks/useLocalizeLink'
import PhotoGalleryWrapper from '~/components/Atoms/PhotoGalleryWrapper/PhotoGalleryWrapper'
import ShelfNewsCarousel from '~/components/Organisms/ShelfNewsCarousel/ShelfNewsCarousel'
import ShelfProductCarousel from '~/components/Organisms/ShelfProductCarousel/ShelfProductCarousel'
import ProductHeader from '~/components/Sections/ProductHeader/ProductHeader'
import ProductInWords from '~/components/Sections/ProductInWords/ProductInWords'
import ProductEvaluation from '~/components/Sections/ProductEvaluation/ProductEvaluation'
import ProductTechSpecs from '~/components/Sections/ProductTechSpecs/ProductTechSpecs'
import ScrollSpyNav from '~/components/Sections/ScrollSpyNav/ScrollSpyNav'
import { datoQuerySubscription, loadFragments } from '~/lib/datocms'
import {
  ResponsiveImageFragmentQuery,
  ArticleCardFragmentQuery,
} from '~/lib/generated'
import type {
  SplitboardRecord,
  SplitboardBootRecord,
  SplitboardBindingRecord,
  ArticleRecord,
} from '~/lib/generated'
import { getTopForLabels } from '~/lib/string.utils'
import datoCmsClient from '~/lib/datocms.server'
import SurveyProductWrapper from '~/components/Atoms/SurveyProductWrapper'
import BreadcrumbsProducts from '~/components/Molecules/Breadcrumbs/BreadcrumbsProducts'
import i18next from '~/i18next.server'
import {
  retrieveProductForm,
  retrieveUser,
} from '~/graphql/common-queries.graphql'
import { useArticleCardProps } from '~/hooks/useArticleCardProps'
import { useCardProps } from '~/hooks/useCardProps'
import { getLocale } from '~/utils'

export const meta: V2_MetaFunction = () => [
  { title: "Products - The Buyer's Guide" },
]

export const action = async ({ request }: ActionArgs) => {
  try {
    const formData = await request.formData()

    const answers = formData.get('answers')
    const started_at = new Date(formData.get('started_at')!.toString())
    const productId = formData.get('product')!.toString()
    const userId = formData.get('userId')!.toString()
    const callbackUrl = formData.get('callbackUrl')!.toString()
    const productImageUrl = formData.get('productImageUrl')!.toString()

    const client = datoCmsClient()

    await client.items.create({
      item_type: {
        type: 'item_type',
        id: '2110933',
      },
      form_type: 'product',
      answers,
      started_at,
      finished_at: new Date(),
      user: userId,
      product: productId,
    })

    return redirect(
      `/surveys/products/landing-complete?callbackUrl=${callbackUrl}&productImageUrl=${productImageUrl}`,
    )
  } catch (error) {
    console.error({ error })
  }
}

export const loader = async ({ request, params }: LoaderArgs) => {
  const slug = params.slug
  const origin = new URL(request.url).origin
  const locale = getLocale(request)
  const t = await i18next.getFixedT(locale)
  const familySlug = t('splitboardsSlug')

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //we use print to access the query as a string
  const fragments = loadFragments([
    ResponsiveImageFragmentQuery,
    ArticleCardFragmentQuery,
  ]) //a graph query to get a single ski

  const initialQuery = `#graphql
    query ($slug: String, $locale: SiteLocale, $familySlug: String) {
      splitboard: splitboard(locale: $locale, filter: { slug: { eq: $slug } }) {
        id
        name
        slug  
        testedDescription
        previewDescription
        testedOnsnowDescription
        testedPreview
        testedIn
        bigMountain
        funFreeride
        longHike
        steep
        levelHigh
        levelAdvanced
        levelGrowing
        levelBeginner
        edgeEffective
        waistWidthDeclared
        tailWidthDeclared
        tipWidthDeclared
        sidecutRadius
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
        categories {
          id
          name
          slug
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
        }
        metadata {
          description
          title
        }

        levelHigh
        levelAdvanced
        levelGrowing
        levelBeginner
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
        construction {
          name
        }
        materials {
          name
        }
        baseMaterials {
          name
        }
        sizesAvailable {
          size
        }
        releasedIn
        
        priceEur
        priceUsd
        sizeTested
        splitboardBoots{
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
        splitboardBindings{
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
  const average = await fetch(`${origin}/data/average.splitboards.json`).then(
    (res) => res.json(),
  )

  const datoQuerySubSplitboard = await datoQuerySubscription({
    request,
    query: initialQuery,
    variables: { locale, slug, familySlug }, // The number of items passed to the query
  })

  const user = await retrieveUser(request)
  const userId = user?.id
  const productData = datoQuerySubSplitboard.datoQuerySubscription
  const productId = productData.initialData.splitboard.id
  let formData = null

  if (userId) {
    const form = await retrieveProductForm(request, userId, productId)
    formData = form.initialData.form
  }
  return {
    average,
    splitboardData: datoQuerySubSplitboard.datoQuerySubscription,
    formData,
    user,
  }
}

export default function Products() {
  const [surveySelected, setSurveySelected] = useState<string | null>(null)
  const { t, i18n } = useTranslation()
  const [language] = useState<'en' | 'it'>(i18n.language as any)
  const { l } = useLocalizeLink()

  const { splitboardData, formData, user, average } = useLoaderData()
  const { data } = useQuerySubscription(splitboardData)

  const splitboard = data.splitboard as SplitboardRecord

  const categorySlug = splitboard.categories[0].slug
  const categoryAverage = average[categorySlug]

  const relatedSplitboardBoots = splitboard.categories[0]
    ._allReferencingSplitboardBoots as SplitboardBootRecord[]
  const relatedSplitboardBindings = splitboard.categories[0]
    ._allReferencingSplitboardBindings as SplitboardBindingRecord[]
  const relatedSplitboards = splitboard.categories[0]
    ._allReferencingSplitboards as SplitboardRecord[]
  const isTested = splitboard.testedPreview === 'tested'
  const family = data.family as [{ name: string; slug: string }]
  const lastArticles = data.lastArticles as ArticleRecord[]
  const common = data.common as { blogHeading: string }
  const scopes = splitboard.scopes as ScopeRecord[]
  const ProductInWordProps = {
    title: 'Le Valutazioni della Buyers',
    locked: false,
    intro: splitboard.testedDescription || splitboard.previewDescription,
    description: splitboard.testedOnsnowDescription,
    descriptionTitle: 'Sulla neve',
    images: splitboard.media[0].webGallery.map((image) => {
      return image.responsiveImage?.src
    }),
  }
  const ProductHeaderProps = {
    chips: splitboard.categories.map((category) => {
      return { label: category.name, to: l(`/categories/${category.slug}`) }
    }),
    brand: [{ label: splitboard.brand?.name, to: splitboard.brand?.slug }],
    title: splitboard.name,
    shortDesc: splitboard.metadata?.description,
    productId: splitboard.id,
    userId: '123456789',
    ProductCoverData: {
      coverAltTxt: splitboard.media[0].webImage?.responsiveImage?.alt,
      coverImageSrc: splitboard.media[0].webImage?.responsiveImage?.src,
      coverImageFullSrc: splitboard.media[0].webImage?.responsiveImage?.src,
      testedIn: `${splitboard.testedPreview.toUpperCase()} ${
        splitboard.testedIn
      }`,
      awards: [
        ...splitboard.awards.map((award) => {
          return {
            name: award.label,
            img: award.logo?.responsiveImage?.src,
          }
        }),
      ],
    },
  }

  const tripPurposes = ['Big Mountain', 'Long Hike', 'Steep', 'Fun Freeride']
  const levels = ['Principiante', 'In Crescita', 'Avanzato', 'Alto Livello']

  const productEvalProps = {
    title: 'Le Valutazioni della Buyers',
    locked: false,
    chartSquare: {
      title: 'Predisposizione',
      suggestedUse: getTopForLabels(tripPurposes, [
        splitboard.bigMountain,
        splitboard.longHike,
        splitboard.steep,
        splitboard.funFreeride,
      ]),
      chartData: [
        splitboard.bigMountain,
        splitboard.longHike,
        splitboard.steep,
        splitboard.funFreeride,
      ],
      meanData: [
        categoryAverage.bigMountain,
        categoryAverage.longHike,
        categoryAverage.steep,
        categoryAverage.funFreeride,
      ],
      chartLabels: tripPurposes,
    },
    chartBar: {
      title: 'Livello tecnico consigliato',
      suggestedUse: getTopForLabels(levels, [
        splitboard.levelBeginner,
        splitboard.levelGrowing,
        splitboard.levelAdvanced,
        splitboard.levelHigh,
      ]),
      chartLabels: levels,
      chartData: [
        splitboard.levelBeginner,
        splitboard.levelGrowing,
        splitboard.levelAdvanced,
        splitboard.levelHigh,
      ],
      meanData: [
        categoryAverage.levelBeginner,
        categoryAverage.levelGrowing,
        categoryAverage.levelAdvanced,
        categoryAverage.levelHigh,
      ],
    },
    variant: 'one-row-compressed' as any,
  }

  const ProductTechSpecsProps = {
    locked: false,
    dataCompare: {
      mainLabel: 'la lunghezza',
      mainData: splitboard.sizeTested,
      measurements: [
        {
          data: 'Lamina effettiva',
          declared: splitboard.edgeEffective,
          unit: 'mm',
        },
        {
          data: 'Larghezza centro dichiarata',
          declared: splitboard.waistWidthDeclared,
          unit: 'mm',
        },
        {
          data: 'Larghezza coda dichiarata',
          declared: splitboard.tailWidthDeclared,
          unit: 'mm',
        },
        {
          data: 'Larghezza punta dichiarata',
          declared: splitboard.tipWidthDeclared,
          unit: 'mm',
        },
        {
          data: 'Raggio di sciancratura',
          declared: splitboard.sidecutRadius,
          unit: '°',
        },
      ],
    },
    firstSpecs: [
      {
        data: 'Profilo',
        value: splitboard.construction?.name,
      },
      {
        data: 'MATERIALI',
        value: splitboard.materials
          ?.map((material) => material.name)
          .join(', '),
      },
      {
        data: 'MATERIALI SOLETTA',
        value: splitboard.baseMaterials
          ?.map((material) => material.name)
          .join(', '),
      },
    ],
    secondSpecs: [
      {
        data: 'MISURE DISPONIBILI',
        value: splitboard.sizesAvailable.map((size) => size.size).join(', '),
      },
      {
        data: 'MESSA SUL MERCATO',
        value: splitboard.releasedIn,
      },
      {
        data: 'PREZZO',
        value:
          splitboard.priceEur && splitboard.priceUsd
            ? `${splitboard.priceEur} € / ${splitboard.priceUsd} $`
            : splitboard.priceEur
            ? `${splitboard.priceEur} €`
            : splitboard.priceUsd
            ? `${splitboard.priceUsd} $`
            : '',
      },
    ],
  }

  const ShelfNewsProps = {
    title: common.blogHeading,
    news: useArticleCardProps(lastArticles),
  }

  const recommendedPairing = [
    ...splitboard.splitboardBoots.map((boot: any) => {
      boot.supermatch = true
      return boot
    }),
    ...relatedSplitboardBoots.filter(
      // remove the boots already present in relatedBoots
      (boot) =>
        !splitboard.splitboardBoots.map((boot) => boot.id).includes(boot.id),
    ),
  ]

  const recommendedMounting = [
    ...splitboard.splitboardBindings.map((binding: any) => {
      binding.supermatch = true
      return binding
    }),
    ...relatedSplitboardBindings.filter(
      // remove the bindings already present in relatedBindings
      (binding) =>
        !splitboard.splitboardBindings
          .map((binding) => binding.id)
          .includes(binding.id),
    ),
  ]

  const similarProducts = [
    ...relatedSplitboards.filter((ski) => ski.id !== splitboard.id),
  ]

  const ProductcarouselOneProps = {
    title: t('recommendedPairing'),
    products: [
      ...useCardProps(
        recommendedPairing,
        recommendedPairing.length > 0 ? recommendedPairing[0].families : [],
        'splitboard_boot',
      ),
    ],
  }

  const ProductcarouselTwoProps = {
    title: t('recommendedMounting'),
    products: [
      ...useCardProps(
        recommendedMounting,
        recommendedMounting.length > 0 ? recommendedMounting[0].families : [],
        'splitboard_binding',
      ),
    ],
  }

  const ProductcarouselThreeProps = {
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
      <SurveyProductWrapper
        productId={splitboard.id}
        feedbackSurvey={surveySelected}
        productImageUrl={splitboard.media[0].webImage?.responsiveImage?.src}
        language={language}
        onClose={() => setSurveySelected(null)}
      >
        <BreadcrumbsProducts
          familyName={family[0].name}
          familySlug={family[0].slug}
          scopeName={scopes[0].name}
          scopeSlug={scopes[0].slug}
        />
        <PhotoGalleryWrapper>
          <ProductHeader
            {...ProductHeaderProps}
            isFeedbackVisible={!!user || formData?.length === 0}
            hasCompiledForm={user ? formData?.length > 0 : false}
            onFeedback={() => setSurveySelected('splitboard')}
          />

          {isTested ? (
            <ScrollSpyNav
              labels={[t('buyersEvaluations'), t('inWords'), t('techSpec')]}
            >
              <>
                <ProductEvaluation {...productEvalProps} />
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
        <ShelfProductCarousel {...ProductcarouselThreeProps} />
      </SurveyProductWrapper>
    </main>
  )
}

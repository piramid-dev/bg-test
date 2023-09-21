import type { ActionArgs } from '@remix-run/node'
import {
  type V2_MetaFunction,
  type LoaderArgs,
  redirect,
} from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { useQuerySubscription } from 'react-datocms'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

import { useLocalizeLink } from '~/hooks/useLocalizeLink'
import PhotoGalleryWrapper from '~/components/Atoms/PhotoGalleryWrapper/PhotoGalleryWrapper'
import ShelfNewsCarousel from '~/components/Organisms/ShelfNewsCarousel/ShelfNewsCarousel'
import ShelfProductCarousel from '~/components/Organisms/ShelfProductCarousel/ShelfProductCarousel'
import ProductEvaluation from '~/components/Sections/ProductEvaluation/ProductEvaluation'
import ProductHeader from '~/components/Sections/ProductHeader/ProductHeader'
import ProductInWords from '~/components/Sections/ProductInWords/ProductInWords'
import ProductTechSpecs from '~/components/Sections/ProductTechSpecs/ProductTechSpecs'
import ScrollSpyNav from '~/components/Sections/ScrollSpyNav/ScrollSpyNav'
import { datoQuerySubscription, loadFragments } from '~/lib/datocms'
import {
  ResponsiveImageFragmentQuery,
  ArticleCardFragmentQuery,
} from '~/lib/generated'
import { getTopForLabels } from '~/lib/string.utils'
import type {
  BindingRecord,
  BootRecord,
  ScopeRecord,
  SkiRecord,
} from '~/lib/generated'
import SurveyProductWrapper from '~/components/Atoms/SurveyProductWrapper/SurveyProductWrapper'
import datoCmsClient from '~/lib/datocms.server'
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
  const familySlug = t('skisSlug')

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //we use print to access the query as a string
  const fragments = loadFragments([
    ResponsiveImageFragmentQuery,
    ArticleCardFragmentQuery,
  ]) //a graph query to get a single ski

  const initialQuery = `#graphql
    query ($slug: String, $locale: SiteLocale, $familySlug: String) {
      ski: ski(locale: $locale, filter: { slug: { eq: $slug } }) {
        id
        name
        slug  
        testedDescription
        previewDescription
        testedOnsnowDescription
        testedLabDescription
        testedPreview
        usedBy
        attitudes {
          name
        }
        suggestedArcCurve {
          name
        }
        snowHard
        brand {
          name
          slug
        }
        skierTypes{
          name
          slug
        }
        scopes{
          name
          slug
        }
        categories {
          id
          name
          slug
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
              name
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
            testedPreview
            types {
              name
            }
            awards {
              label
              name
              shortName
              color{
                hex
              }
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
            testedPreview
            weightDeclared
            waistWidthDeclared
            awards {
              label
              name
              shortName
              color{
                hex
              }
            }
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
        snowPowder
        snowWet
        snowCrust
        testedIn
        suitableFor
        alsoSuitableFor
        notSuitableFor
        summit
        slope
        line
        levelHigh
        levelAdvanced
        levelGrowing
        levelBeginner
        construction {
          name
        }
        usageSuggestions {
          percentage
          usage
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
        madeIn {
          country
        }
        priceEur
        priceUsd
        productStatus {
          name
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
        sizeTested
        lengthDeclared
        lengthMeasured
        waistWidthDeclared
        waistWidthMeasured
        tailWidthDeclared
        tailWidthMeasured
        tipWidthDeclared
        tipWidthMeasured
        edgeContact
        deck
        rockerTail
        rockerTip
        weightDeclared
        weightMeasuredLeft
        weightMeasuredRight
        curveRadiusDeclared
        curveRadiusMeasured
        liftSurface
        twistTip
        twistCenter
        twistTail
        bindings{
          id
          name
          slug
          brand{
            name
            slug
          }
          categories{
            name
          }
          families{
            name
            slug
          }
          testedPreview
          types{
            name
          }
          weightDeclared
          awards {
            label
            name
            shortName
            color{
              hex
            }
          }
          media{
            webImage{
              responsiveImage(
                imgixParams: { fm: jpg, fit: crop, w: 1000, h: 1000, fpY:1}
              ) {
                ...responsiveImage
              }
            }
          }
        }
        boots{
          id
          name
          slug
          brand{
            name
            slug
          }
          categories{
            name
          }
          families{
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
          leverNumber
          weightDeclared
          media{
            webImage{
              responsiveImage(
                imgixParams: { fm: jpg, fit: crop, w: 1000, h: 1000, fpY:1}
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
  const average = await fetch(`${origin}/data/average.skis.json`).then((res) =>
    res.json(),
  )

  const datoQuerySubSki = await datoQuerySubscription({
    request,
    query: initialQuery,
    variables: { locale, slug, familySlug }, // The number of items passed to the query
  })

  const user = await retrieveUser(request)

  const userId = user?.id
  const productData = datoQuerySubSki.datoQuerySubscription
  const productId = productData.initialData.ski.id
  let formData = null

  if (userId) {
    const form = await retrieveProductForm(request, userId, productId)
    formData = form.initialData.form
  }

  return {
    average,
    skiData: datoQuerySubSki.datoQuerySubscription,
    formData,
    user,
  }
}

export default function Products() {
  const [surveySelected, setSurveySelected] = useState<string | null>(null)
  const { t, i18n } = useTranslation()
  const [language] = useState<'en' | 'it'>(i18n.language as any)
  const { l } = useLocalizeLink()

  const { skiData, formData, average, user } = useLoaderData()
  const { data } = useQuerySubscription(skiData)

  const ski = data.ski as SkiRecord
  const relatedBoots = ski.categories[0]._allReferencingBoots as BootRecord[]
  const relatedBindings = ski.categories[0]
    ._allReferencingBindings as BindingRecord[]
  const relatedSkis = ski.categories[0]._allReferencingSkis as SkiRecord[]

  const categorySlug = ski.categories[0].slug
  const categoryAverage = average[categorySlug]
  const isTested = ski.testedPreview === 'tested'
  const lastArticles = data.lastArticles as ArticleRecord[]
  const common = data.common as { blogHeading: string }
  const scopes = ski.scopes as ScopeRecord[]
  const family = data.family as [{ name: string; slug: string }]

  //implode attitudes array into a string
  const attitudesString = ski.attitudes
    .map((attitude) => attitude.name)
    .join(', ')

  //labels for the charts
  const tripPurposes = ['Cima', 'Pendio', 'Linea']
  const snowTypes = [
    'Dura / portante',
    'Ventata / crosta',
    'Umida / bagnata',
    'Farinosa',
  ]
  const levels = ['Principiante', 'In Crescita', 'Avanzato', 'Alto Livello']

  const productEvalProps = {
    title: 'Le Valutazioni della Buyers',
    locked: false,
    location: [
      {
        data: 'Atteggiamento',
        value: attitudesString,
      },
      {
        data: 'Arco di curva indicato',
        value: ski.suggestedArcCurve?.name,
      },
      {
        data: 'Lo sapevi che è usato da',
        value: ski.usedBy,
      },
    ],
    chartTriangle: {
      title: 'Obiettivo gita',
      suggestedUse: getTopForLabels(tripPurposes, [
        ski.summit,
        ski.slope,
        ski.line,
      ]),
      chartData: [ski.summit, ski.line, ski.slope],
      meanData: [
        categoryAverage?.summit,
        categoryAverage?.line,
        categoryAverage?.slope,
      ],
      chartLabels: tripPurposes,
    },
    imageUrl: ski.media[0].webImageTest?.responsiveImage?.src,
    chartSquare: {
      title: 'Rendimento su neve',
      suggestedUse: getTopForLabels(snowTypes, [
        ski.snowHard,
        ski.snowCrust,
        ski.snowWet,
        ski.snowPowder,
      ]),
      chartData: [ski.snowHard, ski.snowCrust, ski.snowWet, ski.snowPowder],
      meanData: [
        categoryAverage?.snowHard,
        categoryAverage?.snowCrust,
        categoryAverage?.snowWet,
        categoryAverage?.snowPowder,
      ],
      chartLabels: snowTypes,
    },
    chartPie: {
      title: 'Indicazioni di utilizzo',
      chartData: ski.usageSuggestions.map((usage) => usage.percentage),
      chartLabels: ski.usageSuggestions.map((usage) => usage.usage),
      suggestedUse: getTopForLabels(
        ski.usageSuggestions.map((usage) => usage.usage || ''),
        ski.usageSuggestions.map((usage) => usage.percentage),
      ),
    },
    chartBar: {
      title: 'Livello tecnico consigliato',
      suggestedUse: getTopForLabels(levels, [
        ski.levelBeginner,
        ski.levelGrowing,
        ski.levelAdvanced,
        ski.levelHigh,
      ]),
      chartLabels: levels,
      chartData: [
        ski.levelBeginner,
        ski.levelGrowing,
        ski.levelAdvanced,
        ski.levelHigh,
      ],
      meanData: [
        categoryAverage?.levelBeginner,
        categoryAverage?.levelGrowing,
        categoryAverage?.levelAdvanced,
        categoryAverage?.levelHigh,
      ],
    },
  }

  const ProductInWordProps = {
    title: 'Le Valutazioni della Buyers',
    locked: false,
    intro: ski.testedDescription || ski.previewDescription,
    description: ski.testedOnsnowDescription,
    descriptionTitle: 'Sulla neve',
    lab: ski.testedLabDescription,
    images: ski.media[0].webGallery.map((image) => {
      return image.responsiveImage?.src
    }),
  }
  const ProductHeaderProps = {
    chips: [
      ...ski.categories.map((category) => {
        return { label: category.name, to: l(`/categories/${category.slug}`) }
      }),
      ...ski.skierTypes
        .filter((skierType) => skierType.slug !== 'unisex')
        .map((skierType) => {
          return { label: skierType.name, to: l(`/skiers/${skierType.slug}`) }
        }),
    ],
    brand: [{ label: ski.brand?.name, to: ski.brand?.name }],
    title: ski.name,
    shortDesc: ski.metadata?.description,
    productId: ski.id,
    ProductCoverData: {
      coverAltTxt: ski.media[0].webImage?.responsiveImage?.alt,
      coverImageSrc: ski.media[0].webImage?.responsiveImage?.src,
      coverImageFullSrc: ski.media[0].webImage?.responsiveImage?.src,
      testedIn: `${ski.testedPreview.toUpperCase()} ${ski.testedIn}`,
      awards: [
        ...ski.awards.map((award) => {
          return {
            name: award.label,
            img: award.logo?.responsiveImage?.src,
          }
        }),
      ],
    },
    CardSummaryData: {
      title: 'In sintesi',
      locked: false,
      apt_text: ski.suitableFor,
      not_apt_text: ski.notSuitableFor,
      also_apt_text: ski.alsoSuitableFor,
    },
  }
  const ProductTechSpecsProps = {
    locked: false,
    dataCompare: {
      mainLabel: 'la lunghezza',
      mainData: ski.sizeTested,
      measurements: [
        {
          data: 'Lunghezza',
          declared: ski.lengthDeclared,
          measured: ski.lengthMeasured,
          unit: 'cm',
        },
        {
          data: 'Larghezza in punta',
          declared: ski.tipWidthDeclared,
          measured: ski.tipWidthMeasured,
          unit: 'cm',
        },
        {
          data: 'Larghezza in coda',
          declared: ski.tailWidthDeclared,
          measured: ski.tailWidthMeasured,
          unit: 'cm',
        },
        {
          data: 'Larghezza in centro',
          declared: ski.waistWidthDeclared,
          measured: ski.waistWidthMeasured,
          unit: 'cm',
        },
        {
          data: 'Contatto Lamina',
          measured: ski.edgeContact,
          unit: 'mm',
        },
        { data: 'Ponte', measured: ski.deck, unit: 'cm' },
        { data: 'Ponte', measured: ski.deck, unit: 'cm' },
        { data: 'Rocker in punta', measured: ski.rockerTip, unit: 'cm' },
        { data: 'Rocker in coda', measured: ski.rockerTail, unit: 'cm' },
        {
          data: 'Peso',
          declared: ski.weightDeclared,
          measured: (ski.weightMeasuredLeft + ski.weightMeasuredRight) / 2,
          unit: 'g',
        },
        {
          data: 'Raggio di curvatura',
          declared: ski.curveRadiusDeclared,
          measured: ski.curveRadiusMeasured,
          unit: 'm',
        },
        {
          data: 'Superficie di portanza',
          measured: ski.liftSurface,
          unit: 'cm²',
        },
        {
          data: 'Torsione in punta',
          measured: ski.twistTip,
          unit: '°',
        },
        {
          data: 'Torsione al centro',
          measured: ski.twistCenter,
          unit: '°',
        },
        {
          data: 'Torsione in coda',
          measured: ski.twistTail,
          unit: '°',
        },
      ],
    },
    firstSpecs: [
      { data: 'COSTRUZIONE', value: ski.construction?.name },
      {
        data: 'MATERIALI',
        value: ski.materials?.map((material) => material.name).join(', '),
      },
      {
        data: 'SOLETTA',
        value: ski.baseMaterials?.map((material) => material.name).join(', '),
      },
    ],
    secondSpecs: [
      {
        data: 'MISURE DISPONIBILI',
        value: ski.sizesAvailable.map((size) => size.size).join(', '),
      },
      {
        data: 'MESSA SUL MERCATO',
        value: ski.releasedIn,
      },
      { data: 'MADE IN', value: ski.madeIn?.country },
      {
        data: 'PREZZO',
        value:
          ski.priceEur && ski.priceUsd
            ? `${ski.priceEur} € / ${ski.priceUsd} $`
            : ski.priceEur
            ? `${ski.priceEur} €`
            : ski.priceUsd
            ? `${ski.priceUsd} $`
            : '',
      },
      { data: 'STATUS', value: ski.productStatus?.name },
    ],
  }
  const ShelfNewsProps = {
    title: common.blogHeading,
    news: useArticleCardProps(lastArticles),
  }

  const recommendedPairing = [
    ...ski.boots.map((boot: any) => {
      boot.supermatch = true
      return boot
    }),
    ...relatedBoots.filter(
      // remove the boots already present in relatedBoots
      (boot) => !ski.boots.map((boot) => boot.id).includes(boot.id),
    ),
  ]

  const recommendedMounting = [
    ...ski.bindings.map((binding: any) => {
      binding.supermatch = true
      return binding
    }),
    ...relatedBindings.filter(
      // remove the bindings already present in relatedBindings
      (binding) =>
        !ski.bindings.map((binding) => binding.id).includes(binding.id),
    ),
  ]

  const similarProducts = [...relatedSkis.filter((_ski) => _ski.id !== ski.id)]

  const ProductcarouselOneProps = {
    title: t('recommendedPairing'),
    products: [
      ...useCardProps(
        recommendedPairing,
        recommendedPairing.length > 0 ? recommendedPairing[0].families : [],
        'boot',
      ),
    ],
  }

  const ProductcarouselTwoProps = {
    title: t('recommendedMounting'),
    products: [
      ...useCardProps(
        recommendedMounting,
        recommendedMounting.length > 0 ? recommendedMounting[0].families : [],
        'binding',
      ),
    ],
  }

  const ProductcarouselThreeProps = {
    title: t('similarProducts'),
    products: [
      ...useCardProps(
        similarProducts,
        similarProducts.length > 0 ? similarProducts[0].families : [],
        'ski',
      ),
    ],
  }

  console.log(scopes)

  return (
    <main className="relative min-h-screen bg-white">
      <SurveyProductWrapper
        productId={ski.id}
        feedbackSurvey={surveySelected}
        productImageUrl={ski.media[0].webImage?.responsiveImage?.src}
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
            onFeedback={() => setSurveySelected('ski')}
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
            <ScrollSpyNav labels={[t('inWords'), t('techSpec')]}>
              <>
                <ProductInWords {...ProductInWordProps} />
                <ProductTechSpecs {...ProductTechSpecsProps} />
              </>
            </ScrollSpyNav>
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

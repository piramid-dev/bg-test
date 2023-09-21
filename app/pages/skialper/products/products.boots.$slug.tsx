import { redirect } from '@remix-run/node'
import type { ActionArgs, MetaFunction, LoaderArgs } from '@remix-run/node'
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
  BootRecord,
  BindingRecord,
  SkiRecord,
  ScopeRecord,
} from '~/lib/generated'
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

export const meta: MetaFunction = () => [
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
  const familySlug = t('bootsSlug')

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //we use print to access the query as a string
  const fragments = loadFragments([
    ResponsiveImageFragmentQuery,
    ArticleCardFragmentQuery,
  ]) //a graph query to get a single boot
  const initialQuery = `#graphql
    query ($slug: String, $locale: SiteLocale, $familySlug: String) {
      boot: boot(locale: $locale, filter: { slug: { eq: $slug } }) {
        id
        name
        slug
        testedDescription
        previewDescription
        testedPreview
        testedLabDescription
        testedWalkDescription
        testedSkiingDescription
        weightDeclared
        weightMeasured
        shellLengthInner
        shellWidthExternal
        shellLengthExternalDeclared
        shellLengthExternalMeasured
        shellWeight
        linerWeight
        labCramponability
        labBootfitting
        labBuckles
        labSkiwalk
        performanceSkisAscent
        performanceClimbing
        performanceSkiing
        performanceWalk
        sizesDescription
        isSustainableRnw
        isSustainableRec
        isSustainableDr
        sizeTested
        pinDistance
        leanForward
        forceTenBackwardsUphill
        forceFifteenForwardUphill
        cuffRom
        shaftHeightMax
        tongueHeightMax
        forefootWidthMax
        ankleWidthMax
        soleThicknessToe
        leverNumber
        leverDescription
        lastMin
        lastMax
        soleDescription
        linerDescription
        thermalValue
        skierTypes{
          name
          slug
        }
        productStatus{
          name
        }
        madeIn{
          country
        }
        usageSuggestions{
          usage
          percentage
        }
        inserts{
          name
        }
        curveDownhill{
          name
        }
        shellMaterials{
          name
        }
        linerMaterials{
          name
        }
        categories {
          name
          slug
        }
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
            testedPreview
            leverNumber
            weightDeclared
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
            awards {
              label
              name
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
        testedIn
        media {
          webImage {
            responsiveImage(
              imgixParams: { fm: jpg, fit: crop, w: 800, h: 1000, fpY:1 }
            ) {
              ...responsiveImage
            }
          }
          webGallery{
            responsiveImage(
              imgixParams: { fm: jpg, fit: crop, w: 1000, h: 1000, fpY:1 }
            ) {
              ...responsiveImage
            }
          }
        }
        releasedIn
        priceEur
        priceUsd
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
          awards {
              label
              name
              shortName
              color{
                hex
              }
            }
          testedPreview
          types{
            name
          }
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
        skis{
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
  const average = await fetch(`${origin}/data/average.boots.json`).then((res) =>
    res.json(),
  )

  const datoQuerySub = await datoQuerySubscription({
    request,
    query: initialQuery,
    variables: { locale, slug, familySlug }, // The number of items passed to the query
  })

  const user = await retrieveUser(request)

  const userId = user?.id
  const productData = datoQuerySub.datoQuerySubscription
  const productId = productData.initialData.boot.id
  let formData = null

  if (userId) {
    const form = await retrieveProductForm(request, userId, productId)
    formData = form.initialData.form
  }

  return {
    average,
    formData,
    user,
    bootsData: productData,
  }
}

export default function Products() {
  const [surveySelected, setSurveySelected] = useState<string | null>(null)
  const { t, i18n } = useTranslation()
  const { l } = useLocalizeLink()

  const [language] = useState<'en' | 'it'>(i18n.language as any)

  const { bootsData, average, formData, user } = useLoaderData()
  const { data } = useQuerySubscription(bootsData)

  console.log(average)
  const boot = data.boot as BootRecord

  const categorySlug = boot.categories[0].slug
  const categoryAverage = average[categorySlug]
  const relatedBoots = boot.categories[0]._allReferencingBoots as BootRecord[]
  const relatedBindings = boot.categories[0]
    ._allReferencingBindings as BindingRecord[]
  const relatedSkis = boot.categories[0]._allReferencingSkis as SkiRecord[]
  const family = data.family as [{ name: string; slug: string }]
  const scopes = boot.scopes as ScopeRecord[]
  const lastArticles = data.lastArticles as ArticleRecord[]
  const common = data.common as { blogHeading: string }
  const isTested = boot.testedPreview === 'tested'
  const labLabels = [
    'Ramponabilità',
    'Funzionalità leva ski / walk',
    'Possibilità di bootfitting',
    'Funzionalità ganci',
  ]

  const performanceLabels = [
    'Salita con gli sci',
    'Camminata',
    'Arrampicata',
    'Sciata',
  ]

  const sustainabilityValues = [
    'Utilizzo di materiale da fonti naturali.',
    'Utilizzo di materiale da riciclo pre- e post-consumo.',
    'Designed for recycling: scarpone sviluppato tenendo in considerazione il suo disassemblaggio e la possibilità di essere riparato.',
  ]

  //concat all the values of the sustainabilityValues array in a single string using isSustainableRnw, isSustainableRec and isSustainableDr
  const sustainabilityValuesString = sustainabilityValues
    .map((value, index) => {
      if (boot.isSustainableRnw && index === 0) {
        return value
      }
      if (boot.isSustainableRec && index === 1) {
        return value
      }
      if (boot.isSustainableDr && index === 2) {
        return value
      }
      return ''
    })
    .join(' ')

  const productEvalProps = {
    title: 'Le Valutazioni della Buyers',
    locked: false,
    chartPie: {
      title: 'Indicazioni di utilizzo',
      chartData: boot.usageSuggestions.map((usage) => usage.percentage),
      chartLabels: boot.usageSuggestions.map((usage) => usage.usage),
      suggestedUse: getTopForLabels(
        boot.usageSuggestions.map((usage) => usage.usage || ''),
        boot.usageSuggestions.map((usage) => usage.percentage),
      ),
    },
    chartBar: {
      title: 'In laboratorio',
      suggestedUse: getTopForLabels(labLabels, [
        boot.labCramponability,
        boot.labSkiwalk,
        boot.labBootfitting,
        boot.labBuckles,
      ]),
      chartLabels: labLabels,
      chartData: [
        boot.labCramponability,
        boot.labSkiwalk,
        boot.labBootfitting,
        boot.labBuckles,
      ],
      meanData: [
        categoryAverage?.labCramponability,
        categoryAverage?.labSkiwalk,
        categoryAverage?.labBootfitting,
        categoryAverage?.labBuckles,
      ],
    },
    chartSquare: {
      title: 'Rendimento nelle varie situazioni',
      suggestedUse: getTopForLabels(performanceLabels, [
        boot.performanceSkisAscent,
        boot.performanceWalk,
        boot.performanceClimbing,
        boot.performanceSkiing,
      ]),
      chartData: [
        boot.performanceSkisAscent,
        boot.performanceWalk,
        boot.performanceClimbing,
        boot.performanceSkiing,
      ],
      meanData: [
        categoryAverage?.performanceSkisAscent,
        categoryAverage?.performanceWalk,
        categoryAverage?.performanceClimbing,
        categoryAverage?.performanceSkiing,
      ],
      chartLabels: performanceLabels,
    },
    variant: 'one-row' as any,
  }

  const ProductInWordProps = {
    title: 'Le Valutazioni della Buyers',
    locked: false,
    intro: boot.testedDescription || boot.previewDescription,
    descriptionTitle: 'Camminata',
    description: boot.testedWalkDescription,
    lab: boot.testedLabDescription,
    skiing: boot.testedSkiingDescription,
    images: boot.media[0].webGallery.map((image) => {
      return image.responsiveImage?.src
    }),
  }
  const ProductHeaderProps = {
    chips: [
      ...boot.categories.map((category) => {
        return { label: category.name, to: l(`/categories/${category.slug}`) }
      }),
      ...boot.skierTypes
        .filter((skierType) => skierType.slug !== 'unisex')
        .map((skierType) => {
          return { label: skierType.name, to: l(`/skiers/${skierType.slug}`) }
        }),
    ],
    brand: [{ label: boot.brand?.name, to: boot.brand?.slug }],
    title: boot.name,
    shortDesc: boot.metadata?.description,
    productId: boot.id,
    ProductCoverData: {
      coverAltTxt: boot.media[0].webImage?.responsiveImage?.alt,
      coverImageSrc: boot.media[0].webImage?.responsiveImage?.src,
      coverImageFullSrc: boot.media[0].webImage?.responsiveImage?.src,
      testedIn: `${boot.testedPreview.toUpperCase()} ${boot.testedIn}`,
      awards: [
        ...boot.awards.map((award) => {
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
      mainLabel: 'la misura',
      mainData: boot.sizeTested,
      measurements: [
        {
          data: 'Peso',
          declared: boot.weightDeclared,
          measured: boot.weightMeasured,
          unit: 'gr',
        },
        {
          data: 'Peso scarpetta',
          measured: boot.linerWeight,
          unit: 'gr',
        },
        {
          data: 'Peso scocca',
          measured: boot.shellWeight,
          unit: 'gr',
        },
        {
          data: 'Lunghezza scafo esterna',
          measured: boot.shellLengthExternalMeasured,
          declared: boot.shellLengthExternalDeclared,
          unit: 'mm',
        },
        {
          data: 'Larghezza scafo esterna',
          measured: boot.shellWidthExternal,
          unit: 'mm',
        },
        {
          data: 'Larghezza scafo interna',
          measured: boot.shellLengthInner,
          unit: 'mm',
        },
        {
          data: 'Distanza pin',
          measured: boot.pinDistance,
          unit: 'mm',
        },

        {
          data: 'Forza per arrivare a 10° indietro (in salita)',
          measured: boot.forceTenBackwardsUphill,
          unit: 'Nm',
        },
        {
          data: 'Forza per arrivare a 15° in avanti (in salita)',
          measured: boot.forceFifteenForwardUphill,
          unit: 'Nm',
        },
        {
          data: 'Mobilità gambetto',
          measured: boot.cuffRom,
          unit: '°',
        },
        {
          data: 'Altezza massima gambale',
          measured: boot.shaftHeightMax,
          unit: 'mm',
        },
        {
          data: 'Altezza massima plastica frontale',
          measured: boot.tongueHeightMax,
          unit: 'mm',
        },
        {
          data: 'Larghezza massima avampiede',
          measured: boot.forefootWidthMax,
          unit: 'mm',
        },
        {
          data: 'Larghezza massima caviglia',
          measured: boot.ankleWidthMax,
          unit: 'mm',
        },
        {
          data: 'Spessore suola punta',
          measured: boot.soleThicknessToe,
          unit: 'mm',
        },
        {
          data: 'Last minimo',
          measured: boot.lastMin,
          unit: 'mm',
        },
        {
          data: 'Last massimo',
          measured: boot.lastMax,
          unit: 'mm',
        },
      ],
    },
    firstSpecs: [
      {
        data: 'MATERIALI GAMBETTO',
        value: boot.linerMaterials?.map((material) => material.name).join(', '),
      },
      {
        data: 'MATERIALI SCAFO',
        value: boot.shellMaterials?.map((type) => type.name).join(', '),
      },
      {
        data: 'TIPOLOGIA CURVA (in discesa)',
        value: boot.curveDownhill?.name,
      },
      {
        data: 'TIPOLOGIA DI INSERTO',
        value: boot.inserts?.map((insert) => insert.name).join(', '),
      },
      {
        data: 'Descrizione leve',
        value: boot.leverDescription,
      },
      {
        data: 'Descrizione suola',
        value: boot.soleDescription,
      },
      {
        data: 'Descrizione scarpetta',
        value: boot.linerDescription,
      },
      {
        data: 'Valore termico',
        value: boot.thermalValue,
      },
      {
        data: 'Numero leve',
        value: boot.leverNumber,
      },
      {
        data: 'Inclinazione anteriore',
        value: boot.leanForward,
      },
    ],
    secondSpecs: [
      {
        data: 'MISURE DISPONIBILI',
        value: boot.sizesDescription,
      },
      {
        data: 'MESSA SUL MERCATO',
        value: boot.releasedIn,
      },
      { data: 'MADE IN', value: boot.madeIn?.country },
      {
        data: 'PREZZO',
        value:
          boot.priceEur && boot.priceUsd
            ? `${boot.priceEur} € / ${boot.priceUsd} $`
            : boot.priceEur
            ? `${boot.priceEur} €`
            : boot.priceUsd
            ? `${boot.priceUsd} $`
            : '',
      },
      { data: 'STATUS', value: boot.productStatus?.name },
      { data: 'SOSTENIBILITÀ', value: sustainabilityValuesString },
    ],
  }
  const ShelfNewsProps = {
    title: common.blogHeading,
    news: useArticleCardProps(lastArticles),
  }

  const recommendedPairing = [
    ...boot.skis.map((ski: any) => {
      ski.supermatch = true
      return ski
    }),
    ...relatedSkis.filter(
      // remove the boots already present in relatedBoots
      (ski) => !boot.skis.map((ski) => ski.id).includes(ski.id),
    ),
  ]

  const recommendedMounting = [
    ...boot.bindings.map((binding: any) => {
      binding.supermatch = true
      return binding
    }),
    ...relatedBindings.filter(
      // remove the bindings already present in relatedBindings
      (binding) =>
        !boot.bindings.map((binding) => binding.id).includes(binding.id),
    ),
  ]

  const similarProducts = [
    ...relatedBoots.filter((_boot) => _boot.id !== boot.id),
  ]

  const ProductcarouselOneProps = {
    title: t('recommendedPairing'),
    products: [
      ...useCardProps(
        recommendedPairing,
        recommendedPairing.length > 0 ? recommendedPairing[0].families : [],
        'ski',
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
        'boot',
      ),
    ],
  }

  return (
    <main className="relative min-h-screen bg-white">
      <SurveyProductWrapper
        productId={boot.id}
        feedbackSurvey={surveySelected}
        productImageUrl={boot.media[0].webImage?.responsiveImage?.src}
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
            onFeedback={() => setSurveySelected('boot')}
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

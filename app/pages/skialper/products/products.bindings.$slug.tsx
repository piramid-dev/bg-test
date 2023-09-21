import {
  type V2_MetaFunction,
  type LoaderArgs,
  type ActionArgs,
  redirect,
} from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { useState } from 'react'
import { useQuerySubscription } from 'react-datocms'
import { useTranslation } from 'react-i18next'

import { useLocalizeLink } from '~/hooks/useLocalizeLink'
import PhotoGalleryWrapper from '~/components/Atoms/PhotoGalleryWrapper/PhotoGalleryWrapper'
import SurveyProductWrapper from '~/components/Atoms/SurveyProductWrapper'
import ShelfNewsCarousel from '~/components/Organisms/ShelfNewsCarousel/ShelfNewsCarousel'
import ShelfProductCarousel from '~/components/Organisms/ShelfProductCarousel/ShelfProductCarousel'
import ProductEvaluationWithInfo from '~/components/Sections/ProductEvaluationWithInfo/ProductEvaluationWithInfo'
import ProductHeader from '~/components/Sections/ProductHeader/ProductHeader'
import ProductInWords from '~/components/Sections/ProductInWords/ProductInWords'
import ProductTechSpecs from '~/components/Sections/ProductTechSpecs/ProductTechSpecs'
import ScrollSpyNav from '~/components/Sections/ScrollSpyNav/ScrollSpyNav'
import { datoQuerySubscription, loadFragments } from '~/lib/datocms'
import datoCmsClient from '~/lib/datocms.server'
import {
  ResponsiveImageFragmentQuery,
  ArticleCardFragmentQuery,
} from '~/lib/generated'
import type {
  BindingRecord,
  SkiRecord,
  BootRecord,
  ArticleRecord,
  ScopeRecord,
} from '~/lib/generated'
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
  const familySlug = t('bindingsSlug')

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //we use print to access the query as a string
  const fragments = loadFragments([
    ResponsiveImageFragmentQuery,
    ArticleCardFragmentQuery,
  ])
  //a graph query to get a single binding
  const initialQuery = `#graphql
    query ($slug: String, $locale: SiteLocale, $familySlug: String) {
      binding: binding(locale: $locale, filter: { slug: { eq: $slug } }) {
        id
        name
        slug
        testedDescription
        previewDescription
        testedPreview
        testedFitDescription
        dynafitInsertsReleasePole
        dynafitInsertsReleaseGloves
        dynafitInsertsStepin
        otherInsertsStepin
        otherInsertsReleasePole
        otherInsertsReleaseGloves
        dynafitInsertsRelease
        otherInsertsRelease
        heelDynafitInsertsRelease
        heelOtherInsertsRelease
        skiBrake
        mountingScrewsNumber
        cramponsSlot
        drop
        toeWeightMeasured
        cramponsSlotOptional
        weightDeclared
        weightMeasured
        heelWeightMeasured
        pinHeelHeight
        pinToeHeight
        mountingScrewsWeightMeasured
        releaseRangeMin
        releaseRangeMax
        releaseRangeAdjustable
        availableVersions
        walkingModes
        skierTypes{
          name
          slug
        }
        categories {
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
        materials{
          name
        }
        types{
          name
        }
        brand {
          name
          slug
        }
        categories {
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
              imgixParams: { fm: jpg}
            ) {
              ...responsiveImage
            }
          }
          webGallery {
            responsiveImage(
              imgixParams: { fm: jpg, fit: crop, w: 1000, h: 1000 }
            ) {
              ...responsiveImage
            }
          }
          
        }
        releasedIn
        priceEur
        priceUsd
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
  const average = await fetch(`${origin}/data/average.bindings.json`).then(
    (res) => res.json(),
  )

  const datoQuerySub = await datoQuerySubscription({
    request,
    query: initialQuery,
    variables: { locale, slug, familySlug }, // The number of items passed to the query
  })

  const user = await retrieveUser(request)
  const userId = user?.id
  const productData = datoQuerySub.datoQuerySubscription
  const productId = productData.initialData.binding.id
  let formData = null

  if (userId) {
    const form = await retrieveProductForm(request, userId, productId)
    formData = form.initialData.form
  }

  return {
    average,
    formData,
    datoQuerySubscription: datoQuerySub.datoQuerySubscription,
    user,
  }
}

export default function Products() {
  const [surveySelected, setSurveySelected] = useState<string | null>(null)
  const { t, i18n } = useTranslation()
  const { l } = useLocalizeLink()

  const [language] = useState<'en' | 'it'>(i18n.language as any)

  const { datoQuerySubscription, average, formData, user } = useLoaderData()
  const { data } = useQuerySubscription(datoQuerySubscription)

  const binding = data.binding as BindingRecord
  const relatedBoots = binding.categories[0]
    ._allReferencingBoots as BootRecord[]
  const relatedBindings = binding.categories[0]
    ._allReferencingBindings as BindingRecord[]
  const relatedSkis = binding.categories[0]._allReferencingSkis as SkiRecord[]
  const categorySlug = binding.categories[0].slug
  const categoryAverage = average[categorySlug]
  const family = data.family as [{ name: string; slug: string }]
  const lastArticles = data.lastArticles as ArticleRecord[]
  const common = data.common as { blogHeading: string }
  const isTested = binding.testedPreview === 'tested'
  const scopes = binding.scopes as ScopeRecord[]
  //get the top value for the charts
  const getTopForLabels = (chartLabels: string[], chartData: number[]) => {
    //get the max value of the chartData array
    const max = Math.max(...chartData)
    return chartLabels
      .map((label, index) => {
        //get the index of the max value
        if (chartData[index] === max) {
          return label
        }

        return undefined
      })
      .filter((label) => label !== undefined)
      .join(', ')
  }

  //labels for the charts
  const comfortLabels = [
    'Entrata',
    'Apertura con guanti',
    'Apertura con bastone',
  ]

  const insertsValues = ['Scarso', 'Buono', 'Ottimo']

  const productEvalProps = {
    title: 'Le Valutazioni della Buyers',
    locked: false,
    firstChartTriangle: {
      title: 'Comfort / Certificati Dynafit',
      suggestedUse: getTopForLabels(comfortLabels, [
        binding.dynafitInsertsStepin,
        binding.dynafitInsertsReleaseGloves,
        binding.dynafitInsertsReleasePole,
      ]),
      chartData: [
        binding.dynafitInsertsStepin,
        binding.dynafitInsertsReleaseGloves,
        binding.dynafitInsertsReleasePole,
      ],
      meanData: [
        categoryAverage.dynafitInsertsStepin,
        categoryAverage.dynafitInsertsReleaseGloves,
        categoryAverage.dynafitInsertsReleasePole,
      ],
      chartLabels: comfortLabels,
    },
    secondChartTriangle: {
      title: 'Comfort / Altri inserti',
      suggestedUse: getTopForLabels(comfortLabels, [
        binding.otherInsertsStepin,
        binding.otherInsertsReleaseGloves,
        binding.otherInsertsReleasePole,
      ]),
      chartData: [
        binding.otherInsertsStepin,
        binding.otherInsertsReleaseGloves,
        binding.otherInsertsReleasePole,
      ],
      meanData: [
        categoryAverage.otherInsertsStepin,
        categoryAverage.otherInsertsReleaseGloves,
        categoryAverage.otherInsertsReleasePole,
      ],
      chartLabels: comfortLabels,
    },
    firstBoxData: [
      {
        data: 'ANT DX + sx media',
        value: insertsValues[binding.dynafitInsertsRelease - 1],
      },
      {
        data: 'Talloniera',
        value: insertsValues[binding.heelDynafitInsertsRelease - 1],
      },
    ],
    secondBoxData: [
      {
        data: 'ANT DX + sx media',
        value: insertsValues[binding.otherInsertsRelease - 1],
      },
      {
        data: 'Talloniera',
        value: insertsValues[binding.heelOtherInsertsRelease - 1],
      },
    ],
  }

  const ProductInWordProps = {
    title: 'Le Valutazioni della Buyers',
    locked: false,
    intro: binding.testedDescription || binding.previewDescription,
    descriptionTitle: 'Calzata',
    description: binding.testedFitDescription,
    images: binding.media[0].webGallery.map((image) => {
      return image.responsiveImage?.src
    }),
  }
  const ProductHeaderProps = {
    chips: [
      ...binding.categories.map((category) => {
        return { label: category.name, to: l(`/categories/${category.slug}`) }
      }),
      ...binding.skierTypes
        .filter((skierType) => skierType.slug !== 'unisex')
        .map((skierType) => {
          return { label: skierType.name, to: l(`/skiers/${skierType.slug}`) }
        }),
    ],
    brand: [{ label: binding.brand?.name, to: binding.brand?.slug }],
    title: binding.name,
    shortDesc: binding.metadata?.description,
    productId: binding.id,
    userId: '123456789',
    ProductCoverData: {
      coverAltTxt: binding.media[0].webImage?.responsiveImage?.alt,
      coverImageSrc: binding.media[0].webImage?.responsiveImage?.src,
      coverImageFullSrc: binding.media[0].webImage?.responsiveImage?.src,
      testedIn: `${binding.testedPreview.toUpperCase()} ${binding.testedIn}`,
      awards: [
        ...binding.awards.map((award) => {
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
          data: 'Drop',
          measured: binding.drop,
          unit: 'mm',
        },
        {
          data: 'Peso',
          declared: binding.weightDeclared,
          measured: binding.weightMeasured,
          unit: 'gr',
        },
        {
          data: 'Peso puntale',
          measured: binding.toeWeightMeasured,
          unit: 'gr',
        },
        {
          data: 'Peso talloniera',
          measured: binding.heelWeightMeasured,
          unit: 'gr',
        },
        {
          data: 'Peso viti montaggio',
          measured: binding.mountingScrewsWeightMeasured,
          unit: 'gr',
        },
        {
          data: 'Quota pin anteriori',
          measured: binding.pinToeHeight,
          unit: 'gr',
        },
        {
          data: 'Quota pin posteriori',
          measured: binding.pinHeelHeight,
          unit: 'gr',
        },
        {
          data: 'Range di sgancio minimo',
          measured: binding.releaseRangeMin,
          unit: 'DIN',
        },
        {
          data: 'Range di sgancio massimo',
          measured: binding.releaseRangeMax,
          unit: 'DIN',
        },
      ],
    },
    firstSpecs: [
      {
        data: 'MATERIALI',
        value: binding.materials?.map((material) => material.name).join(', '),
      },
      {
        data: 'TIPOLOGIA',
        value: binding.types?.map((type) => type.name).join(', '),
      },
      {
        data: 'SKI STOPPER',
        value: binding.skiBrake,
      },
      {
        data: 'NUMERO VITI DI MONTAGGIO',
        value: binding.mountingScrewsNumber,
      },
      { data: 'INNESTO COLTELLI', value: binding.cramponsSlot ? 'Si' : 'No' },
      {
        data: 'INNESTO COLTELLI OPZIONALE',
        value: binding.cramponsSlotOptional ? 'Si' : 'No',
      },
      {
        data: 'RANGE DI SGANCIO REGOLABILE',
        value: binding.releaseRangeAdjustable ? 'Si' : 'No',
      },
      {
        data: 'VERSIONI DI SGANCIO',
        value: binding.availableVersions,
      },
      {
        data: 'POSIZIONI',
        value: binding.walkingModes,
      },
    ],
    secondSpecs: [
      {
        data: 'MESSA SUL MERCATO',
        value: binding.releasedIn,
      },
      {
        data: 'PREZZO',
        value:
          binding.priceEur && binding.priceUsd
            ? `${binding.priceEur} € / ${binding.priceUsd} $`
            : binding.priceEur
            ? `${binding.priceEur} €`
            : binding.priceUsd
            ? `${binding.priceUsd} $`
            : '',
      },
    ],
  }
  const ShelfNewsProps = {
    title: common.blogHeading,
    news: useArticleCardProps(lastArticles),
  }

  const shoeItWith = [
    ...binding.boots.map((boot: any) => {
      boot.supermatch = true
      return boot
    }),
    ...relatedBoots.filter(
      (boot: any) =>
        !binding.boots.map((boot: any) => boot.id).includes(boot.id),
    ),
  ]

  const recommendedMounting = [
    ...binding.skis.map((ski: any) => {
      ski.supermatch = true
      return ski
    }),
    ...relatedSkis.filter(
      // remove the bindings already present in relatedBindings
      (ski) => !binding.skis.map((ski) => ski.id).includes(ski.id),
    ),
  ]

  const similarProducts = [
    ...relatedBindings.filter((_binding) => _binding.id !== binding.id),
  ]

  const ProductcarouselOneProps = {
    title: t('shoeItWith'),
    products: [
      ...useCardProps(
        shoeItWith,
        shoeItWith.length > 0 ? shoeItWith[0].families : [],
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
        'ski',
      ),
    ],
  }

  const ProductcarouselThreeProps = {
    title: t('similarProducts'),
    products: [
      ...useCardProps(
        similarProducts,
        similarProducts.length > 0 ? similarProducts[0].families : [],
        'binding',
      ),
    ],
  }

  return (
    <main className="relative min-h-screen bg-white">
      <SurveyProductWrapper
        productId={binding.id}
        feedbackSurvey={surveySelected}
        productImageUrl={binding.media[0].webImage?.responsiveImage?.src}
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
            onFeedback={() => setSurveySelected('binding')}
          />

          {isTested ? (
            <ScrollSpyNav
              labels={[t('buyersEvaluations'), t('inWords'), t('techSpec')]}
            >
              <>
                <ProductEvaluationWithInfo {...productEvalProps} />
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

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
import ProductHeader from '~/components/Sections/ProductHeader/ProductHeader'
import ProductInWords from '~/components/Sections/ProductInWords/ProductInWords'
import ProductEvaluation from '~/components/Sections/ProductEvaluation/ProductEvaluation'
import ScrollSpyNav from '~/components/Sections/ScrollSpyNav/ScrollSpyNav'
import { datoQuerySubscription, loadFragments } from '~/lib/datocms'
import {
  ResponsiveImageFragmentQuery,
  ArticleCardFragmentQuery,
} from '~/lib/generated'
import type {
  SplitboardBindingRecord,
  SplitboardBootRecord,
  SplitboardRecord,
} from '~/lib/generated'
import { getTopForLabels } from '~/lib/string.utils'
import ProductTechSpecs from '~/components/Sections/ProductTechSpecs/ProductTechSpecs'
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
  const familySlug = t('splitboardBindingsSlug')

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //we use print to access the query as a string
  const fragments = loadFragments([
    ResponsiveImageFragmentQuery,
    ArticleCardFragmentQuery,
  ])
  //a graph query to get a single ski

  const initialQuery = `#graphql
    query ($slug: String, $locale: SiteLocale, $familySlug: String) {
      splitboardBinding: splitboardBinding(locale: $locale, filter: { slug: { eq: $slug } }) {
        id
        name
        slug  
        testedDescription
        previewDescription
        testedOnsnowDescription
        testedPreview
        testedIn
        alpinism
        longHike
        funFreeride
        featHibackRigidity
        featUsageSpeed
        featStrapComfort
        weightDeclared
        nagativeHibackAvailable
        heelLockAvailable
        heelLifterAvailable
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
        
        releasedIn
        
        priceEur
        priceUsd
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
        splitboards{
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
  const average = await fetch(
    `${origin}/data/average.splitboard-bindings.json`,
  ).then((res) => res.json())

  const datoQuerySubSplitboardBinding = await datoQuerySubscription({
    request,
    query: initialQuery,
    variables: { locale, slug, familySlug }, // The number of items passed to the query
  })

  const user = await retrieveUser(request)
  const userId = user?.id
  const productData = datoQuerySubSplitboardBinding.datoQuerySubscription
  const productId = productData.initialData.splitboardBinding.id
  let formData = null

  if (userId) {
    const form = await retrieveProductForm(request, userId, productId)
    formData = form.initialData.form
  }

  return {
    average,
    splitboardBindingData: datoQuerySubSplitboardBinding.datoQuerySubscription,
    formData,
    user,
  }
}

export default function Products() {
  const [surveySelected, setSurveySelected] = useState<string | null>(null)
  const { t, i18n } = useTranslation()
  const { l } = useLocalizeLink()

  const [language] = useState<'en' | 'it'>(i18n.language as any)

  const { splitboardBindingData, formData, user, average } = useLoaderData()
  const { data } = useQuerySubscription(splitboardBindingData)

  const splitboardBinding = data.splitboardBinding as SplitboardBindingRecord
  const categorySlug = splitboardBinding.categories[0].slug
  const categoryAverage = average[categorySlug]

  const relatedSplitboardBoots = splitboardBinding.categories[0]
    ._allReferencingSplitboardBoots as SplitboardBootRecord[]
  const relatedSplitboardBindings = splitboardBinding.categories[0]
    ._allReferencingSplitboardBindings as SplitboardBindingRecord[]
  const relatedSplitboards = splitboardBinding.categories[0]
    ._allReferencingSplitboards as SplitboardRecord[]
  const isTested = splitboardBinding.testedPreview === 'tested'
  const family = data.family as [{ name: string; slug: string }]
  const lastArticles = data.lastArticles as ArticleRecord[]
  const common = data.common as { blogHeading: string }
  const scopes = splitboardBinding.scopes as ScopeRecord[]
  const ProductInWordProps = {
    title: 'Le Valutazioni della Buyers',
    locked: false,
    intro:
      splitboardBinding.testedDescription ||
      splitboardBinding.previewDescription,
    description: splitboardBinding.testedOnsnowDescription,
    descriptionTitle: 'Sulla neve',
    images: splitboardBinding.media[0].webGallery.map((image) => {
      return image.responsiveImage?.src
    }),
  }
  const ProductHeaderProps = {
    chips: splitboardBinding.categories.map((category) => {
      return { label: category.name, to: l(`/categories/${category.slug}`) }
    }),
    brand: [
      {
        label: splitboardBinding.brand?.name,
        to: splitboardBinding.brand?.slug,
      },
    ],
    title: splitboardBinding.name,
    shortDesc: splitboardBinding.metadata?.description,
    productId: splitboardBinding.id,
    userId: '123456789',
    ProductCoverData: {
      coverAltTxt: splitboardBinding.media[0].webImage?.responsiveImage?.alt,
      coverImageSrc: splitboardBinding.media[0].webImage?.responsiveImage?.src,
      coverImageFullSrc:
        splitboardBinding.media[0].webImage?.responsiveImage?.src,
      testedIn: `${splitboardBinding.testedPreview.toUpperCase()} ${
        splitboardBinding.testedIn
      }`,
      awards: [
        ...splitboardBinding.awards.map((award) => {
          return {
            name: award.label,
            img: award.logo?.responsiveImage?.src,
          }
        }),
      ],
    },
  }

  const charactLabels = [
    'Rapidità di utilizzo',
    'Comfort strap',
    'Rigidità hiback',
  ]
  const levelLabels = [
    'Principiante',
    'In Crescita',
    'Avanzato',
    'Alto Livello',
  ]
  const predispositionLabels = ['Alpinism', 'Fun Freeride', 'Long Hike']

  const productEvalProps = {
    title: 'Le Valutazioni della Buyers',
    locked: false,
    chartTriangleTwo: {
      title: 'Caratteristiche',
      suggestedUse: getTopForLabels(charactLabels, [
        splitboardBinding.featUsageSpeed,
        splitboardBinding.featStrapComfort,
        splitboardBinding.featHibackRigidity,
      ]),
      chartData: [
        splitboardBinding.featUsageSpeed,
        splitboardBinding.featHibackRigidity,
        splitboardBinding.featStrapComfort,
      ],
      meanData: [
        categoryAverage.featUsageSpeed,
        categoryAverage.featHibackRigidity,
        categoryAverage.featStrapComfort,
      ],
      chartLabels: charactLabels,
    },
    chartBar: {
      title: 'Livello tecnico consigliato',
      suggestedUse: getTopForLabels(levelLabels, [
        splitboardBinding.levelBeginner,
        splitboardBinding.levelGrowing,
        splitboardBinding.levelAdvanced,
        splitboardBinding.levelHigh,
      ]),
      chartLabels: levelLabels,
      chartData: [
        splitboardBinding.levelBeginner,
        splitboardBinding.levelGrowing,
        splitboardBinding.levelAdvanced,
        splitboardBinding.levelHigh,
      ],
      meanData: [
        categoryAverage.levelBeginner,
        categoryAverage.levelGrowing,
        categoryAverage.levelAdvanced,
        categoryAverage.levelHigh,
      ],
    },
    chartTriangle: {
      title: 'Predispozione',
      suggestedUse: getTopForLabels(predispositionLabels, [
        splitboardBinding.alpinism,
        splitboardBinding.funFreeride,
        splitboardBinding.longHike,
      ]),
      chartData: [
        splitboardBinding.alpinism,
        splitboardBinding.longHike,
        splitboardBinding.funFreeride,
      ],
      meanData: [
        categoryAverage.alpinism,
        categoryAverage.longHike,
        categoryAverage.funFreeride,
      ],
      chartLabels: predispositionLabels,
    },
  }

  const ProductTechSpecsProps = {
    locked: false,
    dataCompare: {
      measurements: [
        {
          data: 'Peso dichiarato',
          declared: splitboardBinding.weightDeclared,
          unit: 'gr',
        },
      ],
    },
    firstSpecs: [
      {
        data: 'Hiback negativo',
        value: splitboardBinding.nagativeHibackAvailable ? 'Si' : 'No',
      },
      {
        data: 'Alzatacco',
        value: splitboardBinding.heelLifterAvailable ? 'Si' : 'No',
      },
      {
        data: 'Blocca tallone',
        value: splitboardBinding.heelLockAvailable ? 'Si' : 'No',
      },
    ],
    secondSpecs: [
      {
        data: 'MESSA SUL MERCATO',
        value: splitboardBinding.releasedIn,
      },
      {
        data: 'PREZZO',
        value:
          splitboardBinding.priceEur && splitboardBinding.priceUsd
            ? `${splitboardBinding.priceEur} € / ${splitboardBinding.priceUsd} $`
            : splitboardBinding.priceEur
            ? `${splitboardBinding.priceEur} €`
            : splitboardBinding.priceUsd
            ? `${splitboardBinding.priceUsd} $`
            : '',
      },
    ],
  }

  const ShelfNewsProps = {
    title: common.blogHeading,
    news: useArticleCardProps(lastArticles),
  }

  const recommendedPairing = [
    ...splitboardBinding.splitboardBoots.map((boot: any) => {
      boot.supermatch = true
      return boot
    }),
    ...relatedSplitboardBoots.filter(
      // remove the boots already present in relatedBoots
      (boot) =>
        !splitboardBinding.splitboardBoots
          .map((boot) => boot.id)
          .includes(boot.id),
    ),
  ]

  const recommendedMounting = [
    ...splitboardBinding.splitboards.map((split: any) => {
      split.supermatch = true
      return split
    }),
    ...relatedSplitboards.filter(
      // remove the bindings already present in relatedBindings
      (split) =>
        !splitboardBinding.splitboards
          .map((split) => split.id)
          .includes(split.id),
    ),
  ]

  const similarProducts = [
    ...relatedSplitboardBindings.filter(
      (binding) => binding.id !== splitboardBinding.id,
    ),
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
        'splitboard',
      ),
    ],
  }

  const ProductcarouselThreeProps = {
    title: t('similarProducts'),
    products: [
      ...useCardProps(
        similarProducts,
        similarProducts.length > 0 ? similarProducts[0].families : [],
        'splitboard_binding',
      ),
    ],
  }

  return (
    <main className="relative min-h-screen bg-white">
      <SurveyProductWrapper
        productId={splitboardBinding.id}
        feedbackSurvey={surveySelected}
        productImageUrl={
          splitboardBinding.media[0].webImage?.responsiveImage?.src
        }
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
            onFeedback={() => setSurveySelected('splitboard_binding')}
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

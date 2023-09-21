import type { LoaderArgs } from '@remix-run/node'
import { useLoaderData, useSearchParams } from '@remix-run/react'

import i18next from '~/i18next.server'
import ProductWithFilters from '~/components/Sections/ProductWithFilters/ProductWithFilters'
import SimpleHero from '~/components/Sections/SimpleHero/SimpleHero'
import { datoQuerySubscription, loadFragments } from '~/lib/datocms'
import { extractPrefilledFilters, prepareFilterProps } from '~/lib/filter.utils'
import { ResponsiveImageFragmentQuery } from '~/lib/generated'
import BreadcrumbsProducts from '~/components/Molecules/Breadcrumbs/BreadcrumbsProducts'
import { useCardProps } from '~/hooks/useCardProps'
import { getLocale } from '~/utils'

export const loader = async ({ request, params }: LoaderArgs) => {
  const locale = getLocale(request)
  const t = await i18next.getFixedT(locale)
  const slug = t('skisSlug')
  const fragments = loadFragments([ResponsiveImageFragmentQuery])

  const initialQuery = `#graphql
    query ($first: IntType, $skip: IntType, $slug: String, $locale: SiteLocale) {
      products: allSkis(locale: $locale, first: $first, skip: $skip) {
        id
        name
        slug
        testedPreview
        categories {
            name
            slug
        }
        families {
            name
            slug
        }
        waistWidthDeclared
        tailWidthDeclared
        tipWidthDeclared
        liftSurface
        curveRadiusDeclared
        suggestedArcCurve { name }
        construction { name }
        materials { name }
        rockerTail
        rockerTip
        brand { name }
        awards {
          label 
          shortName
          color{
            hex
          }
        }
        priceEur
        weightDeclared
        categories { name }
        skierTypes { name }
        colors { name rgb { hex } order }
        snowPowder
        snowHard
        snowCrust
        snowWet
        slope
        summit
        line
        levelBeginner
        levelGrowing
        levelAdvanced
        levelHigh
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
      _allSkisMeta {
          count
      }
      family: allProductFamilies(locale: $locale, filter: { slug: { eq: $slug } }){
        name
        slug
        description
        _allReferencingScopes{
          name 
          slug
        }
        image{
          responsiveImage(
            imgixParams: { fm: jpg }
          ) {
            ...responsiveImage
          }

      }
    }
  }
  ${fragments}
  `
  let skip = 0
  let count = 0
  let products: any[] = []
  let family: any[] = []

  let results = null
  do {
    results = await datoQuerySubscription({
      request,
      query: initialQuery,
      variables: { locale, first: 100, skip, slug },
    })

    products = products.concat(
      results.datoQuerySubscription.initialData.products,
    )
    family = family.concat(results.datoQuerySubscription.initialData.family)
    count = results.datoQuerySubscription.initialData._allSkisMeta.count
    skip += 100
  } while (skip < count)

  const data: any = { products, family }

  if (results.datoQuerySubscription.enabled !== undefined) {
    data.enabled = results.datoQuerySubscription.enabled
  }

  if ((results.datoQuerySubscription as any).preview !== undefined) {
    data.preview = (results.datoQuerySubscription as any).preview
  }

  return { datoQuerySubscription: { data } }
}

export default function ProductsTypeIndex() {
  const [searchParams] = useSearchParams()
  const { datoQuerySubscription } = useLoaderData()
  const {
    data: { products, family },
  } = datoQuerySubscription
  const heroSectionProps = {
    title: family[0].name,
    description: family[0].description,
    imageUrl: family[0].image?.responsiveImage?.src,
  }

  const productProps = useCardProps(products, family, 'ski')
  const filtersProps = prepareFilterProps(productProps, 'ski')
  const mainScope = family[0]._allReferencingScopes[0]

  const prefilledFilters = extractPrefilledFilters(searchParams, [
    {
      paramName: 'category',
      fieldName: 'categories',
    },
    {
      paramName: 'skier',
      fieldName: 'skierTypes',
    },
  ])

  return (
    <main className="relative min-h-screen bg-white">
      <BreadcrumbsProducts
        scopeName={mainScope.name}
        scopeSlug={mainScope.slug}
      />
      <SimpleHero {...heroSectionProps} />
      <ProductWithFilters
        filters={filtersProps}
        products={productProps}
        prefilledFilters={prefilledFilters}
      />
    </main>
  )
}

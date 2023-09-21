import type { LoaderArgs } from '@remix-run/node'
import { useLoaderData, useSearchParams } from '@remix-run/react'
import { useQuerySubscription } from 'react-datocms'

import ProductWithFilters from '~/components/Sections/ProductWithFilters/ProductWithFilters'
import SimpleHero from '~/components/Sections/SimpleHero/SimpleHero'
import { datoQuerySubscription, loadFragments } from '~/lib/datocms'
import { extractPrefilledFilters, prepareFilterProps } from '~/lib/filter.utils'
import { ResponsiveImageFragmentQuery } from '~/lib/generated'
import { useCardProps } from '~/hooks/useCardProps'
import i18next from '~/i18next.server'
import BreadcrumbsProducts from '~/components/Molecules/Breadcrumbs/BreadcrumbsProducts'
import { getLocale } from '~/utils'

export const loader = async ({ request, params }: LoaderArgs) => {
  const locale = getLocale(request)
  const t = await i18next.getFixedT(locale)
  const slug = t('probesSlug')
  const fragments = loadFragments([ResponsiveImageFragmentQuery])

  const query = `#graphql
    query ($slug: String, $locale: SiteLocale){
        products: allProbes(locale: $locale) {
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

        _allProbesMeta {
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

  return datoQuerySubscription({
    request,
    query,
    variables: { locale, slug },
  })
}

export default function ProductsTypeIndex() {
  const [searchParams] = useSearchParams()
  const { datoQuerySubscription } = useLoaderData()

  const {
    data: { products, family },
  } = useQuerySubscription(datoQuerySubscription)

  const heroSectionProps = {
    title: family[0].name,
    description: family[0].description,
    imageUrl: family[0].image?.responsiveImage?.src,
  }

  // const productProps = products.map((product: any, idx: number) => ({
  //   ...product,
  //   chips: [
  //     product.families.map((f: any) => f.name),
  //     // product.categories.map((c: any) => c.name),
  //   ],
  //   awards: [
  //     { name: 'green', color: 'green' },
  //     { name: 'smart', color: 'silver' },
  //     { name: 'pro', color: 'silver' },
  //   ],
  //   to: `/products/probes/${product.slug}`,
  //   imageUrl: product.media[0]?.webImage?.responsiveImage?.src,
  //   firstInfo: `Materiale: ${product.material.name || 'N/A'}`,
  //   secondInfo: `Peso: ${product.weightDeclared || 'N/A'} gr`,
  // }))

  const productProps = useCardProps(products, family, 'probe')
  const filtersProps = prepareFilterProps(productProps, 'probe')
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
      />{' '}
      <SimpleHero {...heroSectionProps} />
      <ProductWithFilters
        filters={filtersProps}
        products={productProps}
        prefilledFilters={prefilledFilters}
      />
    </main>
  )
}

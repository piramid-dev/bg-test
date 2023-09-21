import type { MetaFunction, LoaderArgs } from '@remix-run/node'
import { useLoaderData, useSearchParams } from '@remix-run/react'

import ProductWithFilters from '~/components/Sections/ProductWithFilters'
import SimpleHero from '~/components/Sections/SimpleHero'
import { useCardProps } from '~/hooks/useCardProps'
import { datoQuerySubscription, loadFragments } from '~/lib/datocms'
import { prepareFilterProps } from '~/lib/filter.utils'
import { ResponsiveImageFragmentQuery } from '~/lib/generated'
import type { IPrefilledFilter } from '~/types/filter.interface'
import { getLocale } from '~/utils'

export const meta: MetaFunction = () => [
  { title: "Products - The Buyer's Guide" },
]

export const loader = async ({ request }: LoaderArgs) => {
  const locale = getLocale(request)
  const fragments = loadFragments([ResponsiveImageFragmentQuery])

  const queries = {
    common: `#graphql
        query($locale: SiteLocale){
            common: common(locale: $locale){
              allProductsTitle
              allProductsImage{
                responsiveImage(
                  imgixParams: { fm: jpg }
                ) {
                  ...responsiveImage
                }
              }
            }
        }
       ${fragments}
    `,
    airbags: `#graphql
        query ($first: IntType, $skip: IntType, $locale: SiteLocale){
            meta: _allAirbagsMeta { count }
            
            airbags: allAirbags(locale: $locale, first: $first, skip: $skip) { 
                id
                slug 
                name 
                brand { name } 
                families { name slug } 
                weightDeclared
                priceEur 
                priceUsd
                awards {
                  name
                  label
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
       ${fragments}
    `,
    artvas: `#graphql
        query ($first: IntType, $skip: IntType, $locale: SiteLocale){
            meta: _allArtvasMeta { count }
            artvas: allArtvas(locale: $locale, first: $first, skip: $skip) { 
                id
                slug 
                name 
                brand { name } 
                families { name slug } 
                weightDeclared
                priceEur 
                priceUsd
                awards {
                  name
                  label 
                  shortName
                  color{
                    hex
                  }
                }
                autonomy
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
       ${fragments}
    `,
    axes: `#graphql
        query ($first: IntType, $skip: IntType, $locale: SiteLocale){
            meta: _allAxesMeta { count }
            axes: allAxes(locale: $locale, first: $first, skip: $skip) { 
                id
                slug 
                name 
                brand { name } 
                families { name slug } 
                weightDeclared
                priceEur 
                priceUsd
                headMaterial { name }
                awards {
                  name
                  label 
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
       ${fragments}
    `,
    bindings: `#graphql
        query ($first: IntType, $skip: IntType, $locale: SiteLocale){
            meta: _allBindingsMeta { count }
            bindings: allBindings(locale: $locale, first: $first, skip: $skip) { 
                id
                slug 
                name 
                brand { name } 
                families { name slug } 
                weightDeclared
                priceEur 
                priceUsd
                awards {
                  name
                  label 
                  shortName
                  color{
                    hex
                  }
                }
                types { name }
                categories { name }
                skierTypes { name }
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
       ${fragments}
    `,
    boots: `#graphql
        query ($first: IntType, $skip: IntType, $locale: SiteLocale){
            meta: _allBootsMeta { count }
            boots: allBoots(locale: $locale, first: $first, skip: $skip) { 
                id
                slug 
                name 
                brand { name } 
                families { name slug } 
                weightDeclared
                priceEur 
                priceUsd
                leverNumber
                awards {
                  name
                  label 
                  shortName
                  color{
                    hex
                  }
                }
                categories { name }
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
       ${fragments}
    `,
    crampons: `#graphql
        query ($first: IntType, $skip: IntType, $locale: SiteLocale){
            meta: _allCramponsMeta { count }
            crampons: allCrampons(locale: $locale, first: $first, skip: $skip) { 
                id
                slug 
                name 
                brand { name } 
                families { name slug } 
                weightDeclared
                priceEur 
                priceUsd
                awards {
                  name
                  label 
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
       ${fragments}
    `,
    harnesses: `#graphql
        query ($first: IntType, $skip: IntType, $locale: SiteLocale){
            meta: _allHarnessesMeta { count }
            harnesses: allHarnesses(locale: $locale, first: $first, skip: $skip) { 
                id
                slug 
                name 
                brand { name } 
                families { name slug } 
                weightDeclared
                priceEur 
                priceUsd
                awards {
                  name
                  label 
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
       ${fragments}
    `,
    helmets: `#graphql
        query ($first: IntType, $skip: IntType, $locale: SiteLocale){
            meta: _allHelmetsMeta { count }
            helmets: allHelmets(locale: $locale, first: $first, skip: $skip) { 
                id
                slug 
                name 
                brand { name } 
                families { name slug } 
                weightDeclared
                priceEur 
                priceUsd
                awards {
                  name
                  label 
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
       ${fragments}
    `,
    poles: `#graphql
        query ($first: IntType, $skip: IntType, $locale: SiteLocale){
            meta: _allPolesMeta { count }
            poles: allPoles(locale: $locale, first: $first, skip: $skip) { 
                id
                slug 
                name 
                brand { name } 
                families { name slug } 
                weightMeasured
                priceEur 
                priceUsd
                awards {
                  name
                  label 
                  shortName
                  color{
                    hex
                  }
                }
                types { name }
                media {
                    webImagePreview {
                    responsiveImage(
                        imgixParams: { fm: jpg, fit: crop, w: 1000, h: 1000, fpY:0}
                    ) {
                        ...responsiveImage
                    }
                    }
                }
            }
        }
       ${fragments}
    `,
    probes: `#graphql
        query ($first: IntType, $skip: IntType, $locale: SiteLocale){
            meta: _allProbesMeta { count }
            probes: allProbes(locale: $locale, first: $first, skip: $skip) { 
                id
                slug 
                name 
                brand { name } 
                families { name slug } 
                weightDeclared
                priceEur 
                priceUsd
                awards {
                  name
                  label 
                  shortName
                  color{
                    hex
                  }
                }
                material { name }
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
       ${fragments}
    `,
    shovels: `#graphql
        query ($first: IntType, $skip: IntType, $locale: SiteLocale){
            meta: _allShovelsMeta { count }
            shovels: allShovels(locale: $locale, first: $first, skip: $skip) { 
                id
                slug 
                name 
                brand { name } 
                families { name slug } 
                weightDeclared
                priceEur 
                priceUsd
                awards {
                  name
                  label 
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
       ${fragments}
    `,
    skins: `#graphql
        query ($first: IntType, $skip: IntType, $locale: SiteLocale){
            meta: _allSkinsMeta { count }
                skins: allSkins(locale: $locale, first: $first, skip: $skip) { 
                    id
                slug 
                    name 
                    brand { name } 
                    families { name slug } 
                    weightDryMeasured
                    priceEur 
                    priceUsd
                    materials { name }
                    awards {
                      name
                      label 
                      shortName
                      color{
                        hex
                      }
                    }
                    categories { name }
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
        ${fragments}`,
    skis: `#graphql
        query ($first: IntType, $skip: IntType, $locale: SiteLocale){
            meta: _allSkisMeta { count }
            skis: allSkis(locale: $locale, first: $first, skip: $skip) { 
                id
                slug 
                name 
                brand { name } 
                families { name slug } 
                weightDeclared
                waistWidthDeclared
                priceEur 
                priceUsd
                awards {
                  name
                  label 
                  shortName
                  color{
                    hex
                  }
                }
                categories { name }
                skierTypes { name }
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
       ${fragments}
    `,
    splitboardbindings: `#graphql
        query ($first: IntType, $skip: IntType, $locale: SiteLocale){
            meta: _allSplitboardBindingsMeta { count }
            splitboardbindings: allSplitboardBindings(locale: $locale, first: $first, skip: $skip) { 
                id
                slug 
                name 
                brand { name } 
                families { name slug } 
                weightDeclared
                priceEur 
                priceUsd
                awards {
                  name
                  label 
                  shortName
                  color{
                    hex
                  }
                }
                categories { name }
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
       ${fragments}
    `,
    splitboardboots: `#graphql
        query ($first: IntType, $skip: IntType, $locale: SiteLocale){
            meta: _allSplitboardBootsMeta { count }
            splitboardboots: allSplitboardBoots(locale: $locale, first: $first, skip: $skip) { 
                id
                slug 
                name 
                brand { name } 
                families { name slug } 
                weightDeclared
                priceEur 
                priceUsd
                awards {
                  name
                  label 
                  shortName
                  color{
                    hex
                  }
                }
                categories { name }
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
       ${fragments}
    `,
    splitboards: `#graphql
        query ($first: IntType, $skip: IntType, $locale: SiteLocale){
            meta: _allSplitboardsMeta { count }
            splitboards: allSplitboards(locale: $locale, first: $first, skip: $skip) { 
                id
                slug 
                name brand { name} 
                families { name slug}
                weightDeclared 
                priceEur 
                priceUsd
                awards {
                  name
                  label 
                  shortName
                  color{
                    hex
                  }
                }
                categories { name }
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
        ${fragments}
    `,
  }

  const data: any = {}
  const promises: Promise<any>[] = Object.keys(queries)
    .filter(
      //remove common query
      (key) => key !== 'common',
    )
    .map(async (key) => {
      try {
        const query = queries[key as keyof typeof queries] as any
        let skip = 0
        let count = 0

        if (data[key] === undefined) {
          data[key] = []
        }

        do {
          const results = await datoQuerySubscription({
            request,
            query,
            variables: { locale, first: 100, skip },
          })

          data[key] = data[key].concat(
            results.datoQuerySubscription.initialData[key],
          )

          count = results.datoQuerySubscription.initialData.meta.count
          skip += 100
        } while (skip < count)

        return Promise.resolve()
      } catch (error) {
        return Promise.reject(error)
      }
    })

  //common query promise
  promises.push(
    new Promise(async (resolve, reject) => {
      try {
        const results = await datoQuerySubscription({
          request,
          query: queries.common,
          variables: { locale },
        })

        Object.assign(data, results.datoQuerySubscription.initialData)

        resolve()
      } catch (error) {
        reject(error)
      }
    }),
  )

  await Promise.all(promises)

  return {
    datoQuerySubscription: { data },
  }
}

export default function Products() {
  const [searchParams] = useSearchParams()

  const { datoQuerySubscription } = useLoaderData()
  const {
    data: {
      airbags,
      artvas,
      axes,
      bindings,
      boots,
      crampons,
      harnesses,
      helmets,
      poles,
      probes,
      shovels,
      skins,
      skis,
      splitboardbindings,
      splitboardboots,
      splitboards,
      common,
    },
  } = datoQuerySubscription

  const productsProps = [
    useCardProps(airbags, airbags[0].families as any[], 'airbag'),
    useCardProps(artvas, artvas[0].families as any[], 'artva'),
    useCardProps(axes, axes[0].families as any[], 'axe'),
    useCardProps(bindings, bindings[0].families as any[], 'binding'),
    useCardProps(boots, boots[0].families as any[], 'boot'),
    useCardProps(crampons, crampons[0].families as any[], 'crampon'),
    useCardProps(harnesses, harnesses[0].families as any[], 'harness'),
    useCardProps(helmets, helmets[0].families as any[], 'helmet'),
    useCardProps(poles, poles[0].families as any[], 'pole'),
    useCardProps(probes, probes[0].families as any[], 'probe'),
    useCardProps(shovels, shovels[0].families as any[], 'shovel'),
    useCardProps(skins, skins[0].families as any[], 'skin'),
    useCardProps(skis, skis[0].families as any[], 'ski'),
    useCardProps(
      splitboardbindings,
      splitboardbindings[0].families as any[],
      'binding',
    ),
    useCardProps(splitboardboots, splitboardboots[0].families as any[], 'boot'),
    useCardProps(splitboards, splitboards[0].families as any[], 'splitboard'),
  ].flat()

  const filtersProps = prepareFilterProps(productsProps, 'allProducts')

  // TODO: extract image
  const heroSectionProps = {
    title: common.allProductsTitle,
    imageUrl: common.allProductsImage.responsiveImage.src,
  }

  return (
    <main className="relative min-h-screen bg-white">
      <SimpleHero {...heroSectionProps} />
      <ProductWithFilters
        filters={filtersProps}
        products={productsProps}
        prefilledFilters={
          searchParams.get('brand')
            ? ([
                { fieldName: 'brand', values: [searchParams.get('brand')] },
              ] as IPrefilledFilter[])
            : undefined
        }
      />
    </main>
  )
}

// learn more: https://fly.io/docs/reference/configuration/#services-http_checks
import type { LoaderArgs } from '@remix-run/node'

import { datoQuerySubscription } from '~/lib/datocms'

export const loader = async ({ request }: LoaderArgs) => {
  if (
    request.headers.get('x-webhook-secret') !==
    process.env.DATOCMS_WEBHOOK_SECRET
  ) {
    return new Response('Unauthorized', { status: 401 })
  }

  const fs = require('fs')

  const initialQuery = `#graphql
    query allBindings($first: IntType, $skip: IntType, $testedPreview: String) {
      bindings: allSplitboardBindings(first: $first, skip: $skip, filter: {testedPreview:{eq: $testedPreview}}) {
        testedPreview
        alpinism
        longHike
        funFreeride
        featHibackRigidity
        featUsageSpeed
        featStrapComfort
        levelAdvanced
        levelBeginner
        levelGrowing
        levelHigh
        
        categories{
          slug
        }
      }
      _allBindingsMeta {
        count
      }
    }`

  let skip = 0
  let count = 0
  let allBindings: any[] = []

  do {
    const results = await datoQuerySubscription({
      request,
      query: initialQuery,
      variables: { first: 100, skip, testedPreview: 'tested' },
    })
    allBindings = allBindings.concat(
      results.datoQuerySubscription.initialData.bindings,
    )
    count = results.datoQuerySubscription.initialData._allBindingsMeta.count
    skip += 100
  } while (skip < count)

  // calculate the average for each field
  // remap allskis with category.name as key
  const bindingsByCategory = allBindings.reduce((acc, binding) => {
    binding.categories.forEach((category: any) => {
      if (!acc[category.slug]) {
        acc[category.slug] = []
      }
      acc[category.slug].push(binding)
    })
    return acc
  }, {})

  //foreach category in bindingsByCategory calculate the average for each binding field in the category, save in a new object
  const bindingsByCategoryAverage = Object.keys(bindingsByCategory).reduce(
    (acc, category) => {
      const bindings = bindingsByCategory[category]
      const bindingAverage = bindings.reduce(
        (acc: any, binding: any) => {
          acc.alpinism += binding.alpinism
          acc.longHike += binding.longHike
          acc.funFreeride += binding.funFreeride
          acc.featHibackRigidity += binding.featHibackRigidity
          acc.featUsageSpeed += binding.featUsageSpeed
          acc.featStrapComfort += binding.featStrapComfort
          acc.levelAdvanced += binding.levelAdvanced
          acc.levelBeginner += binding.levelBeginner
          acc.levelGrowing += binding.levelGrowing
          acc.levelHigh += binding.levelHigh
          return acc
        },
        {
          alpinism: 0,
          longHike: 0,
          funFreeride: 0,
          featHibackRigidity: 0,
          featUsageSpeed: 0,
          featStrapComfort: 0,
          levelAdvanced: 0,
          levelBeginner: 0,
          levelGrowing: 0,
          levelHigh: 0,
        },
      )
      bindingAverage.alpinism = bindingAverage.alpinism / bindings.length
      bindingAverage.longHike = bindingAverage.longHike / bindings.length
      bindingAverage.funFreeride = bindingAverage.funFreeride / bindings.length
      bindingAverage.featHibackRigidity =
        bindingAverage.featHibackRigidity / bindings.length
      bindingAverage.featUsageSpeed =
        bindingAverage.featUsageSpeed / bindings.length
      bindingAverage.featStrapComfort =
        bindingAverage.featStrapComfort / bindings.length
      bindingAverage.levelAdvanced =
        bindingAverage.levelAdvanced / bindings.length
      bindingAverage.levelBeginner =
        bindingAverage.levelBeginner / bindings.length
      bindingAverage.levelGrowing =
        bindingAverage.levelGrowing / bindings.length
      bindingAverage.levelHigh = bindingAverage.levelHigh / bindings.length

      acc[category] = bindingAverage
      return acc
    },
    {} as any,
  )

  //round the average to the nearest integer
  Object.keys(bindingsByCategoryAverage).forEach((category) => {
    const bindingAverage = bindingsByCategoryAverage[category]
    bindingAverage.alpinism = Math.round(bindingAverage.alpinism)
    bindingAverage.longHike = Math.round(bindingAverage.longHike)
    bindingAverage.funFreeride = Math.round(bindingAverage.funFreeride)
    bindingAverage.featHibackRigidity = Math.round(
      bindingAverage.featHibackRigidity,
    )
    bindingAverage.featUsageSpeed = Math.round(bindingAverage.featUsageSpeed)
    bindingAverage.featStrapComfort = Math.round(
      bindingAverage.featStrapComfort,
    )
    bindingAverage.levelAdvanced = Math.round(bindingAverage.levelAdvanced)
    bindingAverage.levelBeginner = Math.round(bindingAverage.levelBeginner)
    bindingAverage.levelGrowing = Math.round(bindingAverage.levelGrowing)
    bindingAverage.levelHigh = Math.round(bindingAverage.levelHigh)
  })

  //save skisByCategoryAverage as JSON in /public/average.json
  const bindingssByCategoryAverageJSON = JSON.stringify(
    bindingsByCategoryAverage,
  )
  const path = `./public/data/average.splitboard-bindings.json`

  fs.writeFile(path, bindingssByCategoryAverageJSON, function (err: any) {
    if (err) {
      console.log(err)
    }
  })

  return bindingsByCategoryAverage
}

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
      bindings: allBindings(first: $first, skip: $skip, filter: {testedPreview:{eq: $testedPreview}}) {
        testedPreview
        dynafitInsertsReleaseGloves
        dynafitInsertsReleasePole
        dynafitInsertsStepin
        otherInsertsReleaseGloves
        otherInsertsReleasePole
        otherInsertsStepin
        
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

  console.log(allBindings)

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
          acc.dynafitInsertsReleaseGloves += binding.dynafitInsertsReleaseGloves
          acc.dynafitInsertsReleasePole += binding.dynafitInsertsReleasePole
          acc.dynafitInsertsStepin += binding.dynafitInsertsStepin
          acc.otherInsertsReleaseGloves += binding.otherInsertsReleaseGloves
          acc.otherInsertsReleasePole += binding.otherInsertsReleasePole
          acc.otherInsertsStepin += binding.otherInsertsStepin

          return acc
        },
        {
          dynafitInsertsReleaseGloves: 0,
          dynafitInsertsReleasePole: 0,
          dynafitInsertsStepin: 0,
          otherInsertsReleaseGloves: 0,
          otherInsertsReleasePole: 0,
          otherInsertsStepin: 0,
        },
      )
      bindingAverage.dynafitInsertsReleaseGloves =
        bindingAverage.dynafitInsertsReleaseGloves / bindings.length
      bindingAverage.dynafitInsertsReleasePole =
        bindingAverage.dynafitInsertsReleasePole / bindings.length
      bindingAverage.dynafitInsertsStepin =
        bindingAverage.dynafitInsertsStepin / bindings.length
      bindingAverage.otherInsertsReleaseGloves =
        bindingAverage.otherInsertsReleaseGloves / bindings.length
      bindingAverage.otherInsertsReleasePole =
        bindingAverage.otherInsertsReleasePole / bindings.length
      bindingAverage.otherInsertsStepin =
        bindingAverage.otherInsertsStepin / bindings.length

      acc[category] = bindingAverage
      return acc
    },
    {} as any,
  )

  //round the average to the nearest integer
  Object.keys(bindingsByCategoryAverage).forEach((category) => {
    const bindingAverage = bindingsByCategoryAverage[category]
    bindingAverage.dynafitInsertsReleaseGloves = Math.round(
      bindingAverage.dynafitInsertsReleaseGloves,
    )
    bindingAverage.dynafitInsertsReleasePole = Math.round(
      bindingAverage.dynafitInsertsReleasePole,
    )
    bindingAverage.dynafitInsertsStepin = Math.round(
      bindingAverage.dynafitInsertsStepin,
    )
    bindingAverage.otherInsertsReleaseGloves = Math.round(
      bindingAverage.otherInsertsReleaseGloves,
    )
    bindingAverage.otherInsertsReleasePole = Math.round(
      bindingAverage.otherInsertsReleasePole,
    )
    bindingAverage.otherInsertsStepin = Math.round(
      bindingAverage.otherInsertsStepin,
    )
  })

  //save skisByCategoryAverage as JSON in /public/average.json
  const bindingssByCategoryAverageJSON = JSON.stringify(
    bindingsByCategoryAverage,
  )
  const path = `./public/data/average.bindings.json`

  fs.writeFile(path, bindingssByCategoryAverageJSON, function (err: any) {
    if (err) {
      console.log(err)
    }
  })

  return bindingsByCategoryAverage
}

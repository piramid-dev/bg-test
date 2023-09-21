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
  //cast process.env.AVERAGE_CACHE_TIME to int

  const initialQuery = `#graphql
    query allSkis($first: IntType, $skip: IntType, $testedPreview: String) {
      skis: allSkis(first: $first, skip: $skip, filter: {testedPreview:{eq: $testedPreview}}) {
        testedPreview
        summit
        slope
        line
        snowCrust
        snowHard
        snowPowder
        snowWet
        levelAdvanced
        levelBeginner
        levelGrowing
        levelHigh
        categories{
          slug
        }
      }
      _allSkisMeta {
        count
      }
    }`

  let skip = 0
  let count = 0
  let allSkis: any[] = []

  do {
    const results = await datoQuerySubscription({
      request,
      query: initialQuery,
      variables: { first: 100, skip, testedPreview: 'tested' },
    })
    allSkis = allSkis.concat(results.datoQuerySubscription.initialData.skis)
    count = results.datoQuerySubscription.initialData._allSkisMeta.count
    skip += 100
  } while (skip < count)

  // calculate the average for each field
  // remap allskis with category.name as key
  const skisByCategory = allSkis.reduce((acc, ski) => {
    ski.categories.forEach((category: any) => {
      if (!acc[category.slug]) {
        acc[category.slug] = []
      }
      acc[category.slug].push(ski)
    })
    return acc
  }, {})

  //foreach category in skisByCategory calculate the average for each ski field in the category, save in a new object
  const skisByCategoryAverage = Object.keys(skisByCategory).reduce(
    (acc, category) => {
      const skis = skisByCategory[category]
      const skiAverage = skis.reduce(
        (acc: any, ski: any) => {
          acc.summit += ski.summit
          acc.slope += ski.slope
          acc.line += ski.line
          acc.snowCrust += ski.snowCrust
          acc.snowHard += ski.snowHard
          acc.snowPowder += ski.snowPowder
          acc.snowWet += ski.snowWet
          acc.levelAdvanced += ski.levelAdvanced
          acc.levelBeginner += ski.levelBeginner
          acc.levelGrowing += ski.levelGrowing
          acc.levelHigh += ski.levelHigh
          return acc
        },
        {
          summit: 0,
          slope: 0,
          line: 0,
          snowCrust: 0,
          snowHard: 0,
          snowPowder: 0,
          snowWet: 0,
          levelAdvanced: 0,
          levelBeginner: 0,
          levelGrowing: 0,
          levelHigh: 0,
        },
      )
      skiAverage.summit = skiAverage.summit / skis.length
      skiAverage.slope = skiAverage.slope / skis.length
      skiAverage.line = skiAverage.line / skis.length
      skiAverage.snowCrust = skiAverage.snowCrust / skis.length
      skiAverage.snowHard = skiAverage.snowHard / skis.length
      skiAverage.snowPowder = skiAverage.snowPowder / skis.length
      skiAverage.snowWet = skiAverage.snowWet / skis.length
      skiAverage.levelAdvanced = skiAverage.levelAdvanced / skis.length
      skiAverage.levelBeginner = skiAverage.levelBeginner / skis.length
      skiAverage.levelGrowing = skiAverage.levelGrowing / skis.length
      skiAverage.levelHigh = skiAverage.levelHigh / skis.length
      acc[category] = skiAverage
      return acc
    },
    {} as any,
  )

  //round the average to the nearest integer
  Object.keys(skisByCategoryAverage).forEach((category) => {
    const skiAverage = skisByCategoryAverage[category]
    skiAverage.summit = Math.round(skiAverage.summit)
    skiAverage.slope = Math.round(skiAverage.slope)
    skiAverage.line = Math.round(skiAverage.line)
    skiAverage.snowCrust = Math.round(skiAverage.snowCrust)
    skiAverage.snowHard = Math.round(skiAverage.snowHard)
    skiAverage.snowPowder = Math.round(skiAverage.snowPowder)
    skiAverage.snowWet = Math.round(skiAverage.snowWet)
    skiAverage.levelAdvanced = Math.round(skiAverage.levelAdvanced)
    skiAverage.levelBeginner = Math.round(skiAverage.levelBeginner)
    skiAverage.levelGrowing = Math.round(skiAverage.levelGrowing)
    skiAverage.levelHigh = Math.round(skiAverage.levelHigh)
  })

  //save skisByCategoryAverage as JSON in /public/average.json
  const skisByCategoryAverageJSON = JSON.stringify(skisByCategoryAverage)
  const path = `./public/data/average.skis.json`

  fs.writeFile(path, skisByCategoryAverageJSON, function (err: any) {
    if (err) {
      console.log(err)
    }
  })

  return skisByCategoryAverage
}

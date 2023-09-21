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
      splitboards: allSplitboards(first: $first, skip: $skip, filter: {testedPreview:{eq: $testedPreview}}) {
        testedPreview
        bigMountain
        funFreeride
        longHike
        steep
        levelAdvanced
        levelBeginner
        levelGrowing
        levelHigh
        categories{
          slug
        }
      }
      _allSplitboardsMeta {
        count
      }
    }`

  let skip = 0
  let count = 0
  let allSplitboards: any[] = []

  do {
    const results = await datoQuerySubscription({
      request,
      query: initialQuery,
      variables: { first: 100, skip, testedPreview: 'tested' },
    })
    allSplitboards = allSplitboards.concat(
      results.datoQuerySubscription.initialData.splitboards,
    )
    count = results.datoQuerySubscription.initialData._allSplitboardsMeta.count
    skip += 100
  } while (skip < count)

  // calculate the average for each field
  // remap allskis with category.name as key
  const splitboardsByCategory = allSplitboards.reduce((acc, split) => {
    split.categories.forEach((category: any) => {
      if (!acc[category.slug]) {
        acc[category.slug] = []
      }
      acc[category.slug].push(split)
    })
    return acc
  }, {})

  //foreach category in skisByCategory calculate the average for each ski field in the category, save in a new object
  const splitboardsByCategoryAverage = Object.keys(
    splitboardsByCategory,
  ).reduce((acc, category) => {
    const splitboards = splitboardsByCategory[category]
    const splitboardAverage = splitboards.reduce(
      (acc: any, split: any) => {
        acc.bigMountain += split.bigMountain
        acc.funFreeride += split.funFreeride
        acc.longHike += split.longHike
        acc.steep += split.steep
        acc.levelAdvanced += split.levelAdvanced
        acc.levelBeginner += split.levelBeginner
        acc.levelGrowing += split.levelGrowing
        acc.levelHigh += split.levelHigh
        return acc
      },
      {
        bigMountain: 0,
        funFreeride: 0,
        longHike: 0,
        steep: 0,
        levelAdvanced: 0,
        levelBeginner: 0,
        levelGrowing: 0,
        levelHigh: 0,
      },
    )
    splitboardAverage.bigMountain =
      splitboardAverage.bigMountain / splitboards.length
    splitboardAverage.funFreeride =
      splitboardAverage.funFreeride / splitboards.length
    splitboardAverage.longHike = splitboardAverage.longHike / splitboards.length
    splitboardAverage.steep = splitboardAverage.steep / splitboards.length
    splitboardAverage.levelAdvanced =
      splitboardAverage.levelAdvanced / splitboards.length
    splitboardAverage.levelBeginner =
      splitboardAverage.levelBeginner / splitboards.length
    splitboardAverage.levelGrowing =
      splitboardAverage.levelGrowing / splitboards.length
    splitboardAverage.levelHigh =
      splitboardAverage.levelHigh / splitboards.length
    acc[category] = splitboardAverage
    return acc
  }, {} as any)

  //round the average to the nearest integer
  Object.keys(splitboardsByCategoryAverage).forEach((category) => {
    const splitboardAverage = splitboardsByCategoryAverage[category]
    splitboardAverage.bigMountain = Math.round(splitboardAverage.bigMountain)
    splitboardAverage.funFreeride = Math.round(splitboardAverage.funFreeride)
    splitboardAverage.longHike = Math.round(splitboardAverage.longHike)
    splitboardAverage.steep = Math.round(splitboardAverage.steep)
    splitboardAverage.levelAdvanced = Math.round(
      splitboardAverage.levelAdvanced,
    )
    splitboardAverage.levelBeginner = Math.round(
      splitboardAverage.levelBeginner,
    )
    splitboardAverage.levelGrowing = Math.round(splitboardAverage.levelGrowing)
    splitboardAverage.levelHigh = Math.round(splitboardAverage.levelHigh)
  })

  //save skisByCategoryAverage as JSON in /public/average.json
  const splitboardsByCategoryAverageJSON = JSON.stringify(
    splitboardsByCategoryAverage,
  )
  const path = `./public/data/average.splitboards.json`

  fs.writeFile(path, splitboardsByCategoryAverageJSON, function (err: any) {
    if (err) {
      console.log(err)
    }
  })

  return splitboardsByCategoryAverage
}

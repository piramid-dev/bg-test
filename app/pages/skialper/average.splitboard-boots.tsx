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
    query allBoots($first: IntType, $skip: IntType, $testedPreview: String) {
      boots: allSplitboardBoots(first: $first, skip: $skip, filter: {testedPreview:{eq: $testedPreview}}) {
        testedPreview
        featComfort
        featRigidity
        featSoleFit
        featSupportLateral
        levelAdvanced
        levelBeginner
        levelGrowing
        levelHigh
        alpinism
        longHike
        funFreeride
        categories{
          slug
        }
      }
      _allBootsMeta {
        count
      }
    }`

  let skip = 0
  let count = 0
  let allBoots: any[] = []

  do {
    const results = await datoQuerySubscription({
      request,
      query: initialQuery,
      variables: { first: 100, skip, testedPreview: 'tested' },
    })
    allBoots = allBoots.concat(results.datoQuerySubscription.initialData.boots)
    count = results.datoQuerySubscription.initialData._allBootsMeta.count
    skip += 100
  } while (skip < count)

  // calculate the average for each field
  // remap allskis with category.name as key
  const bootsByCategory = allBoots.reduce((acc, boot) => {
    boot.categories.forEach((category: any) => {
      if (!acc[category.slug]) {
        acc[category.slug] = []
      }
      acc[category.slug].push(boot)
    })
    return acc
  }, {})

  //foreach category in bootsByCategory calculate the average for each boot field in the category, save in a new object
  const bootsByCategoryAverage = Object.keys(bootsByCategory).reduce(
    (acc, category) => {
      const boots = bootsByCategory[category]
      const bootAverage = boots.reduce(
        (acc: any, boot: any) => {
          acc.featComfort += boot.featComfort
          acc.featRigidity += boot.featRigidity
          acc.featSoleFit += boot.featSoleFit
          acc.featSupportLateral += boot.featSupportLateral
          acc.alpinism += boot.alpinism
          acc.longHike += boot.longHike
          acc.funFreeride += boot.funFreeride
          acc.levelAdvanced += boot.levelAdvanced
          acc.levelBeginner += boot.levelBeginner
          acc.levelGrowing += boot.levelGrowing
          acc.levelHigh += boot.levelHigh

          return acc
        },
        {
          featComfort: 0,
          featRigidity: 0,
          featSoleFit: 0,
          featSupportLateral: 0,
          alpinism: 0,
          longHike: 0,
          funFreeride: 0,
          levelAdvanced: 0,
          levelBeginner: 0,
          levelGrowing: 0,
          levelHigh: 0,
        },
      )
      bootAverage.featComfort = bootAverage.featComfort / boots.length
      bootAverage.featRigidity = bootAverage.featRigidity / boots.length
      bootAverage.featSoleFit = bootAverage.featSoleFit / boots.length
      bootAverage.featSupportLateral =
        bootAverage.featSupportLateral / boots.length
      bootAverage.alpinism = bootAverage.alpinism / boots.length
      bootAverage.longHike = bootAverage.longHike / boots.length
      bootAverage.funFreeride = bootAverage.funFreeride / boots.length
      bootAverage.levelAdvanced = bootAverage.levelAdvanced / boots.length
      bootAverage.levelBeginner = bootAverage.levelBeginner / boots.length
      bootAverage.levelGrowing = bootAverage.levelGrowing / boots.length
      bootAverage.levelHigh = bootAverage.levelHigh / boots.length

      acc[category] = bootAverage
      return acc
    },
    {} as any,
  )

  //round the average to the nearest integer
  Object.keys(bootsByCategoryAverage).forEach((category) => {
    const bootAverage = bootsByCategoryAverage[category]
    bootAverage.featComfort = Math.round(bootAverage.featComfort)
    bootAverage.featRigidity = Math.round(bootAverage.featRigidity)
    bootAverage.featSoleFit = Math.round(bootAverage.featSoleFit)
    bootAverage.featSupportLateral = Math.round(bootAverage.featSupportLateral)
    bootAverage.alpinism = Math.round(bootAverage.alpinism)
    bootAverage.longHike = Math.round(bootAverage.longHike)
    bootAverage.funFreeride = Math.round(bootAverage.funFreeride)
    bootAverage.levelAdvanced = Math.round(bootAverage.levelAdvanced)
    bootAverage.levelBeginner = Math.round(bootAverage.levelBeginner)
    bootAverage.levelGrowing = Math.round(bootAverage.levelGrowing)
    bootAverage.levelHigh = Math.round(bootAverage.levelHigh)
  })

  //save skisByCategoryAverage as JSON in /public/average.json
  const bootssByCategoryAverageJSON = JSON.stringify(bootsByCategoryAverage)
  const path = `./public/data/average.splitboard-boots.json`

  fs.writeFile(path, bootssByCategoryAverageJSON, function (err: any) {
    if (err) {
      console.log(err)
    }
  })

  return bootsByCategoryAverage
}

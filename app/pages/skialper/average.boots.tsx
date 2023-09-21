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
      boots: allBoots(first: $first, skip: $skip, filter: {testedPreview:{eq: $testedPreview}}) {
        testedPreview
        performanceClimbing
        performanceSkiing
        performanceWalk
        performanceSkisAscent
        labBootfitting
        labBuckles
        labSkiwalk
        labCramponability
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
          acc.performanceClimbing += boot.performanceClimbing
          acc.performanceSkiing += boot.performanceSkiing
          acc.performanceWalk += boot.performanceWalk
          acc.performanceSkisAscent += boot.performanceSkisAscent
          acc.labBootfitting += boot.labBootfitting
          acc.labBuckles += boot.labBuckles
          acc.labSkiwalk += boot.labSkiwalk
          acc.labCramponability += boot.labCramponability

          return acc
        },
        {
          performanceClimbing: 0,
          performanceSkiing: 0,
          performanceWalk: 0,
          performanceSkisAscent: 0,
          labBootfitting: 0,
          labBuckles: 0,
          labSkiwalk: 0,
          labCramponability: 0,
        },
      )
      bootAverage.performanceClimbing =
        bootAverage.performanceClimbing / boots.length
      bootAverage.performanceSkiing =
        bootAverage.performanceSkiing / boots.length
      bootAverage.performanceWalk = bootAverage.performanceWalk / boots.length
      bootAverage.performanceSkisAscent =
        bootAverage.performanceSkisAscent / boots.length
      bootAverage.labBootfitting = bootAverage.labBootfitting / boots.length
      bootAverage.labBuckles = bootAverage.labBuckles / boots.length
      bootAverage.labSkiwalk = bootAverage.labSkiwalk / boots.length
      bootAverage.labCramponability =
        bootAverage.labCramponability / boots.length

      acc[category] = bootAverage
      return acc
    },
    {} as any,
  )

  //round the average to the nearest integer
  Object.keys(bootsByCategoryAverage).forEach((category) => {
    const bootAverage = bootsByCategoryAverage[category]
    bootAverage.performanceClimbing = Math.round(
      bootAverage.performanceClimbing, // @ts-ignore
    )
    bootAverage.performanceSkiing = Math.round(bootAverage.performanceSkiing)
    bootAverage.performanceWalk = Math.round(bootAverage.performanceWalk)
    bootAverage.performanceSkisAscent = Math.round(
      bootAverage.performanceSkisAscent,
    )
    bootAverage.labBootfitting = Math.round(bootAverage.labBootfitting)
    bootAverage.labBuckles = Math.round(bootAverage.labBuckles)
    bootAverage.labSkiwalk = Math.round(bootAverage.labSkiwalk)
    bootAverage.labCramponability = Math.round(bootAverage.labCramponability)
  })

  //save skisByCategoryAverage as JSON in /public/average.json
  const bootssByCategoryAverageJSON = JSON.stringify(bootsByCategoryAverage)
  const path = `./public/data/average.boots.json`

  fs.writeFile(path, bootssByCategoryAverageJSON, function (err: any) {
    if (err) {
      console.log(err)
    }
  })

  return bootsByCategoryAverage
}

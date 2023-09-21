import { redirect, type LoaderArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { Plus } from 'phosphor-react'
import { useQuerySubscription } from 'react-datocms'
import { useTranslation } from 'react-i18next'

import Button from '~/components/Atoms/Button'
import CardNumber from '~/components/Organisms/CardNumber/CardNumber'
import CardProduct from '~/components/Organisms/CardProduct/CardProduct'
import CardRangeEvaluation from '~/components/Organisms/CardRangeEvaluation'
import { useCardProps } from '~/hooks/useCardProps'
import { datoQuerySubscription, loadFragments } from '~/lib/datocms'
import { ResponsiveImageFragmentQuery } from '~/lib/generated'
import { calculateWeightedLevel } from '~/lib/number.utils'

export const loader = async ({ request, params }: LoaderArgs) => {
  const url = new URL(request.url)
  const productId = url.searchParams.get('productId')

  if (!productId) {
    return redirect('/')
  }

  const [sciId, bootId, bindingId] = productId.split(',')

  const fragments = loadFragments([ResponsiveImageFragmentQuery])

  const initialQuery = `#graphql 
    query($sciId: ItemId!, $bootId: ItemId!, $bindingId: ItemId!) {
      ski: allSkis(filter: {id: {eq: $sciId}}) {
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
          name
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
        sizeMin
        sizeMax
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
    boots: allBoots(filter: {id: {eq: $bootId}}) {
        id
        name
        slug
        categories {
            name
            slug
        }
        families {
            name
            slug
        }
        skierTypes{ name }
        performanceClimbing
        performanceWalk
        lastMin
        lastMax
        linerMaterials { name }
        shellMaterials { name }
        cuffRom
        leverNumber
        labCramponability
        performanceSkisAscent
        performanceSkiing
        weightDeclared
        colors { name rgb { hex } order }
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
        testedPreview
        media {
        webImage {
            responsiveImage(
            imgixParams: { fm: jpg, fit: crop, w: 1000, h: 1000, fpY:1}
                ) {
                ...responsiveImage
                }
            }
        }
    }

    bindings: allBindings(filter: {id: {eq: $bindingId}}) {
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
        colors { name rgb { hex } order }
        types { name }
        releaseRangeMin
        releaseRangeMax
        releaseRangeAdjustable
        skiBrakeOptional
        drop
        walkingModes
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
        weightDeclared
        categories { name }
        skierTypes { name }
        colors { name rgb { hex } order }
        media {
        webImage {
            responsiveImage(
                imgixParams: { fm: jpg, fit: crop, w: 1000, h: 1000, fpY:0 }
                ) {
                ...responsiveImage
                }
            }
        }
    }
      }
      ${fragments}
  `

  const variables = {
    sciId,
    bootId,
    bindingId,
  }

  const datoQuerySubSplitboard = await datoQuerySubscription({
    request,
    query: initialQuery,
    variables, // The number of items passed to the query
  })

  return {
    sharePrompterData: datoQuerySubSplitboard.datoQuerySubscription,
  }
}

export default function SharePrompter() {
  const { t } = useTranslation()

  const { sharePrompterData } = useLoaderData()
  const { data } = useQuerySubscription(sharePrompterData)

  const ski = useCardProps(data.ski, ['skis'] as any[], 'ski')[0]
  const boot = useCardProps(data.boots, ['boots'] as any[], 'boot')[0]
  const binding = useCardProps(
    data.bindings,
    ['bindings'] as any[],
    'binding',
  )[0]

  return (
    <main className="bg-black w-screen min-h-screen px-4 lg:px-12 lg:pb-12">
      <section className="pt-16 pb-6">
        <h3 className="font-sans h3 text-white mb-4 max-lg:text-center">
          {t('share-prompter.title')}
        </h3>
        <p className="font-sans body-m text-white/70 max-lg:text-center">
          {t('share-prompter.subtitle')}
        </p>
      </section>
      <section className="lg:pb-12 mt-10">
        <div className="grid grid-rows-1 h-full grid-cols-1 lg:grid-rows-[auto_1fr] lg:grid-cols-[2fr_1fr] gap-x-20 text-white">
          <div className="max-lg:mx-16 flex flex-col lg:flex-row mb-3 ">
            <div className="shrink-0 flex-1">
              <CardProduct {...ski} containerClass="!h-auto mb-16" />
              <div className="font-sans body-m text-white/70 text-center">
                Ti consigliamo uno sci fra {ski.sizeMin} e {ski.sizeMax} cm
              </div>
            </div>
            <div className="w-8 max-lg:w-full max-lg:py-6 shrink-0 flex-col lg:flex-row flex items-center justify-center">
              <Plus className="w-8 h-8 text-white/40" />
            </div>
            <div className="shrink-0 flex-1">
              <CardProduct {...boot} containerClass="!h-auto mb-16" />
              <div className="font-sans body-m text-white/70 text-center">
                Consigliamo sempre di provare da un negoziante di fiducia.
              </div>
              <div className="font-sans body-m text-white cursor-pointer mt-4 text-center">
                Come scegliere lo scarpone
              </div>
            </div>
            <div className="w-8 max-lg:w-full max-lg:py-6 shrink-0 flex-col lg:flex-row flex items-center justify-center">
              <Plus className="w-8 h-8 text-white/40" />
            </div>
            <div className="shrink-0 flex-1">
              <CardProduct {...binding} containerClass="!h-auto mb-16" />
              <div />
            </div>
          </div>
          <div className="[&>*]:lg:mb-4 [&>*]:mb-4 [&>*:last-child]:mb-0 pb-4">
            <h3 className="font-sans h3 text-white lg:hidden py-6 mb-4">
              In sintesi
            </h3>
            <CardRangeEvaluation
              title="Sci consigliato per..."
              variant="step"
              labels={[
                'Principianti',
                'In crescita',
                'Avanzato',
                'Alto Livello',
              ]}
              value={calculateWeightedLevel(
                ski.levelBeginner,
                ski.levelGrowing,
                ski.levelAdvanced,
                ski.levelHigh,
              )}
              min={0}
              max={10}
            />
            <CardNumber
              title="Costo set"
              value={ski.priceEur + boot.priceEur + binding.priceEur}
              unit="€"
            />
            <CardNumber
              title="Peso totale"
              value={
                ski.weightDeclared +
                boot.weightDeclared +
                binding.weightDeclared
              }
              unit="grammi"
            />
            <div className="max-lg:text-center">
              <div className="font-sans body-l text-white/70 mb-5 mt-32">
                {t('share-prompter.description')}
              </div>
              <Button
                variant="secondary"
                label={t('share-prompter.cta')}
                icon="ArrowRight"
                containerClassName="w-fit"
                to="/prompter"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

import { Info } from '@phosphor-icons/react'
import { redirect, type LoaderArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { useQuerySubscription } from 'react-datocms'

import Button from '~/components/Atoms/Button/Button'
import ButtonSuper from '~/components/Atoms/ButtonSuper/ButtonSuper'
import CardRangeEvaluation from '~/components/Organisms/CardRangeEvaluation/CardRangeEvaluation'
import { useCardProps } from '~/hooks/useCardProps'
import { datoQuerySubscription, loadFragments } from '~/lib/datocms'
import { ResponsiveImageFragmentQuery } from '~/lib/generated'
import ProductCarouselColumn from '~/components/Organisms/ProductCarouselColumn/ProductCarouselColumn'
import { calculateWeightedLevel } from '~/lib/number.utils'
import { getUserEmail } from '~/session.server'

export const loader = async ({ request }: LoaderArgs) => {
  const fragments = loadFragments([ResponsiveImageFragmentQuery])

  const userEmail = await getUserEmail(request)

  if (!userEmail) return redirect('/join')

  // Get dato user by email
  const userQuery = `#graphql
    query($email: String){
      user: user(filter: { email: { eq: $email } }) {
        id
      }
   }
  `
  const userQuerySub = await datoQuerySubscription({
    request,
    query: userQuery,
    variables: { email: userEmail },
  })

  const user = userQuerySub.datoQuerySubscription.initialData.user

  // Get latest prompter from user and its answers
  const prompterQuery = `#graphql
    query($formType: String, $userId: ItemId){
      allForms(filter: { formType: {eq: $formType}, user: { eq: $userId } }) {
        answers
        id
      }
   }
  `
  const prompterQuerySub = await datoQuerySubscription({
    request,
    query: prompterQuery,
    variables: { userId: user?.id, formType: 'prompter' },
  })

  const answers =
    prompterQuerySub.datoQuerySubscription.initialData.allForms[0].answers

  // Get categories and skier_types
  const catQuery = `#graphql
    query($locale: SiteLocale){
      allCategories(locale: $locale) {
        name
        id
      }
      allSkiers(locale: $locale){
        name
        id
      }
      allAttitudes(locale: $locale){
        name
        id
      }
   }
  `
  const catQuerySub = await datoQuerySubscription({
    request,
    query: catQuery,
    variables: { locale: 'en' },
  })

  const categories = catQuerySub.datoQuerySubscription.initialData.allCategories
  const skiers = catQuerySub.datoQuerySubscription.initialData.allSkiers
  const attitudes = catQuerySub.datoQuerySubscription.initialData.allAttitudes

  type catArrayType = {
    name: string
    id: string
  }

  const getCategoryId = (label: string, catArray: Array<catArrayType>) => {
    const cat = catArray.find(
      (c) => c.name.toLowerCase() === label.toLowerCase(),
    )
    return cat?.id || ''
  }

  type FilterTypes = {
    category: Array<string>
    skierTypes: Array<string>
    attitude: Array<string>
    weight: number
    waistWidthMax?: number
    waistWidthMin?: number
    sizeMin?: number
    sizeMax?: number
  }

  // Ski filters
  // category, attitude, weightDeclared, level*, weightDeclared, waistWidthDeclared, skierTypes, size_min, size_max
  const skiFilters: FilterTypes = {
    category: [],
    skierTypes: [],
    attitude: [],
    weight: 10000,
    waistWidthMax: 10000,
    waistWidthMin: 0,
    sizeMin: 0,
    sizeMax: 0,
  }

  // Boot filters
  // category, weightDeclared, skierTypes
  const bootFilters: FilterTypes = {
    category: [],
    skierTypes: [],
    attitude: [],
    weight: 10000,
  }

  // Binding filters
  // category, weightDeclared
  const bindingFilters: FilterTypes = {
    category: [],
    skierTypes: [],
    attitude: [],
    weight: 10000,
  }

  // Your idea of mountain
  let prompterCategory: Array<string> = []
  let sliderValueCategory: number = 0

  switch (answers.user_pourpouse.idx) {
    case 0:
      prompterCategory = ['tour']
      skiFilters.category = prompterCategory
      bootFilters.category = prompterCategory
      bindingFilters.category = prompterCategory
      sliderValueCategory = 30
      skiFilters.weight = 1350
      break
    case 1:
      prompterCategory = ['light']
      skiFilters.category = prompterCategory
      bootFilters.category = prompterCategory
      bindingFilters.category = prompterCategory
      sliderValueCategory = 10
      skiFilters.weight = 1100
      break
    case 2:
      prompterCategory = ['light']
      skiFilters.category = [] // All the categories for skis
      skiFilters.attitude = ['climber']
      bootFilters.category = prompterCategory
      bindingFilters.category = prompterCategory
      sliderValueCategory = 10
      break
    case 3:
      prompterCategory = ['tour', 'free']
      skiFilters.category = prompterCategory
      bootFilters.category = prompterCategory
      bindingFilters.category = prompterCategory
      skiFilters.weight = 1350
      skiFilters.waistWidthMax = 105 // < 105
      skiFilters.waistWidthMin = 0
      sliderValueCategory = 40
      break
    case 4:
      prompterCategory = ['free']
      skiFilters.category = prompterCategory
      bootFilters.category = prompterCategory
      bindingFilters.category = prompterCategory
      sliderValueCategory = 50
      break
  }

  // // Experience
  let levelBeginner: number = 0
  let levelGrowing: number = 0
  let levelAdvanced: number = 0
  let levelHigh: number = 0
  let expertise: number = 0
  const LEVEL_MIN = 8

  switch (answers.user_experience.idx) {
    case 0:
      levelBeginner = LEVEL_MIN
      expertise = 1
      break
    case 1:
      levelGrowing = LEVEL_MIN
      expertise = 2
      break
    case 2:
      levelHigh = LEVEL_MIN
      expertise = 3
      break
    case 3:
      levelAdvanced = LEVEL_MIN
      expertise = 4
      break
  }

  // Company
  switch (answers.user_group_type.idx) {
    case 0:
      skiFilters.weight = 1350
      skiFilters.waistWidthMax = 90 // < 90
      skiFilters.waistWidthMin = 0
      break
    case 1:
      // Friends - no filters setup
      break
    case 2:
      skiFilters.weight = 1200
      bootFilters.weight = 1250
      bindingFilters.weight = 350
      break
    case 3:
      skiFilters.waistWidthMax = 10000 // to avoid max waist width filter
      skiFilters.waistWidthMin = 90 // < 90
      skiFilters.weight = 1200
      skiFilters.attitude = []
      bootFilters.weight = 1250
      bindingFilters.weight = 350
      break
  }

  // Weight
  const userWeight: number = answers.user_weight
  const USER_WEIGHT: number = 60

  // Gender
  let prompterGender: Array<string> = ['unisex']

  switch (answers.user_genre.idx) {
    case 0:
      prompterGender = ['unisex']
      if (userWeight < USER_WEIGHT) {
        prompterGender = ['unisex', 'lady']
      }
      skiFilters.skierTypes = prompterGender
      bootFilters.skierTypes = prompterGender
      break
    case 1:
      prompterGender = ['lady']
      if (userWeight > USER_WEIGHT) {
        prompterGender = ['unisex', 'lady']
      }
      skiFilters.skierTypes = prompterGender
      bootFilters.skierTypes = prompterGender
      break
    case 2:
      prompterGender = ['lady']
      if (userWeight > USER_WEIGHT) {
        prompterGender = ['unisex', 'lady']
      }
      skiFilters.skierTypes = prompterGender
      bootFilters.skierTypes = prompterGender
      break
  }

  // Age
  switch (answers.user_age.idx) {
    case 0:
      // Kid
      break
    case 4:
      // Old - 66-90
      levelBeginner = LEVEL_MIN
      skiFilters.weight = 1350
      break
  }

  // Height
  const userHeight: number = answers.user_height

  switch (expertise) {
    default:
      // Answer 1 or 2
      skiFilters.sizeMin = userHeight + 5 // size_min < user_height + 5, size_max > user_height + 5
      skiFilters.sizeMax = userHeight + 0
      break
    case 2:
      skiFilters.sizeMin = userHeight + 10
      skiFilters.sizeMax = userHeight + 5
      break
    case 3:
      skiFilters.sizeMin = userHeight + 20
      skiFilters.sizeMax = userHeight + 10
      break
  }

  // Categories types
  skiFilters.category = skiFilters.category.map((c) => {
    return getCategoryId(c, categories)
  })
  bootFilters.category = bootFilters.category.map((c) => {
    return getCategoryId(c, categories)
  })
  bindingFilters.category = bindingFilters.category.map((c) => {
    return getCategoryId(c, categories)
  })
  // Skier types
  skiFilters.skierTypes = skiFilters.skierTypes.map((c) => {
    return getCategoryId(c, skiers)
  })
  bootFilters.skierTypes = bootFilters.skierTypes.map((c) => {
    return getCategoryId(c, skiers)
  })
  // Attitudes
  skiFilters.attitude = skiFilters.attitude.map((c) => {
    return getCategoryId(c, attitudes)
  })

  const initialQuery = `#graphql 
    query(
      $skiCategory: [ItemId],
      $skiAttitude: [ItemId],
      $skiSkierTypes: [ItemId],
      $skiWeight: IntType,
      $waistWidthMax: FloatType,
      $waistWidthMin: FloatType,
      $levelBeginner: IntType,
      $levelGrowing: IntType,
      $levelAdvanced: IntType,
      $levelHigh: IntType,
      $sizeMin: FloatType,
      $sizeMax: FloatType,
      $bootCategory: [ItemId],
      $bootWeightDeclared: IntType,
      $bootSkier: [ItemId],
      $bindingCategory: [ItemId],
      $bindingWeightDeclared: IntType,
    ) {
      ski: allSkis(filter: {
        categories: {anyIn: $skiCategory},
        attitudes: {anyIn: $skiAttitude},
        skierTypes: {anyIn: $skiSkierTypes},
        weightDeclared: {lt: $skiWeight},
        waistWidthDeclared: {lt: $waistWidthMax, gt: $waistWidthMin},
        levelBeginner: {gt: $levelBeginner},
        levelGrowing: {gt: $levelGrowing},
        levelAdvanced: {gt: $levelAdvanced},
        levelHigh: {gt: $levelHigh},
        OR: [
          { sizeMin: {lt: $sizeMin}},
          { sizeMax: {gt: $sizeMax}}
        ]
      }){
        id
        name
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
    boots: allBoots(filter: {
      categories: {anyIn: $bootCategory},
      weightDeclared: {lt: $bootWeightDeclared},
      skierTypes: {anyIn: $bootSkier}
    }){
      id
      name
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
    bindings:allBindings(filter: {
      categories: {anyIn: $bindingCategory},
      weightDeclared: {lt: $bindingWeightDeclared},
    }){
      id
      name
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

  const datoQuery = await datoQuerySubscription({
    request,
    query: initialQuery,
    variables: {
      skiCategory: skiFilters.category,
      skiAttitude: skiFilters.attitude,
      skiSkierTypes: skiFilters.skierTypes,
      skiWeight: skiFilters.weight,
      waistWidthMax: skiFilters.waistWidthMax,
      waistWidthMin: skiFilters.waistWidthMin,
      levelBeginner,
      levelGrowing,
      levelAdvanced,
      levelHigh,
      sizeMin: skiFilters.sizeMin,
      sizeMax: skiFilters.sizeMax,
      bootCategory: bootFilters.category,
      bootWeightDeclared: bootFilters.weight,
      bootSkier: bootFilters.skierTypes,
      bindingCategory: bindingFilters.category,
      bindingWeightDeclared: bindingFilters.weight,
    },
  })

  return {
    prompterData: datoQuery.datoQuerySubscription,
    sliderValueCategory,
  }
}

const ShareBlock = ({ skiId, bootId, bindingId, customClass }: any) => {
  const generateShareLink = () => {
    navigator.clipboard.writeText(
      `${window.location.origin}/share/prompter?productId=${skiId},${bootId},${bindingId}`,
    )
  }

  return (
    <div
      className={classNames({
        [customClass]: true,
      })}
    >
      <div className="font-sans body-m text-white/70 mb-5">
        Chiedi un parere a un amico su questa configurazione
      </div>
      <Button
        variant="secondary"
        label="Condividi"
        icon="ShareNetwork"
        containerClassName="w-fit"
        onClick={generateShareLink}
      />
    </div>
  )
}

const SetItemProgress = ({ position, length }: any) => (
  <div className="grow flex items-center justify-center">
    <div className="relative h-[1px] w-20 bg-white">
      <div
        className="absolute top-1/2 h-[3px] -translate-y-1/2  rounded-xl bg-white transition-all duration-300"
        style={{
          width: `${100 / length}%`,
          left: `${(position / length) * 100}%`,
        }}
      />
    </div>
  </div>
)

export default function Prompter() {
  const { prompterData, sliderValueCategory } = useLoaderData()
  const { data } = useQuerySubscription(prompterData)

  const [currentSetSki, setCurrentSetSki] = useState(0)
  const [currentSetBoots, setCurrentSetBoots] = useState(0)
  const [currentSetBindings, setCurrentSetBindings] = useState(0)

  const [weightedLevel, setWeightedLevel] = useState(0)

  const ski = useCardProps(data.ski, ['skis'] as any[], 'ski')
  const boots = useCardProps(data.boots, ['boots'] as any[], 'boot')
  const bindings = useCardProps(data.bindings, ['bindings'] as any[], 'binding')

  const [setPrice, setSetPrice] = useState(0)
  const [setWeight, setSetWeight] = useState(0)

  const minSetPrice =
    Math.min(...ski.map((s: any) => s.priceEur)) +
    Math.min(...boots.map((b: any) => b.priceEur)) +
    Math.min(...bindings.map((b: any) => b.priceEur))

  const maxSetPrice =
    Math.max(...ski.map((s: any) => s.priceEur)) +
    Math.max(...boots.map((b: any) => b.priceEur)) +
    Math.max(...bindings.map((b: any) => b.priceEur))

  const minSetWeight =
    Math.min(...ski.map((s: any) => s.weightDeclared)) +
    Math.min(...boots.map((b: any) => b.weightDeclared)) +
    Math.min(...bindings.map((b: any) => b.weightDeclared))

  const maxSetWeight =
    Math.max(...ski.map((s: any) => s.weightDeclared)) +
    Math.max(...boots.map((b: any) => b.weightDeclared)) +
    Math.max(...bindings.map((b: any) => b.weightDeclared))

  useEffect(() => {
    // WEIGHT LEVEL
    const { levelBeginner, levelGrowing, levelAdvanced, levelHigh } =
      ski[currentSetSki]

    const _weightedLevel = calculateWeightedLevel(
      levelBeginner,
      levelGrowing,
      levelAdvanced,
      levelHigh,
    )

    setWeightedLevel(_weightedLevel)

    // PRICE
    const _setPrice =
      ski[currentSetSki].priceEur +
      boots[currentSetBoots].priceEur +
      bindings[currentSetBindings].priceEur

    setSetPrice(_setPrice)

    // WEIGHT
    const _setWeight =
      ski[currentSetSki].weightDeclared +
      boots[currentSetBoots].weightDeclared +
      bindings[currentSetBindings].weightDeclared

    setSetWeight(_setWeight)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSetSki, currentSetBoots, currentSetBindings])

  const props = {
    firstEvaluation: {
      title: 'Lo stile prima di tutto',
      subtitle: 'Lo scialpinista che è in te predilige attrezzatura...',
      variant: 'step' as any,
      labels: ['Light', 'Tour', 'Free'],
      value: sliderValueCategory,
      min: 0,
      max: 60,
    },
  }

  return (
    <main className="bg-black">
      <section className="min-h-screen lg:h-screen w-screen flex flex-col relative z-20">
        <div
          className="grow relative bg-center h-screen w-screen bg-no-repeat"
          style={{
            backgroundImage: 'url(https://picsum.photos/id/113/1920/1080)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-overlay-to-b lg:bg-gradient-overlay-to-r w-full h-full z-10"></div>
        </div>
        <div className="lg:absolute lg:inset-0 h-fit z-40 w-full max-lg:mt-[-60vh] lg:h-full lg:pb-20">
          <div className="w-full relative lg:h-full lg:grid flex flex-col lg:grid-cols-[2fr_1fr] gap-y-9 lg:grid-rows-[1fr_auto] p-4 lg:pl-12 lg:py-16  z-40">
            <h2 className="font-sans h2 lg:mt-auto text-black order-1">
              Pront* <br />a pellare?
            </h2>
            <div className="lg:mr-32 mt-auto  lg:order-2 order-3">
              <CardRangeEvaluation {...props.firstEvaluation} />
              <div>
                <h4 className="font-sans h4 text-white/70 mt-12">
                  Sciatori prima di tutto
                </h4>
                <p className="font-sans body-s text-white/70 mt-2.5">
                  Tour, per chi mette il piacere sciistico davanti all’ingaggio
                  alpinistico, che preferisce un pendio innevato ad ampio
                  respiro rispetto a una vetta o a una foto vicino alla croce ,
                  che cerca prima di tutto la bella neve, possibilmente lontano
                  da tracce battute, rispetto agli itinerari classici più
                  frequentati.
                </p>
              </div>
            </div>
            <div className="h-fit flex flex-row max-lg:justify-between items-center gap-5 lg:order-3 order-2">
              <div className="font-sans body-l text-black lg:text-right">
                Non sei convinto <br />
                del risultato?
              </div>
              <div>
                <Button
                  label="Rifai il test"
                  iconPos="left"
                  icon="MagicWand"
                  variant="secondary"
                  to="/surveys/prompter"
                />
              </div>
            </div>
            <div className="h-fit order-4">
              <Button
                label="Attrezzatura Tour"
                iconPos="left"
                icon="ArrowRight"
              />
            </div>
          </div>
        </div>
        <h3 className="font-sans h3 text-white mt-10 mx-4 lg:mx-12 mb-2 max-lg:text-center">
          Con queste combo vai a bomba
        </h3>
      </section>
      <section className="w-screen min-h-screen px-4 lg:px-12 lg:pb-12">
        <div className="pt-2 font-sans body-l text-white/70 mb-13 max-lg:text-center">
          Prova le diverse combinazioni per trovare quella ideale per te
        </div>
        <div className="grid grid-rows-1 h-full grid-cols-1 lg:grid-rows-[auto_1fr] lg:grid-cols-[2fr_1fr] gap-x-20 text-white">
          <div className="mb-3 max-lg:hidden py-5 flex flex-row">
            <SetItemProgress position={currentSetSki} length={ski.length} />
            <SetItemProgress position={currentSetBoots} length={boots.length} />
            <SetItemProgress
              position={currentSetBindings}
              length={bindings.length}
            />
          </div>
          <div />
          <div className="max-lg:mx-16 flex flex-col lg:flex-row mb-3 ">
            <ProductCarouselColumn
              products={ski}
              currentIndex={currentSetSki}
              onChangeSetElement={() => {
                setCurrentSetSki((currentSetSki + 1) % ski.length)
              }}
            >
              <div className="font-sans body-m text-white/70">
                Ti consigliamo uno sci fra{' '}
                {Math.min(...ski.map((p: any) => p.sizeMin))} e{' '}
                {Math.max(...ski.map((p: any) => p.sizeMax))} cm
              </div>
              <Info className="w-6 h-6 text-white/70 mx-auto mt-2" />
            </ProductCarouselColumn>
            <ProductCarouselColumn
              products={boots}
              currentIndex={currentSetBoots}
              onChangeSetElement={() => {
                setCurrentSetBoots((currentSetBoots + 1) % boots.length)
              }}
            >
              <div className="font-sans body-m text-white/70">
                Consigliamo sempre di provare da un negoziante di fiducia.
              </div>
              <div className="font-sans body-m text-white cursor-pointer mt-4">
                Come scegliere lo scarpone
              </div>
            </ProductCarouselColumn>
            <ProductCarouselColumn
              products={bindings}
              currentIndex={currentSetBindings}
              isLast
              onChangeSetElement={() => {
                setCurrentSetBindings(
                  (currentSetBindings + 1) % bindings.length,
                )
              }}
            >
              <ShareBlock
                customClass="lg:hidden mt-4"
                skiId={ski[currentSetSki].id}
                bootId={boots[currentSetBoots].id}
                bindingId={bindings[currentSetBindings].id}
              />
            </ProductCarouselColumn>
          </div>
          <div className="[&>*]:lg:mb-2 [&>*]:mb-4  [&>*:last-child]:mb-0 pb-4">
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
              value={weightedLevel * 10}
              min={0}
              max={4 * 10}
            />
            <CardRangeEvaluation
              title="Costo set"
              variant="minmax"
              labels={['Economico', 'Abbastanza costoso']}
              value={setPrice}
              min={minSetPrice}
              max={maxSetPrice}
              unit="€"
            />
            <CardRangeEvaluation
              title="Peso totale"
              variant="minmax"
              labels={['Leggero', 'Pesante']}
              value={setWeight}
              min={minSetWeight}
              max={maxSetWeight}
              unit="g"
            />
            <ShareBlock
              customClass="max-lg:hidden mt-32"
              skiId={ski[currentSetSki].id}
              bootId={boots[currentSetBoots].id}
              bindingId={bindings[currentSetBindings].id}
            />
          </div>
        </div>
      </section>
      <section className="w-screen lg:h-screen bg-dove-500">
        <div className="h-1/2 px-4 py-8 lg:px-12 lg:py-16 flex flex-col justify-between">
          <div>
            <h3 className="font-sans h3 text-black mb-4">Per chiudere</h3>
            <div className="font-sans text-black/70 body-m lg:w-1/2 mb-16">
              Ricorda di aggiungere le pelli! Chiedi al negoziante qualcosa di
              light, come prima pelle andrà benissimo
            </div>
          </div>

          <ButtonSuper
            label="Pelli"
            leftImageSrc="https://picsum.photos/id/231/1080/1080"
            variant="filled"
          />
        </div>
        <div className="h-1/2 px-4 py-8 lg:px-12 lg:py-16 flex flex-col justify-between">
          <div>
            <h3 className="font-sans h3 text-black mb-4">
              Non risparmiare su questi
            </h3>
            <div className="font-sans text-black/70 body-m lg:w-1/2 mb-16">
              Non è consigliabile partire senza kit sicurezza. Qui trovi la
              nostra selezione per i cominciare in sicurezza
            </div>
          </div>
          <div className="flex flex-row gap-8 items-center max-lg:flex-wrap">
            <ButtonSuper
              label="Artva"
              leftImageSrc="https://picsum.photos/id/232/1080/1080"
              variant="filled"
            />
            <ButtonSuper
              label="Pale"
              leftImageSrc="https://picsum.photos/id/233/1080/1080"
              variant="filled"
            />
            <ButtonSuper
              label="Sonde"
              leftImageSrc="https://picsum.photos/id/234/1080/1080"
              variant="filled"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

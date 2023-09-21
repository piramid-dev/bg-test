import { Timer } from '@phosphor-icons/react'
import type { ActionArgs, LoaderArgs } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { Form, useSubmit } from '@remix-run/react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import Button from '~/components/Atoms/Button'
import SurveyWrapper from '~/components/Atoms/SurveyWrapper/SurveyWrapper'
import surveys from '~/config/survey.customer-profilation.json'
import { datoQuerySubscription } from '~/lib/datocms'
import datoCmsClient from '~/lib/datocms.server'
import { enrichSurvey } from '~/lib/survey.utils'
import type { ISurvey, ISurveyEnriched } from '~/types/survey.interface'
import { useContext } from '~/hooks/useContext'
import { getUserId } from '~/session.server'

export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url)
  const search = new URLSearchParams(url.search)
  const userId = (await getUserId(request)) || search.get('userId')

  if (!userId) {
    return redirect('/abbonamento')
  }

  const userQuery = `#graphql
    query ($idCommercelayer: String) {
      user(filter: {idCommercelayer: {eq: $idCommercelayer}}) {
        id
      }
    }
  `

  const datoQuerySub = await datoQuerySubscription({
    request,
    query: userQuery,
    variables: { idCommercelayer: userId },
  })

  const { id } = datoQuerySub.datoQuerySubscription.initialData.user

  const formQuery = `#graphql
    query ($userId: ItemId, $formType: String) {
      form: allForms(filter: {user: {eq: $userId}, formType: {eq: $formType}}) {
        id
      }
    }
  `
  const formData = await datoQuerySubscription({
    request,
    query: formQuery,
    variables: { userId: id, formType: 'commercial' },
  })

  if (formData.datoQuerySubscription.initialData.form.length > 0) {
    return redirect('/surveys/customer-profilation/already-submitted')
  }

  return { status: 200 }
}

export const action = async ({ request }: ActionArgs) => {
  try {
    const formData = await request.formData()

    const answers = formData.get('answers')
    const started_at = new Date(formData.get('started_at')!.toString())
    const userId = formData.get('userId')!.toString()
    const client = datoCmsClient()

    await client.items.create({
      item_type: {
        type: 'item_type',
        id: '2110933',
      },
      form_type: 'commercial',
      answers,
      started_at,
      finished_at: new Date(),
      user: userId,
    })

    return redirect(`/surveys/customer-profilation/landing-complete`)
  } catch (error) {
    console.error({ error })
  }
}

export default function SurveyCustomerProfilation() {
  const [started_at] = useState(new Date())

  const { t, i18n } = useTranslation()
  const [language] = useState<'en' | 'it'>(i18n.language as any)
  const { user } = useContext()

  const submit = useSubmit()

  const [surveySelected, setSurveySelected] = useState<
    'skier' | 'splitboard' | null
  >(null)

  const [enrichedSurvey, setEnrichedSurvey] = useState<
    ISurveyEnriched[] | null
  >(null)

  useEffect(() => {
    if (!surveySelected) {
      setEnrichedSurvey(null)
      return
    }
    setEnrichedSurvey(
      enrichSurvey(surveys[surveySelected] as ISurvey[], language),
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [surveySelected])

  // TODO: remove sIdx and qIdx from the key and use the fieldName
  const handleEndSurvey = async (_answers: any[][]) => {
    const surveyToSend: any = {}
    enrichedSurvey?.forEach((s, sIdx) => {
      s.questions.forEach((q, qIdx) => {
        if (q.type === 'singlechoice' || q.type === 'singlechoice-image') {
          // surveyToSend[q.fieldName] = {
          surveyToSend[q.fieldName] = {
            idx: q.radios!.findIndex(
              (r) => r.label === _answers[sIdx][qIdx].label,
            ),
            label: _answers[sIdx][qIdx].label,
          }
        } else if (q.type === 'multichoice') {
          // surveyToSend[q.fieldName] = {
          surveyToSend[q.fieldName] = _answers[sIdx][qIdx]
            ?.map((a: any, idx: any) => {
              if (a.value) {
                return {
                  label: a.label,
                  idx,
                }
              }
              return null
            })
            .filter((a: any) => a)
        } else if (q.type === 'range') {
          // surveyToSend[q.fieldName] = {
          surveyToSend[q.fieldName] = _answers[sIdx][qIdx].value
        } else {
          // surveyToSend[q.fieldName] = {
          surveyToSend[q.fieldName] = {
            idx: null,
            label: _answers[sIdx][qIdx].label,
          }
        }
      })
    })

    surveyToSend.surveyType = surveySelected

    submit(
      {
        answers: JSON.stringify(surveyToSend),
        started_at: started_at.toISOString(),
        userId: user?.id,
      },
      {
        method: 'POST',
      },
    )
  }

  return (
    // TODO: 70vh is a temporary value
    <main className="w-screen h-[70vh] relative">
      <div className="absolute w-screen top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 lg:w-[50vw] p-4">
        <h3 className="font-sans h3 text-center mb-4">
          {t('customer-profilation.title')}{' '}
        </h3>
        <p className="font-sans body-m text-center mb-6 text-black/70">
          {t('customer-profilation.description')}
        </p>
        <div className="w-fit ml-auto mr-auto flex flex-row gap-2 items-center">
          <Timer className="w-6 h-6" />
          <span className="uppercase font-sans h5 text-center">
            {t('customer-profilation.duration')}
          </span>
        </div>
        <div className="flex flex-col basis-full lg:flex-row gap-6 mt-12 [&>*]:lg:basis-1/2">
          <Button
            variant="primary"
            icon="ArrowRight"
            iconPos="left"
            onClick={() => setSurveySelected('skier')}
          >
            {t('customer-profilation.survey-skier')}
          </Button>
          <Button
            variant="primary"
            icon="ArrowRight"
            iconPos="left"
            onClick={() => setSurveySelected('splitboard')}
          >
            {t('customer-profilation.survey-splitboard')}
          </Button>
        </div>
      </div>
      <Form method="post">
        {surveySelected && enrichedSurvey ? (
          <SurveyWrapper
            surveys={enrichedSurvey}
            closeSurvey={() => setSurveySelected(null)}
            endSurvey={handleEndSurvey}
          />
        ) : null}
      </Form>
    </main>
  )
}

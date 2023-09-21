import { MagicWand, Sunglasses, Swatches, Chats } from 'phosphor-react'
import { useEffect, useState } from 'react'
import type { ActionArgs } from '@remix-run/node'
import { json, redirect } from '@remix-run/node'
import { Form, useActionData, useNavigate, useSubmit } from '@remix-run/react'
import { useTranslation } from 'react-i18next'

import Button from '~/components/Atoms/Button/Button'
import { enrichSurvey } from '~/lib/survey.utils'
import type { ISurvey, ISurveyEnriched } from '~/types/survey.interface'
import surveys from '~/config/survey.prompter.json'
import SurveyWrapper from '~/components/Atoms/SurveyWrapper/SurveyWrapper'
import { useContext } from '~/hooks/useContext'
import { commitSession, getSession } from '~/sessions'
import { createPrompterSurvey } from '~/lib/datocms.utils'
import FormLoading from '~/components/Atoms/FormLoading'

const PrompterStar = () => {
  return (
    <svg
      viewBox="0 0 210 270"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-1/4 h-auto lg:w-[13.125rem] lg:h-[16.875rem]"
    >
      <path
        d="M19.6583 135C62.5725 124.876 96.1602 82.2022 105 28.2973C113.84 82.2022 147.428 124.876 190.342 135C147.428 145.124 113.84 187.798 105 241.703C96.1602 187.798 62.5725 145.124 19.6583 135Z"
        fill="white"
        stroke="white"
        strokeWidth="4.57377"
      />
    </svg>
  )
}

export const action = async ({ request }: ActionArgs) => {
  try {
    const formData = await request.formData()

    const answers = formData.get('answers')
    const started_at = new Date(formData.get('started_at')!.toString())
    const userId = formData.get('userId')!.toString()

    if (userId === 'undefined') {
      const session = await getSession(request.headers.get('Cookie'))

      session.flash(
        // @ts-ignore
        'prompter',
        JSON.stringify({
          answers,
          started_at: started_at.toISOString(),
        }),
      )

      return redirect(`/join`, {
        headers: {
          'Set-Cookie': await commitSession(session),
        },
      })
    }

    await createPrompterSurvey(answers, started_at, userId)

    return json(
      {
        created: true,
      },
      200,
    )
  } catch (error) {
    console.error({ error })
  }

  return null
}

export default function Prompter() {
  const [started_at] = useState(new Date())
  const { user } = useContext()
  const { t, i18n } = useTranslation()
  const [language] = useState<'en' | 'it'>(i18n.language as any)

  const submit = useSubmit()

  const [surveySelected, setSurveySelected] = useState<'prompter' | null>(null)
  const [enrichedSurvey, setEnrichedSurvey] = useState<
    ISurveyEnriched[] | null
  >(null)

  const actionData = useActionData<any>()
  const navigate = useNavigate()

  // WORKAROUND: action returing redirect can't return a json response, so we return a json response with a created boolean
  // and redirect client side, showing a loading screen
  useEffect(() => {
    if (!actionData) return

    if (actionData!.created) {
      navigate('/prompter')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actionData])

  useEffect(() => {
    console.log('surveySelected')

    if (!surveySelected) {
      setEnrichedSurvey(null)
      return
    }
    setEnrichedSurvey(
      enrichSurvey(surveys[surveySelected] as ISurvey[], language),
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [surveySelected])

  const handleEndSurvey = async (_answers: any[][]) => {
    const surveyToSend: any = {}

    enrichedSurvey?.forEach((s, sIdx) => {
      s.questions.forEach((q, qIdx) => {
        if (q.type === 'singlechoice' || q.type === 'singlechoice-image') {
          surveyToSend[q.fieldName] = {
            idx: q.radios!.findIndex(
              (r) => r.label === _answers[sIdx][qIdx].label,
            ),
            label: _answers[sIdx][qIdx].label,
          }
        } else if (q.type === 'multichoice') {
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
          surveyToSend[q.fieldName] = _answers[sIdx][qIdx].value
        } else {
          surveyToSend[q.fieldName] = {
            idx: null,
            label: _answers[sIdx][qIdx].label,
          }
        }
      })
    })

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

  return actionData?.created ? (
    <FormLoading title={t('loading')} description={t('loading-description')} />
  ) : (
    <main className="h-[calc(100vh-100px)] py-16 w-screen bg-black flex flex-col items-center">
      <section className="max-lg:px-4 lg:grow lg:w-8/12 flex flex-col-reverse lg:flex-row items-center ">
        <div className="lg:w-8/12 shrink-0 lg:pr-4">
          <h3 className="h3 font-sans text-white lg:w-2/3">
            {t('prompter.title')}
          </h3>
          <p className="text-white font-sans body-m my-8">
            {t('prompter.description')}
          </p>
          <div className="flex flex-row gap-2 items-center text-white lg:text-white/70 body-m font-sans mb-5">
            <Sunglasses className="w-8 h-8" />
            <div>{t('prompter.list_1')}</div>
          </div>
          <div className="flex flex-row gap-2 items-center text-white lg:text-white/70 body-m font-sans mb-5">
            <Swatches className="w-8 h-8" />
            <div>{t('prompter.list_2')}</div>
          </div>
          <div className="flex flex-row gap-2 items-center text-white lg:text-white/70 body-m font-sans mb-10">
            <Chats className="w-8 h-8" />
            <div>{t('prompter.list_3')}</div>
          </div>
          <Button
            label={t('prompter.cta')}
            containerClassName="max-lg:px-4 w-full lg:w-5/12"
            icon="ArrowRight"
            onClick={() => setSurveySelected('prompter')}
          />
        </div>
        <div className="lg:grow max-lg:mb-8">
          <div className="relative flex justify-center">
            <PrompterStar />
            <MagicWand className="text-black absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-6 lg:w-8 h-6 lg:h-8" />
          </div>
        </div>
      </section>
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

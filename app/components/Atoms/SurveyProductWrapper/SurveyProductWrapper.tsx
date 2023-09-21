import { useState, type FC, useEffect } from 'react'
import { Form, useLocation, useSubmit } from '@remix-run/react'

import type { PRODUCT_SURVEY_TYPE } from '~/lib/survey.utils'
import { enrichSurvey } from '~/lib/survey.utils'
import type { ISurvey, ISurveyEnriched } from '~/types/survey.interface'
import surveys from '~/config/survey.product-feedback.json'
import { useContext } from '~/hooks/useContext'

import SurveyWrapper from '../SurveyWrapper'

interface SurveyProductWrapperProps {
  productId: string
  productImageUrl?: string
  children: React.ReactNode
  feedbackSurvey: any
  onClose: Function
  language: 'en' | 'it'
}

const SurveyProductWrapper: FC<SurveyProductWrapperProps> = ({
  productId,
  productImageUrl = '',
  children,
  feedbackSurvey,
  onClose,
  language,
}) => {
  const [started_at] = useState(new Date())

  const [surveySelected, setSurveySelected] =
    useState<PRODUCT_SURVEY_TYPE | null>(null)

  const [enrichedSurvey, setEnrichedSurvey] = useState<
    ISurveyEnriched[] | null
  >(null)

  const submit = useSubmit()
  const location = useLocation()

  const { user } = useContext()

  useEffect(() => {
    setSurveySelected(feedbackSurvey)

    if (!feedbackSurvey) {
      setEnrichedSurvey(null)
      return
    }

    setEnrichedSurvey(
      enrichSurvey(
        surveys[feedbackSurvey as keyof typeof surveys] as ISurvey[],
        language,
      ),
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [feedbackSurvey])

  // TODO: remove sIdx and qIdx from the key and use the fieldName
  const handleEndSurvey = async (_answers: any[][]) => {
    const surveyToSend: any = {}
    console.log(_answers)
    enrichedSurvey?.forEach((s, sIdx) => {
      s.questions.forEach((q, qIdx) => {
        if (q.type === 'singlechoice') {
          surveyToSend[`${sIdx}_${qIdx}`] = _answers[sIdx][qIdx].label
          // surveyToSend[q.fieldName] = _answers[sIdx][qIdx].label
        } else if (q.type === 'multichoice') {
          surveyToSend[q.fieldName] = _answers[sIdx][qIdx]
            .filter((a: any) => a.value)
            ?.map((a: any) => a.label)
        } else if (q.type === 'range') {
          surveyToSend[`${sIdx}_${qIdx}`] = _answers[sIdx][qIdx].value
          // surveyToSend[q.fieldName] = _answers[sIdx][qIdx].value
        } else {
          surveyToSend[`${sIdx}_${qIdx}`] = _answers[sIdx][qIdx]
          // surveyToSend[q.fieldName] = _answers[sIdx][qIdx]
        }
      })
    })

    submit(
      {
        answers: JSON.stringify(surveyToSend),
        started_at: started_at.toISOString(),
        userId: user?.id,
        product: productId,
        callbackUrl: location.pathname,
        productImageUrl,
      },
      { method: 'post' },
    )
  }

  return (
    <>
      <div>{children}</div>
      <Form method="post">
        {surveySelected && enrichedSurvey ? (
          <SurveyWrapper
            surveys={enrichedSurvey}
            closeSurvey={() => onClose && onClose()}
            endSurvey={handleEndSurvey}
          />
        ) : null}
      </Form>
    </>
  )
}

export default SurveyProductWrapper

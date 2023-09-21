import {
  Children,
  useState,
  type FC,
  type MouseEventHandler,
  useEffect,
  useRef,
  createRef,
} from 'react'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'

import type { ISurveyEnriched } from '~/types/survey.interface'
import SurveyTextarea from '~/components/Organisms/SurveyTextarea/SurveyTextarea'
import SurveyMultichoice from '~/components/Organisms/SurveyMultichoice/SurveyMultichoice'
import SurveySinglechoice from '~/components/Organisms/SurveySinglechoice/SurveySinglechoice'
import SurveyRange from '~/components/Organisms/SurveyRange'
import SurveyInput from '~/components/Organisms/SurveyInput'
import { isValidEmail } from '~/lib/survey.utils'
import SurveyRadioImage from '~/components/Organisms/SurveyRadioImage/SurveyRadioImage'

import Button from '../Button'

interface SurveyStepProps {
  survey: ISurveyEnriched
  onNextStep?: MouseEventHandler<HTMLButtonElement>
  isLastStep?: boolean
  answers?: any
  setAnswers?: Function
  subtitle?: string
}

const SurveyStep: FC<SurveyStepProps> = ({
  survey,
  onNextStep,
  isLastStep,
  answers,
  setAnswers,
  subtitle,
}) => {
  const { t } = useTranslation()
  const wrapperRef = useRef<HTMLElement | null>(null)

  const [surveyWithAnswers, setSurveyWithAnswers] =
    useState<ISurveyEnriched | null>(null)

  const surveyRefs = useRef<any[] | null>(null)

  const [valid, setValid] = useState<(boolean | string)[]>(
    survey!.questions.map(() => false),
  )
  const [errors, setErrors] = useState<(string | undefined)[]>(
    survey!.questions.map(() => undefined),
  )

  const handleSurveyAnswer = (idx: number, answer: any) => {
    if (!surveyWithAnswers) return

    const newSurvey = { ...surveyWithAnswers }

    if (newSurvey.questions[idx].type === 'multichoice') {
      if (!newSurvey.questions[idx].answer) {
        newSurvey.questions[idx].answer = newSurvey.questions[idx].checkboxes
      }

      newSurvey.questions[idx].answer = (newSurvey.questions[idx]
        .answer as any[])!.map((c) => {
        if (c.optionId === answer.optionId) {
          c.value = answer.value
        }
        return c
      })
    } else {
      newSurvey.questions[idx].answer = answer
    }

    setSurveyWithAnswers(newSurvey)
    setAnswers && setAnswers(newSurvey.questions[idx].answer, idx)
  }

  useEffect(() => {
    const _questionsWithAnswers = survey.questions.map((q, idx) => {
      if (q.type === 'singlechoice' || q.type === 'singlechoice-image') {
        q.radios?.forEach((c) => {
          if (c.optionId === answers[idx]?.optionId) {
            c.value = answers[idx].value
          }
        })
      }

      if (q.type === 'multichoice') {
        q.checkboxes?.forEach((c) => {
          if (c.optionId === answers[idx]?.optionId) {
            c.value = answers[idx].value
          }
        })
      }

      if (q.type === 'text') {
        q.answer = answers[idx]
      }

      if (q.type === 'range') {
        q.answer = answers[idx]?.value
      }

      return q
    })

    const _surveyWithAnswers = { ...survey, questions: _questionsWithAnswers }

    surveyRefs.current = survey.questions.map(() => createRef())

    setSurveyWithAnswers(_surveyWithAnswers)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!surveyWithAnswers) return

    const valid = surveyWithAnswers.questions.map((q) => {
      if (q.optional) return true

      if (q.type === 'input' && q.input?.type === 'email') {
        return isValidEmail(q.answer as string) || t('validation-errors.email')
      }

      return !!q.answer || t('validation-errors.required')
    })

    setValid(valid)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [surveyWithAnswers])

  const handleNextStep = (e: any) => {
    const _validationErrors = valid.map((v) =>
      typeof v === 'string' ? v : undefined,
    )
    setErrors(_validationErrors)

    const isValid = _validationErrors.every((v) => v === undefined)
    if (isValid) {
      onNextStep && onNextStep(e)
    } else {
      surveyRefs.current![
        _validationErrors.findIndex((e) => e !== undefined)
      ].current?.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

  const isMultichoiceImage = surveyWithAnswers?.questions.every(
    (q) => q.type === 'singlechoice-image',
  )

  return (
    <section
      ref={wrapperRef}
      className={classNames({
        'grow  w-full lg:w-1/3': true,
        '!w-full flex flex-row items-center': isMultichoiceImage,
      })}
    >
      {survey.title ? (
        <h4
          className={classNames({
            'font-sans h4 text-center mt-12': true,
            'mb-12': !subtitle,
          })}
        >
          {survey.title}
        </h4>
      ) : null}
      {subtitle ? (
        <div className="pt-4 mb-12 text-center text-black/70 font-sans body-m">
          {subtitle}
        </div>
      ) : null}
      <div className="w-full">
        <div className="w-full">
          {surveyWithAnswers
            ? Children.toArray(
                surveyWithAnswers.questions.map((q, idx) => {
                  if (q.type === 'text') {
                    return (
                      <div className="w-full" ref={surveyRefs.current![idx]}>
                        <SurveyTextarea
                          title={q.question}
                          name={q.question}
                          value={q.answer as string}
                          optional={q.optional}
                          error={errors[idx]}
                          helpText={q.helpText}
                          onChange={(e) => {
                            //@ts-ignore
                            handleSurveyAnswer(idx, e.nativeEvent.target?.value)
                          }}
                        />
                      </div>
                    )
                  }

                  if (q.type === 'multichoice') {
                    return (
                      <div className="w-full" ref={surveyRefs.current![idx]}>
                        <SurveyMultichoice
                          title={q.question}
                          checkboxes={q.checkboxes}
                          optional={q.optional}
                          error={errors[idx]}
                          helpText={q.helpText}
                          onChange={(e: any) => handleSurveyAnswer(idx, e)}
                        />
                      </div>
                    )
                  }

                  if (q.type === 'singlechoice') {
                    return (
                      <div className="w-full" ref={surveyRefs.current![idx]}>
                        <SurveySinglechoice
                          title={q.question}
                          radios={q.radios}
                          optional={q.optional}
                          error={errors[idx]}
                          helpText={q.helpText}
                          onChange={(e: any) => handleSurveyAnswer(idx, e)}
                        />
                      </div>
                    )
                  }

                  if (q.type === 'range') {
                    return (
                      <div className="w-full" ref={surveyRefs.current![idx]}>
                        <SurveyRange
                          title={q.question}
                          min={q.range!.min}
                          max={q.range!.max}
                          optional={q.optional}
                          error={errors[idx]}
                          helpText={q.helpText}
                          unit={q.unit}
                          value={q.answer ? +q.answer : undefined}
                          onChange={(e: any) => handleSurveyAnswer(idx, e)}
                        />
                      </div>
                    )
                  }

                  if (q.type === 'input') {
                    return (
                      <div className="w-full" ref={surveyRefs.current![idx]}>
                        <SurveyInput
                          title={q.question}
                          name={q.question}
                          value={q.answer as string}
                          type={q.input!.type as any}
                          helpText={q.helpText}
                          optional={q.optional}
                          error={errors[idx]}
                          onChange={(e: any) =>
                            handleSurveyAnswer(idx, e.nativeEvent.target?.value)
                          }
                        />
                      </div>
                    )
                  }

                  if (q.type === 'singlechoice-image') {
                    return (
                      <div className="w-full" ref={surveyRefs.current![idx]}>
                        <SurveyRadioImage
                          title={q.question}
                          radios={q.radios}
                          optional={q.optional}
                          error={errors[idx]}
                          helpText={q.helpText}
                          onChange={(e: any) => handleSurveyAnswer(idx, e)}
                        />
                      </div>
                    )
                  }

                  return null
                }),
              )
            : null}
        </div>
        <div
          className={classNames({
            'py-12 [&>*]:w-full mb-24': true,
            'lg:w-1/3': isMultichoiceImage,
          })}
        >
          <Button onClick={handleNextStep} icon="ArrowRight" iconPos="left">
            {isLastStep ? t('submit') : t('next')}
          </Button>
        </div>
      </div>
    </section>
  )
}

export default SurveyStep

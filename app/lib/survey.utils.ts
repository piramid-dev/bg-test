import type { ISurvey, ISurveyEnriched } from '~/types/survey.interface'

export const enrichSurvey = (
  surveys: ISurvey[],
  language: 'en' | 'it',
): ISurveyEnriched[] => {
  const surveyEnriched = surveys.map((survey, s_idx) => ({
    title: survey.title ? survey.title[language] : '',
    subtitle: survey.subtitle ? survey.subtitle[language] : null,
    questions: survey.questions.map((q, q_idx) => {
      switch (q.type) {
        case 'multichoice':
          return {
            question: q.question[language],
            type: q.type,
            optional: q.optional || false,
            fieldName: q.fieldName,
            helpText: q.helpText ? q.helpText[language] : null,
            checkboxes: q.choices
              ? q.choices[language as any]?.map(
                  (choice: string, c_idx: number) => {
                    return {
                      group: `${s_idx}_${q_idx}`,
                      optionId: `${s_idx}_${q_idx}_${c_idx}`,
                      label: choice,
                      value: false,
                    }
                  },
                )
              : null,
          }
        case 'singlechoice':
          return {
            question: q.question[language],
            type: q.type,
            optional: q.optional || false,
            fieldName: q.fieldName,
            helpText: q.helpText ? q.helpText[language] : null,
            radios: q.choices
              ? q.choices[language as any]?.map(
                  (choice: string, c_idx: number) => {
                    return {
                      group: `${s_idx}_${q_idx}`,
                      optionId: `${s_idx}_${q_idx}_${c_idx}`,
                      label: choice,
                      value: false,
                    }
                  },
                )
              : null,
          }
        case 'input':
          return {
            question: q.question[language],
            type: q.type,
            input: q.input,
            optional: q.optional || false,
            helpText: q.helpText ? q.helpText[language] : null,
            fieldName: q.fieldName,
          }
        case 'singlechoice-image':
          return {
            question: q.question[language],
            type: q.type,
            optional: q.optional || false,
            fieldName: q.fieldName,
            helpText: q.helpText ? q.helpText[language] : null,
            radios: q.choices
              ? q.choices[language as any]?.map(
                  (choice: any, c_idx: number) => {
                    return {
                      group: `${s_idx}_${q_idx}`,
                      optionId: `${s_idx}_${q_idx}_${c_idx}`,
                      label: choice.label,
                      value: false,
                      imageUrl: choice.imageUrl,
                    }
                  },
                )
              : null,
          }
        default:
          const _q = { ...q } as any

          _q.question = q.question[language]
          _q.helpText = q.helpText ? q.helpText[language] : null
          _q.optional = q.optional || false
          return _q
      }
    }),
  }))

  // console.log('surveyEnriched', surveyEnriched)

  return surveyEnriched as ISurveyEnriched[]
}

export const isValidEmail = (email?: string): boolean => {
  if (!email) return false

  const re = /\S+@\S+\.\S+/
  const test = re.test(email)
  return test
}

export enum SURVEY_VALIDATION_ERRORS {
  EMAIL = 'email',
  REQUIRED = 'required',
}

export type PRODUCT_SURVEY_TYPE = 'bindings' | 'ski'

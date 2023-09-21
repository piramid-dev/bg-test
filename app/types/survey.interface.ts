export interface IStringI18zed {
  it: string
  en: string
}

export interface ISurvey {
  title?: IStringI18zed
  subtitle?: IStringI18zed
  questions: ISurveyQuestion[]
}

export interface ISurveyQuestion {
  question: IStringI18zed
  type: SURVEY_QUESTION_TIPE
  choices?: any[]
  unit?: string
  range?: {
    min: number
    max: number
  }
  input?: {
    type: string
  }
  optional?: boolean
  helpText?: IStringI18zed
  fieldName: string
}

export type SURVEY_QUESTION_TIPE =
  | 'singlechoice'
  | 'multichoice'
  | 'text'
  | 'range'
  | 'input'
  | 'singlechoice-image'

export interface ISurveyQuestionEnriched {
  question: string
  type: SURVEY_QUESTION_TIPE
  checkboxes?: {
    label: string
    value: boolean
    optionId: string
    group: string
    imageUrl?: string
  }[]
  optional: boolean
  input?: {
    type: string
    helpText?: string
  }
  unit?: string
  range?: { min: number; max: number }
  radios?: {
    label: string
    value: boolean
    optionId: string
    group: string
    imageUrl?: string
  }[]
  answer?: string | any[]
  helpText?: string
  fieldName: string
}

export interface ISurveyEnriched {
  title: string
  subtitle?: string
  questions: ISurveyQuestionEnriched[]
}

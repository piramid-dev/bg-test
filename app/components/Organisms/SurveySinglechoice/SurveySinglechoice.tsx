import { useState, type FC } from 'react'

import Radio from '../../AtomsForms/Radio'
import SurveyQuestionWrapper from '../../Atoms/SurveyQuestionWrapper/SurveyQuestionWrapper'

interface SurveySinglechoiceProps {
  title: string
  radios?: {
    group: string
    label: string
    value: boolean
  }[]
  optional: boolean

  onChange?: Function
  error?: string
  helpText?: string
}

const SurveySinglechoice: FC<SurveySinglechoiceProps> = ({
  title,
  radios = [],
  onChange,
  optional,
  error,
  helpText,
}) => {
  const [radiosState, setRadiosState] = useState(radios.map((c) => c.value))

  return (
    <SurveyQuestionWrapper
      title={title}
      optional={optional}
      error={error}
      helpText={helpText}
    >
      {radios.map((radio, idx) => (
        <Radio
          key={JSON.stringify(radio)}
          label={radio.label}
          name={radio.group}
          defaultChecked={radio.value}
          onChange={(e: any) => {
            const newRadiosState = [...radiosState]
            newRadiosState.map((_, i) => (i === idx ? e : false))
            setRadiosState(newRadiosState)

            onChange && onChange({ ...radio, value: e })
          }}
        />
      ))}
    </SurveyQuestionWrapper>
  )
}

export default SurveySinglechoice

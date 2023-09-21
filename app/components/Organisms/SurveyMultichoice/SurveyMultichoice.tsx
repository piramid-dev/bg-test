import { useState, type FC } from 'react'

import Checkbox from '../../AtomsForms/Checkbox'
import SurveyQuestionWrapper from '../../Atoms/SurveyQuestionWrapper/SurveyQuestionWrapper'

interface SurveyMultichoiceProps {
  title: string
  checkboxes?: {
    group: string
    label: string
    value: boolean
  }[]
  onChange?: Function
  error?: string
  optional: boolean
  helpText?: string
}

const SurveyMultichoice: FC<SurveyMultichoiceProps> = ({
  title,
  checkboxes = [],
  onChange,
  optional,
  error,
  helpText,
}) => {
  const [checkboxesState, setCheckboxesState] = useState(
    checkboxes.map((c) => c.value),
  )

  return (
    <SurveyQuestionWrapper
      title={title}
      optional={optional}
      error={error}
      helpText={helpText}
    >
      {checkboxes.map((checkbox, idx) => (
        <Checkbox
          key={JSON.stringify(checkbox)}
          label={checkbox.label}
          name={checkbox.group}
          defaultChecked={checkbox.value}
          onChange={(e: any) => {
            const newCheckboxesState = [...checkboxesState]
            newCheckboxesState[idx] = e
            setCheckboxesState(newCheckboxesState)

            onChange &&
              onChange({
                ...checkbox,
                value: e,
              })
          }}
        />
      ))}
    </SurveyQuestionWrapper>
  )
}

export default SurveyMultichoice

import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import Textarea from '../../AtomsForms/Textarea'
import SurveyQuestionWrapper from '../../Atoms/SurveyQuestionWrapper/SurveyQuestionWrapper'

interface SurveyTextareaProps {
  title: string
  placeholder?: string
  name: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  value?: string
  optional: boolean
  error?: string
  helpText?: string
}

const SurveyTextarea: FC<SurveyTextareaProps> = ({
  title,
  name,
  placeholder,
  onChange,
  value,
  optional,
  error,
  helpText,
}) => {
  const { t } = useTranslation()

  return (
    <SurveyQuestionWrapper
      title={title}
      optional={optional}
      error={error}
      helpText={helpText}
    >
      <Textarea
        name={name}
        placeholder={placeholder || t('input-placeholder')}
        value={value}
        onChange={(e) => onChange && onChange(e)}
      />
    </SurveyQuestionWrapper>
  )
}

export default SurveyTextarea

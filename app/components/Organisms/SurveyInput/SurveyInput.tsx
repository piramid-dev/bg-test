import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import SurveyQuestionWrapper from '../../Atoms/SurveyQuestionWrapper/SurveyQuestionWrapper'

interface SurveyInputProps {
  title: string
  placeholder?: string
  name: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
  type?: 'text' | 'password' | 'email' | 'number' | 'date'
  optional: boolean
  error?: string
  helpText?: string
}

const SurveyInput: FC<SurveyInputProps> = ({
  title,
  name,
  placeholder,
  onChange,
  value = '',
  type = 'text',
  optional,
  helpText,
  error,
}) => {
  const { t } = useTranslation()

  return (
    <SurveyQuestionWrapper
      title={title}
      optional={optional}
      compact
      error={error}
      helpText={helpText}
    >
      <div className="relative mt-1 shadow-sm">
        <input
          placeholder={placeholder || t('input-placeholder')}
          type={type}
          name={name}
          value={value}
          onChange={(e) => onChange && onChange(e)}
          className="placeholder:ml-1 block w-full rounded-md border-0 p-1.5 text-black/70 ring-inset ring-black/30 transition-all duration-300 shadow-sm ring-1 placeholder:font-sans placeholder:text-black/30 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
        />
      </div>
    </SurveyQuestionWrapper>
  )
}

export default SurveyInput

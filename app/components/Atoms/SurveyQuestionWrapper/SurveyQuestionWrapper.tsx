import { Info } from '@phosphor-icons/react'
import classNames from 'classnames'
import type { FC } from 'react'

interface SurveyQuestionWrapperProps {
  title: string
  info?: string
  children: React.ReactNode
  optional: boolean
  compact?: boolean
  error?: string
  helpText?: string
}

const SurveyQuestionWrapper: FC<SurveyQuestionWrapperProps> = ({
  title,
  children,
  info,
  optional,
  compact,
  error,
  helpText,
}) => {
  return (
    <div className="py-4 border-b border-black/40">
      <div
        className={classNames({
          'font-sans !font-semibold body-m flex flex-row justify-between items-start':
            true,
          'py-4 mb-2': !compact,
          'mt-4 mb-2': compact,
        })}
      >
        <div>
          <span>{title}</span>
          {optional ? (
            <span className="ml-1 text-black/40 font-sans body-s">
              Opzionale
            </span>
          ) : null}
        </div>
        {info ? <Info className="w-6 h-6 shrink-0" /> : null}
      </div>
      {children}
      {helpText ? (
        <p className="mt-4 text-black/70 body-s">{helpText}</p>
      ) : null}
      {error ? (
        <div className="h-5 text-red-500 font-sans body-s pt-2">{error}</div>
      ) : (
        <div className="h-5" />
      )}
    </div>
  )
}

export default SurveyQuestionWrapper

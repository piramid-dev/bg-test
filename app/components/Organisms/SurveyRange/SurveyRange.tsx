import { useState, type FC } from 'react'
import ReactSlider from 'react-slider'
import classNames from 'classnames'

import SurveyQuestionWrapper from '../../Atoms/SurveyQuestionWrapper/SurveyQuestionWrapper'

interface SurveyRangeProps {
  title: string
  info?: string
  min?: number
  max?: number
  onChange?: Function
  optional: boolean
  value?: number
  error?: string
  helpText?: string
  unit?: string
}

const SurveyRange: FC<SurveyRangeProps> = ({
  title,
  info,
  min = 0,
  max = 10,
  onChange,
  value,
  optional,
  error,
  helpText,
  unit,
}) => {
  const [rangeValue, setRangeValue] = useState(value)

  const handleSliderChange = (_value: number) => {
    setRangeValue(_value)
    onChange && onChange({ value: _value })
  }

  return (
    <SurveyQuestionWrapper
      title={title}
      info={info}
      optional={optional}
      error={error}
      helpText={helpText}
    >
      <div className="body-m text-black/70">
        {unit ? (
          <span className="body-l !font-semibold">
            {rangeValue || '-'} {unit}
          </span>
        ) : (
          <span>
            <span className="body-l !font-semibold">{rangeValue || '-'}</span>{' '}
            su <span>{max || '-'}</span>
          </span>
        )}
        <ReactSlider
          onChange={handleSliderChange}
          className="h-5 w-full"
          max={max}
          min={min}
          value={rangeValue}
          renderThumb={(props, state) => (
            <div
              style={props.style}
              ref={props.ref}
              key={props.key}
              className="flex aspect-square h-full cursor-grab items-center justify-center rounded-full border-[5px] border-black bg-dove-500 text-xs text-white"
            ></div>
          )}
          renderTrack={(props, state) => {
            const points = Array.isArray(state.value)
              ? state.value.length
              : null
            const isMulti = points && points > 0
            const isLast = isMulti ? state.index === points : state.index != 0
            const isFirst = state.index === 0
            return (
              <div
                {...props}
                className={classNames({
                  'top-1/2 h-1/4 -translate-y-1/2 rounded-full': true,
                  'bg-black/30': isMulti ? isFirst || isLast : isLast,
                  'bg-black': isMulti ? !isFirst || !isLast : isFirst,
                })}
              ></div>
            )
          }}
        />
        {unit ? (
          <div className="w-full flex flex-row justify-between items-center body-xs text-black/70 mt-1">
            <span>
              Min {min} {unit}
            </span>
            <span>
              Max {max} {unit}
            </span>
          </div>
        ) : null}
      </div>
    </SurveyQuestionWrapper>
  )
}

export default SurveyRange

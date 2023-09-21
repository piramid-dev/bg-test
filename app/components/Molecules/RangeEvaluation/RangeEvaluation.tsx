import classNames from 'classnames'
import type { FC } from 'react'
import ReactSlider from 'react-slider'

interface RangeEvaluationProps {
  variant: 'minmax' | 'step'
  labels: string[]
  value: number
  min: number
  max: number
  unit: string
}

const RangeEvaluation: FC<RangeEvaluationProps> = ({
  variant,
  labels,
  value,
  min,
  max,
  unit,
}) => {
  return (
    <div className="p-4 pb-8">
      <ReactSlider
        min={min}
        max={max}
        value={value}
        disabled
        step={variant === 'step' ? labels.length : 1}
        marks={
          variant === 'step'
            ? labels
                .map(
                  (label, idx) =>
                    ((max - min) / labels.length) * (idx + 1) + min,
                )
                .filter((v, idx) => idx !== labels.length - 1)
            : false
        }
        markClassName="h-2 w-[1px] bg-white"
        className={classNames({
          'h-2.5 bg-gradient-grayscale rounded-[40px] border border-white mx-auto':
            true,
          'w-full': variant === 'step',
          'w-10/12': variant === 'minmax',
        })}
        renderThumb={(props, state) => (
          <div
            {...props}
            className="h-full aspect-square bg-yellow-300 relative transition-all duration-700 ease-in-out"
          >
            {variant === 'minmax' ? (
              <>
                <div className="absolute top-3 left-1/2 -translate-x-1/2 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-[#5E5E5E]" />
                <div className="absolute rounded min-w-[5rem] text-center bg-[#5E5E5E] text-white top-5 left-1/2 -translate-x-1/2 px-2 py-1 font-sans body-m !font-semibold">
                  {state.value}
                  {unit}
                </div>
              </>
            ) : null}
          </div>
        )}
      />
      {variant === 'minmax' ? (
        <div className="flex flex-row justify-between mt-2">
          <span className="text-white font-sans uppercase body-s">
            {labels[0]}
          </span>
          <span className="text-white font-sans uppercase body-s">
            {labels[1]}
          </span>
        </div>
      ) : null}
      {variant === 'step' ? (
        <div className="flex flex-row justify-between mt-2">
          {labels.map((label) => (
            <span
              key={label}
              className="text-white font-sans uppercase body-s flex-1 text-center"
            >
              {label}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default RangeEvaluation

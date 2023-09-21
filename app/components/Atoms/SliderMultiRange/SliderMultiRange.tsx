import classNames from 'classnames'
import type { FC } from 'react'
import { useEffect, useState } from 'react'
import ReactSlider from 'react-slider'

import SliderLabel from '../SliderLabel/SliderLabel'

interface SliderMultirangeProps {
  /**
   * Minimum value of the slider
   */
  min: number
  /**
   * Maximum value of the slider
   */
  max: number

  /**
   * Unit of measurement
   */
  unit: string

  /**
   * Callback function when the slider changes
   * @optional
   * @param values - The values of the slider
   * @param values.min - The minimum value of the slider
   * @param values.max - The maximum value of the slider
   * @default undefined
   */
  onChange?: (values: { min: number; max: number }) => void

  values: { min: number; max: number }
}

/**
 * A slider with two handles
 */
const SliderMultiRage: FC<SliderMultirangeProps> = ({
  min = 0,
  max = 100,
  unit,
  onChange,
  values,
}) => {
  const [currentValues, setCurrentValues] = useState<{
    min: number
    max: number
  }>({ min, max })

  useEffect(() => {
    setCurrentValues({ min: values.min, max: values.max })
  }, [values])

  const handleSliderChange = (values: number[]) => {
    setCurrentValues({
      min: values[0],
      max: values[1],
    })

    onChange && onChange({ min: values[0], max: values[1] })
  }

  return (
    <div className="w-5/6">
      <SliderLabel
        min={currentValues.min}
        max={currentValues.max}
        unit={unit}
      />
      <ReactSlider
        onChange={handleSliderChange}
        className="h-5 w-full"
        max={max}
        min={min}
        value={[currentValues.min, currentValues.max]}
        step={max - min <= 100 ? 0.1 : 10}
        renderThumb={(props, state) => (
          <div
            {...props}
            className="flex aspect-square h-full cursor-grab items-center justify-center rounded-full border-[5px] border-black bg-dove-500 text-xs text-white"
          ></div>
        )}
        //thumbClassName="flex aspect-square h-full cursor-grab items-center justify-center rounded-full border-[5px] border-black bg-dove-500 text-xs text-white"
        renderTrack={(props, state) => {
          const points = Array.isArray(state.value) ? state.value.length : null
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
    </div>
  )
}
export default SliderMultiRage

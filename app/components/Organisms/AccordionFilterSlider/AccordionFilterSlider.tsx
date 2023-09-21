import type { FC } from 'react'
import { useEffect, useState } from 'react'

import AccordionFilter from '../../Atoms/AccordionFilter/AccordionFilter'
import SliderMultiRage from '../../Atoms/SliderMultiRange/SliderMultiRange'

interface AccordionFilterSliderProps {
  /**
   * Title of the accordion
   */
  label: string

  /**
   * Minimum value of the slider
   * @default 0
   */
  min?: number

  /**
   * Maximum value of the slider
   * @default 100
   */
  max?: number

  /**
   * Unit of measurement
   */
  unit?: string

  /**
   * Is the accordion open?
   * @default false
   */
  isOpen?: boolean

  locked?: boolean

  onChange?: Function

  range?: { min: number; max: number }
}

const AccordionFilterSlider: FC<AccordionFilterSliderProps> = ({
  label,
  min = 0,
  max = 100,
  unit = '',
  isOpen = false,
  locked = false,
  onChange,
  range = { min, max },
}) => {
  const [values, setValue] = useState(range)

  useEffect(() => {
    setValue(range)
  }, [range])

  const handleSliderChange = (values: { min: number; max: number }) => {
    setValue(values)

    onChange && onChange(values)
  }

  return (
    <AccordionFilter
      title={label}
      defaultOpen={isOpen}
      infoLabel={`Da ${values.min} ${unit} a ${values.max} ${unit}`}
      locked={locked}
    >
      <SliderMultiRage
        min={min}
        max={max}
        unit={unit}
        values={values}
        onChange={handleSliderChange}
      />
    </AccordionFilter>
  )
}

export default AccordionFilterSlider

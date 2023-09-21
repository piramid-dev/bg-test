import type { FC } from 'react'

interface SliderLabelProps {
  /**
   * Minimum value
   */
  min: number

  /**
   * Maximum value
   */
  max: number

  /**
   * Unit of measurement
   */
  unit: string
}

const SliderLabel: FC<SliderLabelProps> = ({ min, max, unit }) => {
  return (
    <div className="body-s mb-5 font-sans text-black/70">
      Da{' '}
      <span className="body-l font-semibold">
        {min} {unit}
      </span>{' '}
      a{' '}
      <span className="body-l font-semibold">
        {max} {unit}
      </span>
    </div>
  )
}

export default SliderLabel

import type { FC } from 'react'

import CardTitle from '../../Atoms/CardTitle/CardTitle'
import RangeEvaluation from '../../Molecules/RangeEvaluation/RangeEvaluation'
import BuyBanner from '../BuyBanner/BuyBanner'

interface CardRangeEvaluationProps {
  title: string
  subtitle?: string
  variant: 'minmax' | 'step'
  labels: string[]
  value: number
  min: number
  max: number
  unit?: string
  locked?: boolean
  info?: string
}

const CardRangeEvaluation: FC<CardRangeEvaluationProps> = ({
  title,
  subtitle,
  variant,
  labels,
  value,
  min,
  max,
  unit,
  locked = false,
  info,
}) => {
  return (
    <div className="border border-white rounded-xl bg-white/10 overflow-hidden">
      <div className="p-4">
        <CardTitle
          title={title}
          locked={locked}
          showInfo={info !== undefined}
          showLock
          variant="light"
        />
        {subtitle ? (
          <div className="body-m mt-4 w-3/4 font-sans text-white/70">
            {subtitle}
          </div>
        ) : null}
      </div>
      {locked ? (
        <BuyBanner withLogin={false} />
      ) : (
        <RangeEvaluation
          variant={variant}
          labels={labels}
          value={value}
          min={min}
          max={max}
          unit={unit || ''}
        />
      )}
    </div>
  )
}

export default CardRangeEvaluation

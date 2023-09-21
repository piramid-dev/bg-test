import type { FC } from 'react'

import CardTitle from '../../Atoms/CardTitle'

interface CardNumberProps {
  title: string
  value: number
  unit: string
  locked?: boolean
  info?: string
}

const CardNumber: FC<CardNumberProps> = ({
  title,
  value,
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
        <div className="font-sans display-s text-white/70 mt-4">
          {value} {unit}
        </div>
      </div>
    </div>
  )
}

export default CardNumber

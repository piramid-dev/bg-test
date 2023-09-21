import classNames from 'classnames'
import type { FC } from 'react'

import type { Maybe } from '~/lib/generated'

import { formatNumber } from '../../../lib/number.utils'
interface DataCompareProps {
  /**
   * Data name
   */
  data?: Maybe<string>
  /**
   * Data declared value
   * @default 'N/A'
   */
  declared?: Maybe<number>
  /**
   * Data measured value
   * @default 'N/A'
   */
  measured?: Maybe<number>

  /**
   * Data unit
   */
  unit?: Maybe<string>

  /**
   * Is the data locked?
   * @default false
   */
  locked?: boolean
}

const DataCompare: FC<DataCompareProps> = ({
  data,
  unit,
  declared,
  measured,
  locked = false,
}) => {
  const declaredValue = declared
    ? `${formatNumber(declared, 0, 2)} ${unit}`
    : 'N/A'
  const measuredValue = measured
    ? `${formatNumber(measured, 0, 2)} ${unit}`
    : 'N/A'

  return (
    <div className="flex flex-row items-center justify-between border-b border-black/40 pb-4 pt-8 last:border-0 last:pb-0 lg:py-4">
      <div className="display-s w-1/3 border-black text-center font-sans">
        {declaredValue}
      </div>
      <div className="h5 !font-normal w-1/3 shrink-0  border-black text-center font-sans uppercase text-black/70">
        {data}
      </div>
      <div
        className={classNames({
          'h4 w-1/3 border-black text-center font-sans': true,
          'select-none blur-lg': locked,
        })}
      >
        {locked ? 'XXXXX' : measuredValue}
      </div>
    </div>
  )
}

export default DataCompare

import classNames from 'classnames'
import type { FC } from 'react'

import type { Maybe } from '~/lib/generated'

import CardTitle from '../../Atoms/CardTitle'
import DataInfo from '../../Atoms/DataInfo'
import BuyBanner from '../../Organisms/BuyBanner'

interface ChartCardProps {
  title?: Maybe<string>
  locked?: boolean
  suggestedUse?: Maybe<string>
  children: React.ReactNode
}

const ChartCard: FC<ChartCardProps> = ({
  title,
  locked = false,
  suggestedUse,
  children,
}) => {
  return (
    <div
      className={classNames({
        'relative w-full overflow-hidden rounded-xl border bg-white': true,
        'card !min-h-fit': !locked,
      })}
    >
      <div
        className={classNames({
          'h-full w-full p-4': true,
          'flex flex-col justify-between': !locked,
        })}
      >
        <CardTitle title={title} locked={locked} showInfo={true} />
        <div
          className={classNames({
            'relative w-full': true,
            'h-40 overflow-hidden': locked,
          })}
        >
          {locked ? (
            <div className="absolute inset-0 z-10 h-full w-full bg-gradient-overlay-blur" />
          ) : null}
          <div
            className={classNames({
              'absolute inset-0 !h-80': locked,
              'relative aspect-square': true,
            })}
          >
            {children}
          </div>
        </div>
        {!locked ? (
          <DataInfo
            data="TOP PER"
            value={suggestedUse}
            customClass="!border-0 !pb-0"
          />
        ) : null}
      </div>
      {locked ? <BuyBanner /> : null}
    </div>
  )
}

export default ChartCard

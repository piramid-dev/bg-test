import classNames from 'classnames'
import type { FC } from 'react'

import type { Maybe } from '~/lib/generated'
import type { ICardInfo } from '~/types/card-info'

import CardTitle from '../../Atoms/CardTitle'
import DataInfo from '../../Atoms/DataInfo/DataInfo'
import BuyBanner from '../BuyBanner/BuyBanner'

interface CardInfoProps {
  title?: Maybe<string>
  locked?: boolean
  showInfoIcon?: boolean
  showLock?: boolean
  infos: ICardInfo[]
  customClass?: string
}

const CardInfo: FC<CardInfoProps> = ({
  title,
  locked = false,
  showLock = true,
  showInfoIcon = false,
  infos,
  customClass = '',
}) => (
  <div
    className={classNames({
      'h-fit overflow-hidden rounded-xl border bg-white': true,
      [customClass]: customClass,
    })}
  >
    <div className="py-4 w-full">
      {title ? (
        <div className="px-4 pb-8">
          <CardTitle
            title={title}
            locked={locked}
            showInfo={showInfoIcon}
            showLock={showLock}
          />
        </div>
      ) : null}
      <div
        className={classNames({
          'relative px-4': true,
          'h-32 overflow-hidden': locked,
        })}
      >
        {infos.map((info, index) => (
          <DataInfo
            {...info}
            key={index}
            blurred={locked || info.locked}
            customClass={index === infos.length - 1 ? '!border-none !pb-0' : ''}
          />
        ))}
        {locked ? (
          <div className="absolute inset-0 z-10 h-full w-full bg-gradient-overlay-blur" />
        ) : null}
      </div>
    </div>

    {locked ? <BuyBanner /> : null}
  </div>
)

export default CardInfo

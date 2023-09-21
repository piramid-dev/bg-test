import classNames from 'classnames'
import type { FC } from 'react'
import React from 'react'

import type { Maybe } from '~/lib/generated'
import type { ICardInfo } from '~/types/card-info'

import CardTitle from '../../Atoms/CardTitle'
import DataInfo from '../../Atoms/DataInfo/DataInfo'

interface CardBasicProps {
  title?: Maybe<string>
  background?: 'white' | 'dove-500' | 'dove' | 'none'
  infos: ICardInfo[]
  customClass?: string
  hasDivider?: boolean
  button: React.ReactNode
}

const CardBasic: FC<CardBasicProps> = ({
  title,
  infos,
  customClass = '',
  background = 'none',
  hasDivider = true,
  button,
}) => (
  <div
    className={classNames({
      'h-fit overflow-hidden rounded-xl border': true,
      [customClass]: customClass,
      'bg-dove-500': background === 'dove-500',
      'bg-dove-300': background === 'dove',
      'bg-white': background === 'white',
    })}
  >
    <div className="py-4 w-full">
      {title ? (
        <div className="px-4 pb-8">
          <CardTitle
            title={title}
            locked={false}
            showInfo={false}
            showLock={false}
          />
        </div>
      ) : null}
      <div
        className={classNames({
          'relative px-4': true,
        })}
      >
        {infos.map((info, index) => (
          <DataInfo
            {...info}
            key={index}
            blurred={false}
            customClass={classNames({
              '!border-none !pb-0': index === infos.length - 1 && !button,
              '!border-none': !hasDivider,
            })}
          />
        ))}
      </div>
      {button ? <div className="px-4 mt-10">{button}</div> : null}
    </div>
  </div>
)

export default CardBasic

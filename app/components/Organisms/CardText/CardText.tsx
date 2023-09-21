import classNames from 'classnames'
import type { FC } from 'react'

import type { Maybe } from '~/lib/generated'

import CardTitle from '../../Atoms/CardTitle'
import BuyBanner from '../BuyBanner'

interface CardTextProps {
  /**
   * Card size
   */
  size?: 'large' | 'regular'

  /**
   * Card title
   */
  title?: Maybe<string>

  /**
   * Card text
   */
  text?: Maybe<string>

  /**
   * Is the card lock visible?
   */
  showLock?: boolean

  /**
   * Is the card locked?
   */
  locked: boolean

  /**
   * Is the card info visible?
   * @default false
   * @optional
   */
  showInfo?: boolean
}

const CardText: FC<CardTextProps> = ({
  title,
  text,
  locked,
  showLock = true,
  size,
  showInfo = false,
}) => {
  return (
    <div className="h-fit overflow-hidden rounded-xl border bg-white">
      <div className="p-4 lg:p-6">
        <CardTitle
          title={title}
          locked={locked}
          showInfo={showInfo}
          showLock={showLock}
        />
        <div
          className={classNames({
            'relative mb-4 mt-16 font-sans': true,
            'display-m': size === 'large',
            'body-xl': size != 'large',
            'line-clamp-2': locked,
          })}
        >
          {locked ? (
            <div className="absolute inset-0 z-10 bg-gradient-overlay-blur"></div>
          ) : null}
          <span>{text}</span>
        </div>
      </div>

      {locked ? <BuyBanner /> : null}
    </div>
  )
}

export default CardText

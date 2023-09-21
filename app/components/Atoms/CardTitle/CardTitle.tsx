import { Info } from '@phosphor-icons/react'
import classNames from 'classnames'
import { LockKey, LockSimpleOpen } from 'phosphor-react'
import type { FC } from 'react'

import type { Maybe } from '~/lib/generated'

interface CardTitleProps {
  variant?: 'dark' | 'light'

  /**
   * Card title
   */
  title?: Maybe<string>

  /**
   * Is the card locked?
   * @default false
   */
  locked: boolean

  /**
   * Is the card info visible?
   * @default false
   * @optional
   */
  showInfo?: boolean

  /**
   * Is the card lock visible?
   * @default true
   */
  showLock?: boolean
}

const CardTitle: FC<CardTitleProps> = ({
  variant = 'dark',
  title,
  locked,
  showInfo = false,
  showLock = true,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div
        className={classNames({
          'h4 font-sans': true,
          'text-white': variant === 'light',
          'text-black': variant === 'dark',
        })}
      >
        {title}
      </div>
      <div className="flex flex-row items-center">
        {showInfo ? (
          <Info
            className={classNames({
              'h-4 w-4 lg:h-5 lg:w-5 mr-2': true,
              'text-white': variant === 'light',
              'text-black/70': variant === 'dark',
            })}
          />
        ) : null}
        {showLock ? (
          locked ? (
            <LockKey className="h-4 w-4 text-red-500 lg:h-5 lg:w-5" />
          ) : (
            <LockSimpleOpen
              className={classNames({
                'h-4 w-4 lg:h-5 lg:w-5': true,
                'text-white/40': variant === 'light',
                'text-black/70': variant === 'dark',
              })}
            />
          )
        ) : null}
      </div>
    </div>
  )
}

export default CardTitle

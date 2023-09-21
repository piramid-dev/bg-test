import { Link } from '@remix-run/react'
import classNames from 'classnames'
import type { FC } from 'react'

import type { Maybe } from '~/lib/generated'

interface ChipProps {
  /**
   * Chip variant
   */
  variant?: 'transparent' | 'overlay' | 'white'

  /**
   * Chip content
   */
  label?: Maybe<string>

  /**
   * Chip to link
   */
  to?: Maybe<string>

  /**
   * Is the chip disabled?
   * @default false
   * @optional
   */
  disabled?: boolean
}

/**
 * Chip component
 */
const Chip: FC<ChipProps> = ({ variant = 'overlay', label, to, disabled }) => {
  const chipClasses = classNames({
    'relative box-content inline-block rounded-3xl border border-transparent px-2 py-[0.1875] font-condensed uppercase':
      true,
    'body-m transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:ring-black hover:shadow-hover hover:ring-1 active:translate-x-0 active:translate-y-0 active:ring-black active:shadow-hover active:ring-2':
      !disabled,
    'body-s text-black/70': disabled,
    //'bg-[#E6E6E6]': variant === 'filled',
    //'bg-black/10': variant === 'transparent',
    'bg-black/10': variant === 'overlay',
    'bg-white': variant === 'white',
    'cursor-default': !to || disabled,
  })
  return (
    <div
      className={classNames({
        'rounded-3x group relative w-fit': true,
        'cursor-pointer': !disabled,
        'cursor-default': disabled,
      })}
    >
      {disabled || !to ? (
        <div className={chipClasses}>{label}</div>
      ) : (
        <Link className={chipClasses} to={to}>
          {label}
        </Link>
      )}
    </div>
  )
}

export default Chip

import { Link } from '@remix-run/react'
import type { FC } from 'react'
import React from 'react'
import {
  CaretLeft,
  CaretRight,
  CaretDown,
  CaretUp,
  ArrowCircleRight,
  ArrowLineDown,
  ArrowsClockwise,
  ArrowLeft,
  ArrowRight,
} from 'phosphor-react'

import type { Maybe } from '~/lib/generated'

interface LinkUnderlineProps {
  /**
   * Link to path
   * @default '/'
   */
  to: string
  /**
   * Link label
   */
  label: string
  /**
   * Link label
   */
  extraClasses?: Maybe<string>

  leftIcon?:
    | undefined
    | 'CaretRight'
    | 'CaretLeft'
    | 'CaretUp'
    | 'CaretDown'
    | 'ArrowCircleRight'
    | 'ArrowLineDown'
    | 'ArrowsClockwise'
    | 'ArrowLeft'
    | 'ArrowRight'

  rightIcon?:
    | undefined
    | 'CaretRight'
    | 'CaretLeft'
    | 'CaretUp'
    | 'CaretDown'
    | 'ArrowCircleRight'
    | 'ArrowLineDown'
    | 'ArrowsClockwise'
    | 'ArrowLeft'
    | 'ArrowRight'
}

const LinkUnderline: FC<LinkUnderlineProps> = ({
  to,
  label,
  extraClasses,
  leftIcon,
  rightIcon,
}) => {
  const iconType = {
    CaretRight,
    CaretLeft,
    CaretUp,
    CaretDown,
    ArrowCircleRight,
    ArrowLineDown,
    ArrowsClockwise,
    ArrowLeft,
    ArrowRight,
  }

  return (
    <Link
      className={'relative inline-flex items-center ' + extraClasses}
      to={to}
    >
      {leftIcon
        ? React.createElement(iconType[leftIcon], {
            className: 'w-5 h-5 mr-2',
            weight: 'light',
          })
        : null}
      <span className="relative overflow-hidden">
        <span className="lined inline-block">{label}</span>
      </span>
      {rightIcon
        ? React.createElement(iconType[rightIcon], {
            className: 'w-5 h-5 ml-2',
            weight: 'light',
          })
        : null}
    </Link>
  )
}

export default LinkUnderline

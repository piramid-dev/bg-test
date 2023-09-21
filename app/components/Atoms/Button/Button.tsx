import {
  ArrowRight,
  ArrowsClockwise,
  Star,
  LockKey,
  Funnel,
  CaretDown,
  X,
  ArrowLeft,
  Play,
  FacebookLogo,
  TwitterLogo,
  ShareNetwork,
  MagicWand,
  Info,
  SignOut,
  UserCircle,
} from '@phosphor-icons/react'
import classNames from 'classnames'
import type { FC } from 'react'
import React from 'react'
import { Link } from '@remix-run/react'

import type { Maybe } from '~/lib/generated'

import StarIcon from '../../Icons/StarIcon'

interface ButtonProps {
  /**
   * Is button primary or secondary?
   * @default 'primary'
   */
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'outline-inverted'
    | 'outline-dark'
    | 'tertiary'
    | 'filter'
    | 'filter-active'
    | 'transparent'
  /**
   * Button contents
   */
  label?: string | React.ReactNode
  children?: string
  /**
   * Icon
   */
  icon?:
    | null
    | 'ArrowRight'
    | 'Star'
    | 'LockKey'
    | 'Funnel'
    | 'CaretDown'
    | 'X'
    | 'ArrowLeft'
    | 'Play'
    | 'FacebookLogo'
    | 'TwitterLogo'
    | 'ShareNetwork'
    | 'MagicWand'
    | 'ArrowsClockwise'
    | 'Info'
    | 'ShareNetwork'
    | 'SignOut'
    | 'UserCircle'
  /**
   * Icon position
   */
  iconPos?: 'left' | 'right'
  /**
   * Button type
   */
  type?: 'button' | 'submit' | 'reset'
  /**
   * Is form submitting
   */
  isSubmitting?: boolean
  /**
  /**
   * Is form disabled
   */
  disabled?: boolean
  /**
   * Optional click handler
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  /**
   * button to link
   */
  to?: Maybe<string>

  /**
   * Has a specific font size?
   */
  extraClasses?: string

  /**
   * Is compressed?
   */
  isCompressed?: boolean

  /**
   * Optional class name
   */
  containerClassName?: string

  /**
   * If we have just the icon, don't hide it on mobile
   */
  onlyIcon?: boolean
}

/**
 * Primary UI component for user interaction
 */
const Button: FC<ButtonProps> = ({
  variant = 'primary',
  icon = null,
  iconPos = 'left',
  type = 'button',
  label = '',
  children = '',
  containerClassName = '',
  isSubmitting = false,
  disabled = false,
  to,
  isCompressed = false,
  extraClasses = '',
  onlyIcon = false,
  ...props
}) => {
  const iconRight = iconPos === 'right'
  const iconWeight = 'light'
  const iconClasses = classNames({
    'mr-2': label || (children && iconPos === 'right'),
    'ml-2': label || (children && iconPos !== 'right'),
    'text-black/90': variant === 'outline',
    'hidden lg:inline-block': !onlyIcon && (children || label), //if there is no label or children, don't hide the icon
  })
  // const iconMargins = iconRight
  //   ? 'mr-2 hidden lg:inline-block'
  //   : 'ml-2 hidden lg:inline-block'
  // const iconClasses = label || children
  //     ? iconMargins
  //     : variant === 'outline'
  //     ? 'text-black/90 hidden lg:inline-block'
  //     : ' hidden lg:inline-block'

  const iconType = {
    ArrowLeft,
    ArrowRight,
    Star,
    LockKey,
    Funnel,
    CaretDown,
    X,
    Play,
    FacebookLogo,
    TwitterLogo,
    ShareNetwork,
    MagicWand,
    ArrowsClockwise,
    Info,
    SignOut,
    UserCircle,
  }

  const notHoverableVariants = [
    'filter',
    'filter-active',
    'outline',
    'tertiary',
    'outline-dark',
  ]

  const _label = isSubmitting ? 'Submitting...' : label || children

  const btnClasses = classNames({
    'box-border flex w-full items-center justify-center whitespace-nowrap rounded-full px-4 py-2 transition-all duration-300 lg:px-5 lg:py-3 transition-all duration-300':
      true,
    'inner-border lg:hover:-translate-x-1 lg:hover:-translate-y-1 lg:hover:shadow-hover active:translate-x-0 active:translate-y-0 active:shadow-hover':
      !notHoverableVariants.includes(variant),
    '!p-3 lg:hover:border-black/90 lg:hover:inner-border active:inner-border-[3px] lg:hover:bg-white active:bg-white':
      variant === 'outline',
    '!p-3 inner-border border-black/90 lg:hover:bg-white active:inner-border-[3px]':
      variant === 'outline-inverted',
    'bg-black text-white lg:hover:ring-white lg:hover:ring-1 ':
      variant === 'primary',
    '!text-black bg-white inner-border-black': variant === 'secondary',
    'flex-row-reverse': iconRight,
    'px-6': label || children,
    'body-m rounded-xl bg-black !px-4 !py-2 font-sans text-white ring-white ring-1':
      variant === 'filter',
    'body-m rounded-xl bg-white !px-4 !py-2 font-sans ring-black text-black ring-1':
      variant === 'filter-active',
    '!p-2.5 lg:!p-4': !label && !children && !onlyIcon,
    '!py-1 !px-3': isCompressed,
    '!cursor-not-allowed': isSubmitting || disabled,
    '!p-3 lg:hover:border-black/90 lg:hover:inner-border active:inner-border-[3px] bg-white text-black':
      variant === 'outline-dark',
    '!p-2.5 lg:!p-3': onlyIcon,
    'hover:shadow-none active:!translate-x-0 active:!translate-y-0 hover:!translate-x-0 hover:!translate-y-0':
      disabled,
    '!border-0 bg-black/30': variant === 'primary' && disabled,
    '!inner-border-black/30 bg-white !text-black/30':
      variant === 'secondary' && disabled,
  })

  function btnContent() {
    return (
      <>
        {variant === 'tertiary' ? (
          <span className="flex flex-row items-center hover:underline">
            <StarIcon />
            <span className="display-body mx-3 font-sans">{label}</span>
            <StarIcon />
          </span>
        ) : (
          <>
            <span className="text-center"> {_label}</span>

            {icon
              ? React.createElement(iconType[icon], {
                  className: iconClasses,
                  weight: iconWeight,
                  size: onlyIcon == true ? 24 : 20,
                })
              : null}
          </>
        )}
      </>
    )
  }

  return (
    <span
      className={classNames({
        'group relative inline-block font-sans bg-blend-multiply': true,
        '!text-lg': isCompressed,
        [containerClassName]: true,
        [extraClasses]: true,
        'body-xl': !extraClasses && !isCompressed,
      })}
    >
      {to ? (
        <Link to={to} className={btnClasses}>
          {btnContent()}
        </Link>
      ) : (
        <button
          type={type}
          disabled={isSubmitting || disabled}
          className={btnClasses}
          {...props}
        >
          {btnContent()}
        </button>
      )}
    </span>
  )
}

export default Button

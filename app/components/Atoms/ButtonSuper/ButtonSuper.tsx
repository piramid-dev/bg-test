import { ArrowRight } from '@phosphor-icons/react'
import classNames from 'classnames'
import type { FC } from 'react'
import { useState } from 'react'
import { Link } from '@remix-run/react'

import type { Maybe } from '~/lib/generated'
interface ButtonSuperProps {
  /**
   * Is button primary or secondary?
   * @default 'primary'
   */
  variant?: 'primary' | 'filled'
  /**
  /**
   * ButtonSuper contents
   */
  label?: string

  /**
   * left image
   */
  leftImageSrc: string
  /**
   * Optional click handler
   */
  onClick?: (e: any) => void
  /**
   * button to link
   */
  to?: Maybe<string>
}

const ButtonSuper: FC<ButtonSuperProps> = ({
  variant = 'primary',
  label = '',
  leftImageSrc,
  to,
  onClick,
}) => {
  const [isHover, setIsHover] = useState(false)

  if (to) {
    return (
      <Link
        to={to}
        className={classNames({
          'relative inline-block h-11 xl:h-20 w-fit cursor-pointer rounded-[10rem] px-6 xl:px-10 py-1.5 xl:py-4 ring-black transition-all duration-300 ring-1  hover:-translate-x-0.5  xl:hover:-translate-x-1 hover:-translate-y-0.5 xl:hover:-translate-y-1 hover:shadow-hover-xl hover:ring-2 active:translate-x-0.5 xl:active:translate-x-1 active:translate-y-0.5 xl:active:translate-y-1 active:ring-4':
            true,
          '!bg-white': variant === 'filled',
        })}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className="absolute left-6 xl:left-10 top-0 z-0 h-full w-11 xl:w-20">
          <img
            src={leftImageSrc}
            alt={label}
            className={classNames({
              'h-full w-full object-cover	transition-all duration-300': true,
              'opacity-100': !isHover,
              'opacity-0': isHover,
            })}
          />
        </div>
        <div className="absolute right-6 xl:right-10 top-0 z-0 flex h-full w-11 xl:w-20 items-center justify-center">
          <ArrowRight
            weight="light"
            className={classNames({
              'h-11 xl:h-20 w-11 xl:w-14 transition-all duration-300': true,
              'opacity-0': !isHover,
              'opacity-100': isHover,
            })}
          />
        </div>
        <span
          className={classNames({
            'text-sans display-m relative z-20 float-left flex h-full items-center justify-center transition-all duration-300':
              true,
            'ml-11 xl:ml-20 mr-0': !isHover,
            'ml-0  mr-11 xl:mr-20': isHover,
          })}
        >
          {label}
        </span>
      </Link>
    )
  }

  return (
    <div
      onClick={onClick}
      className={classNames({
        'relative h-11 xl:h-20 w-fit cursor-pointer rounded-[10rem] px-6 xl:px-10 py-1.5 xl:py-4 ring-black transition-all duration-300 ring-1 hover:-translate-x-0.5  xl:hover:-translate-x-1 hover:-translate-y-0.5 xl:hover:-translate-y-1 hover:shadow-hover-xl hover:ring-2 active:translate-x-0.5 xl:active:translate-x-1 active:translate-y-0.5 xl:active:translate-y-1 active:ring-4':
          true,
        '!bg-white': variant === 'filled',
      })}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="absolute left-6 xl:left-10 top-0 z-0 h-full w-11 xl:w-20">
        <img
          src={leftImageSrc}
          alt={label}
          className={classNames({
            'h-full w-full transition-all duration-300': true,
            'opacity-100': !isHover,
            'opacity-0': isHover,
          })}
        />
      </div>
      <div className="absolute right-6 xl:right-10 top-0 z-0 flex h-full w-11 xl:w-20 items-center justify-center">
        <ArrowRight
          weight="light"
          className={classNames({
            'h-11 xl:h-20 w-11 xl:w-14 transition-all duration-300': true,
            'opacity-0': !isHover,
            'opacity-100': isHover,
          })}
        />
      </div>
      <span
        className={classNames({
          'text-sans display-m relative z-20 float-left flex h-full items-center justify-center transition-all duration-300':
            true,
          'ml-11 xl:ml-20 mr-0': !isHover,
          'ml-0  mr-11 xl:mr-20': isHover,
        })}
      >
        {label}
      </span>
    </div>
  )
}

export default ButtonSuper

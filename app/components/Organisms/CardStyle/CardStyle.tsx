import classNames from 'classnames'
import type { FC } from 'react'
import { Link } from '@remix-run/react'

import type { Maybe } from '~/lib/generated'

interface CardStyleProps {
  variant: 'dark' | 'light'
  title: string
  subtitle: string
  imageUrl: string
  to?: Maybe<string>
}

const CardStyle: FC<CardStyleProps> = ({
  title,
  subtitle,
  imageUrl,
  variant,
  to,
}) => {
  return (
    <div
      className={classNames({
        'relative flex flex-col items-center justify-end bg-cover bg-center p-4 aspect-[19/30]':
          true,
        'card-container': variant === 'dark',
        'card-container-light': variant === 'light',
      })}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 h-full w-full bg-gradient-overlay"></div>
      <div className="z-10 text-center text-white/90">
        <div className="h3 mb-6 font-sans">{title}</div>
        <div className="body-l font-sans">{subtitle}</div>
      </div>
      {to ? (
        <Link
          to={to || ''}
          className="absolute w-full h-full left-0 top-0 block"
        >
          {' '}
        </Link>
      ) : null}
    </div>
  )
}

export default CardStyle

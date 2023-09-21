import classNames from 'classnames'
import type { FC } from 'react'
import { Link } from '@remix-run/react'

import type { Maybe } from '~/lib/generated'

interface CardBrandProps {
  variant: 'dark' | 'light'
  name: string
  imageUrl: string
  to?: Maybe<string>
}

const CardBrand: FC<CardBrandProps> = ({ name, imageUrl, variant, to }) => {
  return (
    <div
      className={classNames({
        'relative flex aspect-tall flex-col items-center justify-end bg-cover bg-center p-4':
          true,
        'card-container': variant === 'dark',
        'card-container-light': variant === 'light',
      })}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 h-full w-full bg-gradient-overlay"></div>
      <div className="h4 z-10 text-center font-sans text-white/90">{name}</div>
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

export default CardBrand

import classNames from 'classnames'
import type { FC } from 'react'
import { Link } from '@remix-run/react'

import type { Maybe } from '~/lib/generated'
import type { NewsTypes, ColorTypes } from '~/types/globalTypes'

import Chip from '../../Atoms/Chip'

interface CardNewsProps {
  variant?: 'dark' | 'light'
  type?: NewsTypes
  color?: ColorTypes
  chips: Array<{
    label: string
    to: string
    variant: 'transparent' | 'overlay' | 'white'
  }>
  title?: Maybe<string>
  description?: Maybe<string>
  imageUrl?: Maybe<string>
  to?: Maybe<string>
  containerClass?: string
}

const CardNews: FC<CardNewsProps> = ({
  color,
  chips,
  title,
  description,
  imageUrl,
  variant = 'light',
  to,
  containerClass = '',
}) => {
  return (
    <div
      className={classNames({
        'card-container': variant === 'light',
        'card-container-light': variant === 'dark',
        'overflow-hidden relative !h-auto': true,
        [containerClass]: containerClass,
      })}
    >
      <div
        className="relative aspect-pano bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div
        className={classNames({
          'flex flex-col justify-between p-4': true,
          'bg-red-500': color === 'red',
          'bg-purple-500': color === 'purple',
          'bg-green-500': color === 'green',
          'bg-blue-500': color === 'blue',
          'bg-white': color === 'white',
        })}
      >
        <div>
          <div className="flex flex-row gap-1">
            {chips.map((chip, idx) => (
              <Chip
                key={idx}
                label={chip.label}
                variant={chip.variant}
                disabled={true}
              />
            ))}
          </div>
          <div className="h4 mb-4 mt-7 line-clamp-3 h-[3.06em] font-serif !font-bold ">
            {title}
          </div>
        </div>
        <div className="body-l flex h-[2.6em] font-serif text-black/70">
          <div
            className="mt-auto line-clamp-2 h-auto"
            dangerouslySetInnerHTML={{ __html: description || '' }}
          ></div>
        </div>
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

export default CardNews

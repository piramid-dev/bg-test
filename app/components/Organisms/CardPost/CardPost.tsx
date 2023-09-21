import classNames from 'classnames'
import type { FC } from 'react'
import { Link } from '@remix-run/react'

import type { Maybe } from '~/lib/generated'
import type { ColorTypes } from '~/types/globalTypes'

import Chip from '../../Atoms/Chip'
import Button from '../../Atoms/Button'

interface CardPostProps {
  type: 'even' | 'odd'
  chips: Array<{
    label: string
    to: string
    variant: 'transparent' | 'overlay' | 'white'
  }>
  color?: ColorTypes
  title?: Maybe<string>
  description?: Maybe<string>
  imageUrl?: Maybe<string>
  label?: string
  to?: Maybe<string>
}

const CardPost: FC<CardPostProps> = ({
  chips,
  title,
  description,
  imageUrl,
  to,
  color,
  label = 'Read more',
}) => {
  return (
    <div
      className={classNames({
        'card-container overflow-hidden relative lg:flex h-[43rem] lg:h-[38rem]':
          true,
        'bg-red-500': color === 'red',
        'bg-purple-500': color === 'purple',
        'bg-green-500': color === 'green',
        'bg-blue-500': color === 'blue',
        'bg-white': color === 'white',
      })}
    >
      <div
        className="relative aspect-pano bg-cover bg-center bg-no-repeat h-[21.5rem] w-full lg:h-auto lg:w-7/12 border-r border-black"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="p-4 lg:w-5/12 lg:py-16 text-left">
        <div>
          <div className="flex flex-row gap-1 ">
            {chips.map((chip, idx) => (
              <Chip
                key={chip.label}
                label={chip.label}
                variant={chip.variant}
                disabled={true}
              />
            ))}
          </div>
          <h3 className="h3 my-4 lg:my-8 line-clamp-3 h-[3em] font-serif !font-bold ">
            {title}
          </h3>
        </div>
        <div className="display-s h-[3.8em] font-serif text-black/70 mb-4 lg:mb-8">
          <div
            className="line-clamp-2 h-auto"
            dangerouslySetInnerHTML={{ __html: description || '' }}
          ></div>
        </div>
        {to ? (
          <Button variant="outline-inverted" label={label} to={to} />
        ) : null}
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

export default CardPost

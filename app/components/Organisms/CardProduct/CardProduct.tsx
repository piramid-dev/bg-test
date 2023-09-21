import type { FC } from 'react'
import { Link } from '@remix-run/react'
import classNames from 'classnames'

import type { Maybe } from '~/lib/generated'

import { useLocalizeLink } from '../../../hooks/useLocalizeLink'
import Supermatch from '../../Atoms/Supermatch'
import Chip from '../../Atoms/Chip'
import Prize from '../../Atoms/Prize'

interface CardProductProps {
  name: string
  brand?: {
    name: string
    slug: string
  }
  chips: string[]
  imageUrl?: Maybe<string>
  awards?: { name: string; color: string }[]
  testedPreview?: string
  firstInfo?: string
  secondInfo: string
  supermatch?: boolean
  to?: Maybe<string>
  containerClass?: string
}

const CardProduct: FC<CardProductProps> = ({
  name,
  brand,
  chips,
  imageUrl,
  awards,
  testedPreview,
  firstInfo,
  secondInfo,
  supermatch = false,
  to,
  containerClass = '',
}) => {
  const { l } = useLocalizeLink()

  return (
    <>
      <div
        className={classNames({
          'card-container relative': true,
          [containerClass]: containerClass,
        })}
      >
        <div
          className="relative flex aspect-square flex-col gap-2 border-b border-b-black bg-cover bg-no-repeat px-2 py-3 md:p-4"
          style={{
            backgroundImage: `url(${
              imageUrl || 'https://placehold.co/500x500'
            })`,
          }}
        >
          {awards?.map((prize) => (
            <Prize key={prize.name} label={prize.name} color={prize.color} />
          ))}
          {testedPreview ? (
            <div className="absolute bottom-10 left-0 origin-bottom -rotate-90 text-sm uppercase leading-none text-black/70">
              {testedPreview}
            </div>
          ) : null}
        </div>
        <div className="px-2 py-3 md:p-4 bg-white">
          <div>
            <div className="flex gap-1">
              {chips
                ? chips.map((chip) => (
                    <Chip key={chip} label={chip} disabled={true} />
                  ))
                : null}
            </div>
            <div className="body-l mt-3 font-sans text-black">
              {brand?.name}
            </div>
            <div className="h4 mb-4 line-clamp-2 h-[2.05em] font-sans text-black">
              {name}
            </div>
          </div>
          <div className="body-m font-sans text-black/70">
            <div className="line-clamp-1">{firstInfo}</div>
            <div className="line-clamp-1">{secondInfo}</div>
          </div>
        </div>
        {to ? (
          <Link
            to={l(to) || ''}
            className="absolute w-full h-full left-0 top-0 block"
          >
            {' '}
          </Link>
        ) : null}
      </div>
      {supermatch ? <Supermatch /> : null}
    </>
  )
}

export default CardProduct

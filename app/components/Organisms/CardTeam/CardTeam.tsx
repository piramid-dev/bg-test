import type { FC } from 'react'
import { Link } from '@remix-run/react'

import type { Maybe } from '~/lib/generated'

import Chip from '../../Atoms/Chip'

interface CardTeamProps {
  chips: string[]
  name: string
  surname: string
  qualification: string
  profileImageUrl: string
  to?: Maybe<string>
}

const CardTeam: FC<CardTeamProps> = ({
  chips,
  name,
  surname,
  qualification,
  profileImageUrl,
  to,
}) => {
  return (
    <div className="card-container bg-dove-500 relative">
      <div className="flex items-center justify-center p-3 max-w-[240px] mx-auto">
        <div
          className="aspect-square w-full rounded-full bg-cover bg-center ring-black ring-2"
          style={{ backgroundImage: `url(${profileImageUrl})` }}
        ></div>
      </div>
      <div className="flex flex-grow flex-col items-center justify-between p-4">
        <div>
          <div className="flex w-full justify-center gap-1">
            {chips.map((chip, idx) => (
              <Chip
                key={chip}
                label={chip}
                variant={idx === chips.length - 1 ? 'white' : 'overlay'}
                disabled={true}
              />
            ))}
          </div>
          <div className="h4 my-4 line-clamp-3 h-[3.06em] break-all text-center font-sans">
            <div className="">{name}</div>
            <div className="">{surname}</div>
          </div>
        </div>
        <div className="body-m flex h-[2.6em] text-center font-sans text-black/70">
          <div className="mt-auto line-clamp-2 h-auto">{qualification}</div>
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

export default CardTeam

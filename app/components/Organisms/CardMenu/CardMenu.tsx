import classNames from 'classnames'
import type { FC } from 'react'
import { Link } from '@remix-run/react'

import type { Maybe } from '~/lib/generated'

interface CardMenuProps {
  title: string
  imageUrl: string
  to?: Maybe<string>
  callback?: React.MouseEventHandler<HTMLAnchorElement>
}

const CardMenu: FC<CardMenuProps> = ({ title, imageUrl, to, callback }) => {
  return (
    <div
      className={classNames({
        'relative flex flex-col items-center justify-end bg-cover bg-center p-4 aspect-[19/25] overflow-hidden rounded-xl group':
          true,
      })}
    >
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-center group-hover:scale-125 transition-all ease-out duration-300"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="absolute inset-0 h-full w-full bg-gradient-overlay"></div>
      <div className="body-l !font-bold z-10 text-center font-sans text-white/90 pointer-events-none">
        {title}
      </div>
      {to ? (
        <Link
          to={to || ''}
          className="absolute w-full h-full left-0 top-0 block z-10"
          onClick={callback}
        >
          {' '}
        </Link>
      ) : null}
    </div>
  )
}

export default CardMenu

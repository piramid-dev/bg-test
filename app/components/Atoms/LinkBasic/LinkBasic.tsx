import { Link } from '@remix-run/react'
import type { FC } from 'react'

import type { Maybe } from '~/lib/generated'

interface LinkBasicProps {
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
}

const LinkBasic: FC<LinkBasicProps> = ({ to, label, extraClasses }) => {
  return (
    <Link
      className={
        'body-m rounded-xl px-2 py-1 font-sans transition-all duration-300 hover:bg-dove-300 active:bg-dove-500 ' +
        extraClasses
      }
      to={to}
    >
      {label}
    </Link>
  )
}

export default LinkBasic

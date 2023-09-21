import type { FC } from 'react'

import type { Maybe } from '~/lib/generated'
import { useContext } from '~/hooks/useContext'

import CardTitle from '../../Atoms/CardTitle'
import DataInfo from '../../Atoms/DataInfo'
import BuyBanner from '../BuyBanner/BuyBanner'

interface CardSummaryProps {
  /**
   * Card title
   */
  title?: Maybe<string>

  /**
   * Is the card locked?
   */
  locked: boolean

  /**
   * Apt text
   */
  apt_text?: Maybe<string>

  /**
   * Not Apt Text
   */
  not_apt_text?: Maybe<string>

  /**
   * Also Apt Text
   */
  also_apt_text?: Maybe<string>
}

const CardSummary: FC<CardSummaryProps> = ({
  title,
  locked,
  apt_text,
  not_apt_text,
  also_apt_text,
}) => {
  const { validPass } = useContext()
  locked = !validPass
  return (
    <div className="w-[min(100%,_48.5rem)] overflow-hidden rounded-xl border bg-dove-300">
      <div className="p-4">
        <CardTitle title={title} locked={locked} />
        <DataInfo
          data="Adatto a"
          value={apt_text}
          icon="CheckCircle"
          blurred={locked}
        />
        <DataInfo
          data="Non adatto a"
          value={not_apt_text}
          icon="XCircle"
          blurred={locked}
        />
        <DataInfo
          data="Adatto anche"
          value={also_apt_text}
          icon="MinusCircle"
          customClass="!border-0"
          blurred={locked}
        />
      </div>

      {locked ? <BuyBanner /> : null}
    </div>
  )
}

export default CardSummary

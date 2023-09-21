import classNames from 'classnames'
import { LockKey } from 'phosphor-react'
import type { FC } from 'react'

import type { Maybe } from '~/lib/generated'
import { useContext } from '~/hooks/useContext'

import DataCompare from '../../Molecules/DataCompare'
import BuyBanner from '../BuyBanner/BuyBanner'

interface CardDataCompareProps {
  mainLabel?: Maybe<string>
  mainData?: Maybe<string>
  measurements: {
    data?: Maybe<string>
    declared?: Maybe<number>
    measured?: Maybe<number>
    unit?: Maybe<string>
  }[]
  locked?: boolean
}

const CardDataCompare: FC<CardDataCompareProps> = ({
  mainLabel,
  mainData,
  measurements,
  locked = false,
}) => {
  const { validPass } = useContext()
  locked = !validPass
  return (
    <div className="w-full overflow-hidden rounded-xl border bg-white">
      <div className="h5 !font-normal flex flex-row items-center justify-between bg-black p-8 font-sans text-white lg:px-10 lg:py-4">
        <span className="text-center uppercase">Dati dichiarati</span>
        <span className="flex flex-row items-center gap-4 text-center uppercase">
          Misurati da noi
          <LockKey
            className={classNames({
              'h-4 w-4': true,
              'text-red-500': locked,
              'text-white': !locked,
            })}
          />
        </span>
      </div>
      {mainData && mainLabel ? (
        <div className="body-m px-4 py-6 font-sans">
          Abbiamo misurato {mainLabel} <b>{mainData}</b> per scoprire tutti i
          dettagli
        </div>
      ) : null}

      <div className="px-4 pb-4">
        {measurements.map((measurement, index) => (
          <DataCompare {...measurement} locked={locked} key={index} />
        ))}
      </div>
      {locked ? <BuyBanner /> : null}
    </div>
  )
}

export default CardDataCompare

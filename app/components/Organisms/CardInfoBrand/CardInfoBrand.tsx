import classNames from 'classnames'
import type { FC } from 'react'

import type { Maybe } from '~/lib/generated'
import type { ICardInfo } from '~/types/card-info'

import CardText from '../CardText/CardText'
import DataInfo from '../../Atoms/DataInfo/DataInfo'

interface CardInfoBrandProps {
  /**
   * Card title
   */
  title?: Maybe<string>

  /**
   * Card text
   */
  text?: Maybe<string>

  infos: ICardInfo[]

  logo?: Maybe<string>
}

const CardInfoBrand: FC<CardInfoBrandProps> = ({
  title,
  text,
  infos,
  logo,
}) => {
  return (
    <div className="container py-4 lg:py-20">
      <div className="flex flex-col gap-4 lg:flex-row ">
        <div className="h-fit overflow-hidden rounded-xl border bg-white lg:w-1/2">
          <div className="py-4 w-full">
            {logo ? (
              <div className="px-4 pb-12">
                <img src={logo} alt="" className="w-[250px] h-auto" />
              </div>
            ) : null}
            <div
              className={classNames({
                'relative px-4': true,
              })}
            >
              {infos.map((info, index) => (
                <DataInfo
                  {...info}
                  key={index}
                  blurred={false}
                  customClass={
                    index === infos.length - 1 ? '!border-none !pb-0' : ''
                  }
                />
              ))}
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <CardText
            title={title}
            text={text}
            locked={false}
            showLock={false}
            size="regular"
          />
        </div>
      </div>
    </div>
  )
}

export default CardInfoBrand

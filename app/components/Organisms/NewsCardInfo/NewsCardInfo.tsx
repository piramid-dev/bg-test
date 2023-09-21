import classNames from 'classnames'
import type { FC } from 'react'

import type { ICardInfo } from '~/types/card-info'
import type { Maybe } from '~/lib/generated'

import DataInfo from '../../Atoms/DataInfo/DataInfo'

interface NewsCardInfoProps {
  title?: Maybe<string>
  imageUrl: string
  infos: ICardInfo[]
}

const NewsCardInfo: FC<NewsCardInfoProps> = ({ title, imageUrl, infos }) => (
  <div
    className={classNames({
      'h-fit overflow-hidden rounded-xl border bg-white': true,
    })}
  >
    <div className="pb-4 w-full">
      {title ? (
        <div
          className="px-4 mb-8 bg-cover bg-center h-[14rem] flex justify-center overflow-hidden  relative"
          style={{ backgroundImage: `url(${imageUrl}` }}
        >
          <div className="absolute inset-0 bg-cover bg-center  bg-gradient-overlay" />
          <h4 className="h4 font-sans text-white/90 mt-auto mb-6 relative">
            {title}
          </h4>
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
            customClass={index === infos.length - 1 ? '!border-none !pb-0' : ''}
          />
        ))}
      </div>
    </div>
  </div>
)

export default NewsCardInfo

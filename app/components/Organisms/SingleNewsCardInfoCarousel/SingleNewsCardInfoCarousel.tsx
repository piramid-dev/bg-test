import { useState, type FC, useEffect, useRef } from 'react'
import classNames from 'classnames'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import type { ICardInfo } from '~/types/card-info'
import type { Maybe } from '~/lib/generated'

import NewsCardInfo from '../NewsCardInfo/NewsCardInfo'
import 'swiper/swiper-bundle.min.css'

interface SingleNewsCardInfoCarouselProps {
  infoCards: {
    title?: Maybe<string>
    imageUrl: string
    infos: ICardInfo[]
  }[]
  legend?: Maybe<string>
}

const SingleNewsCardInfoCarousel: FC<SingleNewsCardInfoCarouselProps> = ({
  infoCards,
  legend,
}) => {
  const sliderRef = useRef<any>(null)

  const [progress, setProgress] = useState(0)
  const [left, setLeft] = useState(0)
  const positions = infoCards.length || 1

  useEffect(() => {
    const newLeft = Math.max(
      ((100 * progress) / positions) * (infoCards.length - 1),
      0,
    )
    setLeft(newLeft)
  }, [positions, progress, infoCards])

  return (
    <div className="lg:container py-14 lg:py-12">
      <div
        className={classNames({
          'relative h-[1px] w-[114px] bg-black mx-auto': true,
          'lg:hidden': infoCards.length <= 4,
        })}
      >
        <div
          className="absolute top-1/2 h-[3px] -translate-y-1/2 rounded-xl transition-all duration-300 bg-black"
          style={{
            width: `calc(100% / ${positions})`,
            left: `${left}%`,
          }}
        ></div>
      </div>
      <div
        className={classNames({
          'px-4 lg:pl-0': true,
          'lg:pr-0': infoCards.length <= 4,
        })}
      >
        <Swiper
          ref={sliderRef}
          breakpoints={{
            0: {
              slidesPerView: 1.3,
              spaceBetween: 16,
            },
            580: {
              slidesPerView: 2.3,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: infoCards.length <= 4 ? 4 : 4.3,
              spaceBetween: 8,
            },
          }}
          modules={[Pagination]}
          className="mt-10 !overflow-visible p-2"
          onSlideChange={({ progress }) => setProgress(progress)}
        >
          {infoCards.map((infoCard, idx) => (
            <SwiperSlide key={idx}>
              <NewsCardInfo {...infoCard} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-4 font-sans body-m">{legend}</div>
    </div>
  )
}

export default SingleNewsCardInfoCarousel

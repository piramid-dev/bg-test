import { useState, type FC, useEffect, useRef } from 'react'
import classNames from 'classnames'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import type { Maybe } from '~/lib/generated'
import type { NewsTypes, ColorTypes } from '~/types/globalTypes'

import CardNews from '../CardNews/CardNews'
import 'swiper/swiper-bundle.min.css'
import Button from '../../Atoms/Button'
import CarouselNavigation from '../../Molecules/CarouselNavigation'
import SectionWrapper from '../../Atoms/SectionWrapper'

interface ShelfNewsCarouselProps {
  variant?: 'dark' | 'light'
  title?: Maybe<string>
  showAllLabel?: Maybe<string>
  showAllTo?: Maybe<string>
  news: {
    type: NewsTypes
    color: ColorTypes
    title?: Maybe<string>
    chips: Array<{
      label: string
      to: string
      variant: 'transparent' | 'overlay' | 'white'
    }>
    description?: Maybe<string>
    imageUrl?: Maybe<string>
  }[]
}

const ShelfNewsCarousel: FC<ShelfNewsCarouselProps> = ({
  title,
  news,
  variant = 'light',
  showAllLabel,
  showAllTo,
}) => {
  const sliderRef = useRef<any>(null)

  const [progress, setProgress] = useState(0)
  const [left, setLeft] = useState(0)
  const positions = Math.ceil(news.length - 3) + 1 || 1

  useEffect(() => {
    const newLeft = Math.max(100 * progress - 100 / positions, 0)
    setLeft(newLeft)
  }, [positions, progress])

  return (
    <SectionWrapper
      background={variant === 'dark' ? 'black' : 'white'}
      containerClass="py-12 md:py-16 lg:py-12 "
    >
      <div className="flex flex-row items-center justify-between w-full max-lg:flex-wrap ">
        <div
          className={classNames({
            'h3 grow font-serif !font-bold lg:w-1/3': true,
            'text-black': variant === 'light',
            'text-white': variant === 'dark',
          })}
        >
          {title}
        </div>
        <div className="hidden grow justify-center lg:flex lg:w-1/3">
          <div
            className={classNames({
              'relative h-[1px] w-20': true,
              'bg-black': variant === 'light',
              'bg-white': variant === 'dark',
            })}
          >
            <div
              className={classNames({
                'absolute top-1/2 h-[3px] -translate-y-1/2 rounded-xl transition-all duration-300':
                  true,
                'bg-black': variant === 'light',
                'bg-white': variant === 'dark',
              })}
              style={{
                width: `calc(100% / ${positions})`,
                left: `${left}%`,
              }}
            ></div>
          </div>
        </div>
        <div className="mr-0 lg:mt-12 flex lg:grow lg:mt-0 lg:w-1/3 lg:justify-end">
          {showAllLabel && showAllTo ? (
            <Button
              variant="secondary"
              label={showAllLabel}
              to={showAllTo}
              iconPos="left"
              icon="ArrowRight"
            />
          ) : null}
        </div>
      </div>
      <div className="pr-4">
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
              slidesPerView: 3.3,
              spaceBetween: 12,
            },
          }}
          modules={[Pagination]}
          className="mt-10 !overflow-visible p-2"
          onSlideChange={({ progress }) => setProgress(progress)}
        >
          {news.map((news, idx) => (
            <SwiperSlide key={idx}>
              <CardNews {...news} variant={variant} />
            </SwiperSlide>
          ))}
          <CarouselNavigation sliderRef={sliderRef} />
        </Swiper>
      </div>
    </SectionWrapper>
  )
}

export default ShelfNewsCarousel

import { type FC } from 'react'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import classNames from 'classnames'

import type { Maybe } from '~/lib/generated'
import type { NewsTypes } from '~/types/globalTypes'

import Button from '../../Atoms/Button'
import SectionWrapper from '../../Atoms/SectionWrapper'
import CardNews from '../CardNews/CardNews'
import 'swiper/swiper-bundle.min.css'

interface ShelfNewsHighlightProps {
  variant?: 'dark' | 'light'
  title: string
  subtitle: string
  showAllLabel?: Maybe<string>
  showAllTo?: Maybe<string>
  news: {
    type: NewsTypes
    title: string
    chips: string[]
    description: string
    imageUrl?: string
  }[]
}

const ShelfNewsHighlight: FC<ShelfNewsHighlightProps> = ({
  title,
  subtitle,
  news,
  showAllLabel,
  showAllTo,
  variant = 'light',
}) => {
  return (
    <SectionWrapper
      background={variant === 'dark' ? 'black' : 'white'}
      containerClass="py-12 md:py-16 lg:py-12"
    >
      <div className="w-full lg:flex items-end">
        <div className="">
          <div
            className={classNames({
              'h3 mb-4 grow font-serif !font-bold': true,
              'text-black': variant === 'light',
              'text-white': variant === 'dark',
            })}
          >
            {title}
          </div>
          <div
            className={classNames({
              'display-s font-serif': true,
              'text-black': variant === 'light',
              'text-white': variant === 'dark',
            })}
          >
            {subtitle}
          </div>
        </div>
        {showAllLabel && showAllTo ? (
          <div className="mr-0 mt-4 lg:mt-12 flex lg:grow lg:mt-0 lg:w-1/3 lg:justify-end mb-4">
            <Button
              variant="secondary"
              label={showAllLabel}
              to={showAllTo}
              iconPos="left"
              icon="ArrowRight"
            />
          </div>
        ) : null}
      </div>

      <div className="pr-4">
        <Swiper
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
              slidesPerView: 4,
              spaceBetween: 12,
            },
          }}
          modules={[Pagination]}
          className="mt-10 !overflow-visible p-2"
        >
          {news.map((news, idx) => (
            <SwiperSlide key={idx}>
              <CardNews {...news} variant={variant} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SectionWrapper>
  )
}

export default ShelfNewsHighlight

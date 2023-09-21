import { useState, type FC, useEffect, useRef } from 'react'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import type { Maybe } from '~/lib/generated'

import Button from '../../Atoms/Button'
import SectionWrapper from '../../Atoms/SectionWrapper'
import CardProduct from '../CardProduct/CardProduct'
import 'swiper/swiper-bundle.min.css'
import CarouselNavigation from '../../Molecules/CarouselNavigation/CarouselNavigation'
import type { IProduct } from '../../../types/product.interface'

interface ShelfProductCarouselProps {
  title?: Maybe<string>
  count?: number
  showAllLabel?: Maybe<string>
  showAllTo?: Maybe<string>
  products: IProduct[]
  background?: 'dove' | 'white' | 'dove-500'
  isUserFavoriteCarousel?: boolean
}

const ShelfProductCarousel: FC<ShelfProductCarouselProps> = ({
  title,
  count,
  showAllLabel,
  showAllTo,
  products,
  background = 'white',
  isUserFavoriteCarousel = false,
}) => {
  const sliderRef = useRef<any>(null)

  const [progress, setProgress] = useState(0)
  const [left, setLeft] = useState(0)

  const positions = Math.ceil(products.length - 3) + 1 || 1

  const slidePerViewDef = {
    0: {
      slidesPerView: 1.3,
      spaceBetween: 16,
    },
    580: {
      slidesPerView: 2.3,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 4.3,
      spaceBetween: 12,
    },
    1280: {
      slidesPerView: 5.3,
      spaceBetween: 12,
    },
  }

  const slidePerViewUser = {
    0: {
      slidesPerView: 1.3,
      spaceBetween: 16,
    },
    580: {
      slidesPerView: 1.3,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 2.3,
      spaceBetween: 12,
    },
    1280: {
      slidesPerView: 3.3,
      spaceBetween: 12,
    },
  }

  useEffect(() => {
    const newLeft = Math.max(100 * progress - 100 / positions, 0)
    setLeft(newLeft)
  }, [positions, progress])

  return (
    <SectionWrapper
      background={background}
      containerClass="py-12 md:py-16 lg:py-12"
    >
      <div className="flex flex-row items-center justify-between w-full max-lg:flex-wrap ">
        <div className="h3 grow font-sans !font-bold lg:w-1/3">
          {count ? (
            <span className="text-shadow font-sans text-white">
              {count}&nbsp;
            </span>
          ) : null}
          {title}
        </div>
        <div className="hidden grow justify-center lg:flex lg:w-1/3">
          <div className="relative h-[1px] w-20 bg-black">
            <div
              className="absolute top-1/2 h-[3px] -translate-y-1/2 rounded-xl bg-black transition-all duration-300"
              style={{
                width: `calc(100% / ${positions})`,
                left: `${left}%`,
              }}
            ></div>
          </div>
        </div>
        <div className="mr-0 flex lg:grow lg:mt-0 lg:w-1/3 lg:justify-end">
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
      <div className="rel pr-4">
        <Swiper
          ref={sliderRef}
          breakpoints={
            isUserFavoriteCarousel ? slidePerViewUser : slidePerViewDef
          }
          modules={[Pagination]}
          className="relative mt-10 !overflow-visible"
          onSlideChange={({ progress }) => setProgress(progress)}
        >
          {products.map((produc, idx) => (
            <SwiperSlide key={idx}>
              <CardProduct {...produc} />
            </SwiperSlide>
          ))}
          <CarouselNavigation sliderRef={sliderRef} />
        </Swiper>
      </div>
    </SectionWrapper>
  )
}

export default ShelfProductCarousel

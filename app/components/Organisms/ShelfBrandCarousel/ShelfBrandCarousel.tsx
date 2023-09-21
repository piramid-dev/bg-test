import { useRef, type FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import type { Maybe } from '~/lib/generated'

// import 'swiper/css'
// import 'swiper/css/pagination'
import 'swiper/swiper-bundle.min.css'
import Button from '../../Atoms/Button'
import SectionWrapper from '../../Atoms/SectionWrapper/SectionWrapper'
import CarouselNavigation from '../../Molecules/CarouselNavigation'
import CardBrand from '../CardBrand/CardBrand'

interface ShelfBrandCarouselProps {
  title: string
  subtitle: string
  showAllLabel?: Maybe<string>
  showAllTo?: Maybe<string>
  brands: {
    name: string
    imageUrl: string
    to: string
  }[]
}

const ShelfBrandCarousel: FC<ShelfBrandCarouselProps> = ({
  title,
  subtitle,
  brands,
  showAllLabel,
  showAllTo,
}) => {
  const sliderRef = useRef<any>(null)

  return (
    <SectionWrapper background="black" containerClass="py-12 md:py-16 lg:py-12">
      <h2 className="h2 font-sans text-white">{title}</h2>
      <span className="display-m mb-12 font-sans text-white block mt-3">
        {subtitle}
      </span>
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
              slidesPerView: 4.3,
              spaceBetween: 12,
            },
            1280: {
              slidesPerView: 5.3,
              spaceBetween: 12,
            },
          }}
          className="relative mt-10 !overflow-visible p-1"
        >
          {brands.map((brand) => (
            <SwiperSlide key={brand.name}>
              <CardBrand {...brand} variant="dark" />
            </SwiperSlide>
          ))}
          <CarouselNavigation sliderRef={sliderRef} />
        </Swiper>
      </div>

      {showAllLabel && showAllTo ? (
        <div className="mt-12 flex lg:justify-center">
          <Button
            label={showAllLabel}
            to={showAllTo}
            iconPos="left"
            icon="ArrowRight"
          />
        </div>
      ) : (
        <div className="pt-16"></div>
      )}
    </SectionWrapper>
  )
}

export default ShelfBrandCarousel

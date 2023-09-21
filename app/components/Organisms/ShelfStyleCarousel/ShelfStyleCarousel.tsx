import { useRef, type FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// import 'swiper/css'
// import 'swiper/css/pagination'
import 'swiper/swiper-bundle.min.css'
import Button from '../../Atoms/Button'
import SectionWrapper from '../../Atoms/SectionWrapper/SectionWrapper'
import CarouselNavigation from '../../Molecules/CarouselNavigation'
import CardStyle from '../CardStyle/CardStyle'

interface ShelfStyleCarouselProps {
  title: string
  subtitle: string
  ctaText: string
  ctaBtnTo: string
  ctaBtnLabel: string
  styles: {
    title: string
    subtitle: string
    to: string
    imageUrl: string
    variant: 'dark' | 'light'
  }[]
}

const ShelfStyleCarousel: FC<ShelfStyleCarouselProps> = ({
  title,
  subtitle,
  styles,
  ctaText,
  ctaBtnTo,
  ctaBtnLabel,
}) => {
  const sliderRef = useRef<any>(null)

  return (
    <SectionWrapper
      background="black"
      containerClass="py-12 md:py-16 lg:py-12 text-white"
    >
      <h2 className="h3 font-sans">{title}</h2>
      <h6 className="h4 font-sans font-bold mt-10">{subtitle}</h6>
      <div className="pr-4">
        <Swiper
          ref={sliderRef}
          breakpoints={{
            0: {
              slidesPerView: 1.1,
              spaceBetween: 16,
            },
            580: {
              slidesPerView: 2.1,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 3.1,
              spaceBetween: 12,
            },
            1280: {
              slidesPerView: 3.5,
              spaceBetween: 12,
            },
          }}
          className="relative mt-4 !overflow-visible p-1"
        >
          {styles.map((style, idx) => (
            <SwiperSlide key={idx}>
              <CardStyle {...style} variant="light" />
            </SwiperSlide>
          ))}
          <CarouselNavigation sliderRef={sliderRef} />
        </Swiper>
      </div>
      <div className="mt-12">
        <p className="font-sans display-s mb-4 text-white">{ctaText}</p>
        {ctaBtnLabel && ctaBtnTo ? (
          <Button
            label={ctaBtnLabel}
            to={ctaBtnTo}
            iconPos="left"
            icon="ArrowRight"
          />
        ) : null}
      </div>
    </SectionWrapper>
  )
}

export default ShelfStyleCarousel

import { useRef, type FC, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import type { Maybe } from '~/lib/generated'

// import 'swiper/css'
// import 'swiper/css/pagination'
import 'swiper/swiper-bundle.min.css'
import CarouselNavigation from '../..//Molecules/CarouselNavigation/CarouselNavigation'
import Button from '../../Atoms/Button/Button'
import SectionWrapper from '../../Atoms/SectionWrapper'
import CardTeam from '../CardTeam/CardTeam'

interface ShelfTeamCarouselProps {
  title: string
  showAllLabel?: Maybe<string>
  showAllTo?: Maybe<string>
  teams: {
    chips: string[]
    name: string
    surname: string
    qualification: string
    profileImageUrl: string
  }[]
}

const ShelfTeamCarousel: FC<ShelfTeamCarouselProps> = ({
  title,
  showAllLabel,
  showAllTo,
  teams,
}) => {
  const sliderRef = useRef<any>(null)

  const [progress, setProgress] = useState(0)
  const [left, setLeft] = useState(0)

  const positions = Math.ceil(teams.length - 3) + 1 || 1

  useEffect(() => {
    const newLeft = Math.max(100 * progress - 100 / positions, 0)
    setLeft(newLeft)
  }, [positions, progress])

  return (
    <SectionWrapper background="white" containerClass="py-12 md:py-16 lg:py-12">
      <div className="flex flex-row items-center justify-between w-full max-lg:flex-wrap ">
        <div className="h3 grow font-sans !font-bold lg:w-1/3">{title}</div>
        <div className="hidden grow justify-center lg:flex lg:w-1/3">
          <div className="relative h-[1px] w-20 bg-black">
            <div
              className="absolute top-1/2 h-[3px] -translate-y-1/2  rounded-xl bg-black transition-all duration-300"
              style={{
                width: `calc(100% / ${positions})`,
                left: `${left}%`,
              }}
            />
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
          className="relative mt-10 !overflow-visible"
          onSlideChange={({ progress }) => setProgress(progress)}
        >
          {teams.map((team, idx) => (
            <SwiperSlide key={idx}>
              <CardTeam {...team} />
            </SwiperSlide>
          ))}
          <CarouselNavigation sliderRef={sliderRef} />
        </Swiper>
      </div>
    </SectionWrapper>
  )
}

export default ShelfTeamCarousel

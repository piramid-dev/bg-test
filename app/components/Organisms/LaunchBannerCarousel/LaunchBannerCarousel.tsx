import { useState, type FC, useEffect, useRef } from 'react'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import type { Maybe } from '~/lib/generated'

import LauncherBanner from '../LauncherBanner/LauncherBanner'
import 'swiper/swiper-bundle.min.css'
import CarouselNavigation from '../../Molecules/CarouselNavigation'
import SectionWrapper from '../../Atoms/SectionWrapper'

interface LaunchBannerCarouselProps {
  launcherBanners: {
    bgColor: 'yellow' | 'green' | 'black'
    title: string
    description?: Maybe<string>
    imageUrl: string
    primaryButton: {
      label: string
      to: string
    }
    secondaryButton?: Maybe<{
      label: string
      to?: Maybe<string>
    }>
    animation: 'swing' | 'none' | 'sparkle'
  }[]
}

const LaunchBannerCarousel: FC<LaunchBannerCarouselProps> = ({
  launcherBanners,
}) => {
  const sliderRef = useRef<any>(null)

  const [progress, setProgress] = useState(0)
  const [left, setLeft] = useState(0)
  const positions = launcherBanners.length || 1

  useEffect(() => {
    const newLeft = Math.max(
      ((100 * progress) / positions) * (launcherBanners.length - 1),
      0,
    )
    setLeft(newLeft)
  }, [positions, progress, launcherBanners.length])

  return (
    <SectionWrapper
      background="white"
      containerClass="py-12 md:py-16 lg:py-12 overflow-x-hidden text-center"
    >
      <div className="relative h-[1px] w-[120px] bg-black mx-auto my-5">
        <div
          className="absolute top-1/2 h-[3px] -translate-y-1/2 rounded-xl transition-all duration-300 bg-black"
          style={{
            width: `calc(100% / ${positions})`,
            left: `${left}%`,
          }}
        ></div>
      </div>
      <Swiper
        ref={sliderRef}
        slidesPerView={1}
        spaceBetween={50}
        modules={[Pagination]}
        className="mt-10 !overflow-visible p-2"
        onSlideChange={({ progress }) => setProgress(progress)}
      >
        {launcherBanners.map((launcherBanners, idx) => (
          <SwiperSlide key={idx} style={{ height: 'auto' }}>
            <LauncherBanner {...launcherBanners} />
          </SwiperSlide>
        ))}
        <CarouselNavigation sliderRef={sliderRef} overlapped />
      </Swiper>
    </SectionWrapper>
  )
}

export default LaunchBannerCarousel

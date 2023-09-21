import { useState, type FC, useEffect, useRef } from 'react'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import type { Maybe } from '~/lib/generated'

import CardPost from '../CardPost/CardPost'
import 'swiper/swiper-bundle.min.css'
import CarouselNavigation from '../../Molecules/CarouselNavigation'
import SectionWrapper from '../../Atoms/SectionWrapper'

interface FeaturedPostsCarouselProps {
  title?: Maybe<string>
  posts: {
    title?: Maybe<string>
    chips: Array<{
      label: string
      to: string
      variant: 'transparent' | 'overlay' | 'white'
    }>
    description?: Maybe<string>
    imageUrl?: Maybe<string>
    to?: Maybe<string>
    label?: string
  }[]
}

const FeaturedPostsCarousel: FC<FeaturedPostsCarouselProps> = ({
  title = 'iN EVIDENZA',
  posts,
}) => {
  const sliderRef = useRef<any>(null)

  const [progress, setProgress] = useState(0)
  const [left, setLeft] = useState(0)
  const positions = posts.length || 1

  useEffect(() => {
    const newLeft = Math.max(
      ((100 * progress) / positions) * (posts.length - 1),
      0,
    )
    setLeft(newLeft)
  }, [positions, progress, posts.length])

  return (
    <SectionWrapper
      background="white"
      containerClass="py-12 md:py-16 lg:py-12 overflow-x-hidden text-center"
    >
      <h5 className="h5 font-sans uppercase !font-normal">{title}</h5>

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
        {posts.map((posts, idx) => (
          <SwiperSlide key={idx}>
            <CardPost {...posts} type={idx % 2 === 0 ? 'even' : 'odd'} />
          </SwiperSlide>
        ))}
        <CarouselNavigation sliderRef={sliderRef} overlapped />
      </Swiper>
    </SectionWrapper>
  )
}

export default FeaturedPostsCarousel

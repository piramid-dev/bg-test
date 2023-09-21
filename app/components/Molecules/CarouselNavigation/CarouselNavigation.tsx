import { useCallback, type FC } from 'react'
import classNames from 'classnames'

import Button from '../../Atoms/Button'

interface CarouselNavigationProps {
  sliderRef: any
  overlapped?: boolean
}

const CarouselNavigation: FC<CarouselNavigationProps> = ({
  sliderRef,
  overlapped,
}) => {
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slidePrev()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slideNext()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  //console.log("SWIPER REF: ", sliderRef?.current?.swiper)
  return (
    <>
      <div
        className={classNames({
          'absolute top-1/2 z-20 hidden -translate-y-1/2 lg:block transition-all duration-300':
            true,
          '-left-[24px] -translate-x-full': !overlapped,
          'left-0 -translate-x-1/2': overlapped,
          'opacity-0 pointer-events-none translate-x-full':
            sliderRef?.current?.swiper?.activeIndex === 0 ||
            !sliderRef?.current?.swiper?.allowSlidePrev,
        })}
      >
        <Button variant="primary" icon="ArrowLeft" onClick={handlePrev} />
      </div>
      <div
        className={classNames({
          'absolute top-1/2 z-20 hidden -translate-y-1/2 lg:block transition-all duration-300':
            true,
          '-right-[36px] translate-x-full': !overlapped,
          'right-0 translate-x-1/2': overlapped,
          'opacity-0 pointer-events-none -translate-x-full':
            sliderRef?.current?.swiper?.progress >= 1 ||
            !sliderRef?.current?.swiper?.allowSlideNext,
        })}
      >
        <Button variant="primary" icon="ArrowRight" onClick={handleNext} />
      </div>
    </>
  )
}

export default CarouselNavigation

import type { FC } from 'react'
import classNames from 'classnames'
import { useRef } from 'react'

import { useMediaQuery } from '../../../hooks/useMediaQuery'
import ParallaxImage from '../../Organisms/ParallaxImage/ParallaxImage'

interface SubscriptionColumnsProps {
  title: string
  subtitle: string
  shortDesc: string
  textPosition: 'left' | 'right'
  images: Array<{
    imageUrl: string
    imageWidth?: string
    x?: [number, number]
    y?: [number, number]
    rotation?: [number, number]
    speed?: number
    mobile?: {
      imageWidth?: string
      x?: [number, number]
      y?: [number, number]
      rotation?: [number, number]
      speed?: number
    }
  }>
}

const SubscriptionColumns: FC<SubscriptionColumnsProps> = ({
  title,
  subtitle,
  shortDesc,
  images,
  textPosition = 'left',
}) => {
  const containerRef = useRef(null)
  const isMobile = useMediaQuery('(max-width: 1024px)')

  return (
    <section
      className="subscription-cols overflow-x-clip xl:h-[680px]"
      ref={containerRef}
    >
      <div
        className={classNames({
          container: true,
          'h-full lg:flex lg:items-center  py-10 lg:py-14 lg:gap-x-6': true,
          'lg:flex-row-reverse': textPosition === 'right',
        })}
      >
        <div className="py-6 lg:w-6/12">
          <h3 className="h3 font-sans mb-1 lg:mb-4">{title}</h3>
          <h4 className="body-xl font-sans mb-1 lg:mb-4">{subtitle}</h4>
          <div className="body-m font-sans">{shortDesc}</div>
        </div>
        <div className="lg:w-6/12 h-full relative pb-[390px] overflow-x-clip ">
          {images.map((el) =>
            el.mobile && isMobile ? (
              <ParallaxImage
                scrollRef={containerRef}
                key={`${el.imageUrl}-mobile`}
                imageUrl={el.imageUrl}
                imageWidth={
                  el.mobile.imageWidth ? el.mobile.imageWidth : el.imageWidth
                }
                xPos={el.mobile.x}
                yPos={el.mobile.y}
                rotation={el.mobile.rotation}
                speed={el.mobile.speed}
              />
            ) : (
              <ParallaxImage
                scrollRef={containerRef}
                key={el.imageUrl}
                imageUrl={el.imageUrl}
                imageWidth={el.imageWidth}
                xPos={el.x}
                yPos={el.y}
                rotation={el.rotation}
                speed={el.speed}
              />
            ),
          )}
        </div>
      </div>
    </section>
  )
}
export default SubscriptionColumns

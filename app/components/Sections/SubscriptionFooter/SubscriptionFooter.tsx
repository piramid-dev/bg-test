import type { FC } from 'react'
import classNames from 'classnames'
import { useRef } from 'react'

import { useMediaQuery } from '../../../hooks/useMediaQuery'
import Button from '../../Atoms/Button/Button'
import ParallaxImage from '../../Organisms/ParallaxImage/ParallaxImage'

interface SubscriptionFooterProps {
  title: string
  subtitle: string
  button: {
    label: string
    to: string
  }
  images: Array<{
    imageUrl: string
    x?: [number, number]
    y?: [number, number]
    rotation?: [number, number]
    speed?: number
    mobile?: {
      x?: [number, number]
      y?: [number, number]
      rotation?: [number, number]
      speed?: number
    }
  }>
}

const SubscriptionFooter: FC<SubscriptionFooterProps> = ({
  title,
  subtitle,
  button,
  images,
}) => {
  const containerRef = useRef(null)
  const isMobile = useMediaQuery('(max-width: 1024px)')

  return (
    <section className="bg-yellow-300  overflow-x-clip " ref={containerRef}>
      <div
        className={classNames({
          container: true,
          'h-full lg:flex relative lg:items-center ': true,
        })}
      >
        <div className="lg:w-7/12 py-10 lg:py-40">
          <h3 className="h3 font-sans mb-1 lg:mb-4">{title}</h3>
          <div className="body-xl font-sans mb-10">{subtitle}</div>
          <Button
            label={button.label}
            iconPos="left"
            to={button.to}
            icon="ArrowRight"
          />
        </div>
        <div className="lg:w-6/12 lg:translate-x-1/3 lg:absolute lg:right-0 h-[50vh] lg:h-full">
          {images.map((el) =>
            el.mobile && isMobile ? (
              <ParallaxImage
                key={`${el.imageUrl}-mobile`}
                scrollRef={containerRef}
                imageUrl={el.imageUrl}
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
export default SubscriptionFooter

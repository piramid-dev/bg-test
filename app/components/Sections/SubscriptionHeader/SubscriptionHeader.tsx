import { motion, useScroll, useTransform } from 'framer-motion'
import { Form } from '@remix-run/react'
import type { FC } from 'react'
import classNames from 'classnames'
import { useRef } from 'react'
import { CheckCircle } from '@phosphor-icons/react'

import { useMediaQuery } from '../../../hooks/useMediaQuery'
import Button from '../../Atoms/Button/Button'
import ParallaxImage from '../../Organisms/ParallaxImage/ParallaxImage'

interface SubscriptionHeaderProps {
  title: string
  subtitle: string
  price?: string
  shortDesc?: string
  list: Array<string>
  button: {
    label: string
    to: string
  }
  footerNotes?: string
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

const SubscriptionHeader: FC<SubscriptionHeaderProps> = ({
  title,
  subtitle,
  price,
  shortDesc,
  list,
  button,
  footerNotes,
  images,
}) => {
  const containerRef = useRef(null)
  const isMobile = useMediaQuery('(max-width: 1024px)')

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(
    scrollYProgress,
    [0, 2],
    isMobile ? [25, 15] : [55, 30],
  )

  const rotate = useTransform(scrollYProgress, [0, 2], [-10, 100])

  return (
    <section className="bg-yellow-300  overflow-x-clip " ref={containerRef}>
      <div
        className={classNames({
          container: true,
          'h-full lg:flex relative ': true,
        })}
      >
        <div className="lg:w-7/12 py-10 lg:py-14">
          <h1 className="h3 font-sans mb-1 lg:mb-4">{title}</h1>
          <h2 className="display-l font-sans">
            <span className="relative z-[1]">{subtitle}</span>
            {price ? (
              <span className="relative">
                <span className="font-bold ml-3 relative z-[1]">{price}</span>
                <motion.span
                  className="price-decoration absolute"
                  style={{ y, rotate }}
                />
              </span>
            ) : null}
          </h2>
          <div className="body-l font-sans my-4 lg:my-8 text-black/70">
            {shortDesc ? <p className="mb-2">{shortDesc}</p> : null}
            <ol>
              {list.map((el) => (
                <li key={el} className="mb-2 flex">
                  <CheckCircle className="mt-1 mr-2 shrink-0" />
                  {el}
                </li>
              ))}
            </ol>
          </div>
          {button.to === 'subscribe' ? (
            <Form action="/subscribe" method="post" className="mt-10">
              <Button variant="secondary" type="submit">
                Buy a new Passport
              </Button>
            </Form>
          ) : (
            <Button
              label={button.label}
              iconPos="left"
              to={button.to}
              icon="ArrowRight"
            />
          )}

          {footerNotes ? (
            <p className="mt-2 font-sans body-s">{footerNotes}</p>
          ) : null}
        </div>
        <div className="lg:w-6/12 lg:translate-x-1/3 lg:absolute lg:right-0 lg:h-full">
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
export default SubscriptionHeader

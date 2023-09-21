import classNames from 'classnames'
import type { FC } from 'react'
import { useRef, useEffect, useState, createElement } from 'react'
import { motion, useInView } from 'framer-motion'
import { Timer } from '@phosphor-icons/react'

import type { Maybe } from '~/lib/generated'

import Button from '../../Atoms/Button'

interface LauncherBannerProps {
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
}

const LauncherBanner: FC<LauncherBannerProps> = ({
  bgColor = 'yellow',
  title,
  description,
  imageUrl,
  primaryButton,
  secondaryButton,
  animation = 'swing',
}) => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef)
  const [starAnimation, setStartAnimation] = useState(false)

  useEffect(() => {
    setStartAnimation(isInView)
  }, [isInView])

  return (
    <div
      ref={containerRef}
      className={classNames({
        'card-container overflow-hidden relative lg:flex lg:items-center gap-x-16 h-[40rem] lg:h-[35rem]':
          true,
        'bg-yellow-300': bgColor === 'yellow',
        'bg-green-500': bgColor === 'green',
        'bg-black/90': bgColor === 'black',
      })}
    >
      <div className="px-4 py-6 lg:w-7/12 lg:px-10 text-left">
        <div
          className={classNames({
            'text-white': bgColor === 'black',
          })}
        >
          <h3 className="h3 mb-4 font-sans font-semibold">{title}</h3>
        </div>
        <div
          className={classNames({
            'display-s font-sansmb-4 lg:mb-10': true,
            'text-black/70 ': bgColor !== 'black',
            'text-white': bgColor === 'black',
          })}
        >
          <div className="">{description}</div>
        </div>
        <div
          className={classNames({
            'lg:flex lg:items-center lg:gap-6 mt-4 lg:mt-10': true,
            'flex flex-wrap items-center gap-2': secondaryButton?.to,
          })}
        >
          <Button
            {...(bgColor === 'black' && { variant: 'secondary' })}
            label={primaryButton.label}
            to={primaryButton.to}
            iconPos="left"
            icon="ArrowRight"
          />
          {secondaryButton ? (
            <>
              {secondaryButton.to ? (
                <Button
                  variant={bgColor === 'black' ? 'secondary' : 'transparent'}
                  label={secondaryButton.label}
                  to={secondaryButton.to}
                  iconPos="left"
                  icon="ArrowRight"
                />
              ) : (
                <div
                  className={classNames({
                    'flex items-center gap-2 h5 uppercase mt-3 lg:mt-0': true,
                    'text-white/70': bgColor === 'black',
                    'text-yellow-300': bgColor === 'green',
                    'text-black/70': bgColor === 'yellow',
                  })}
                >
                  {createElement(Timer, {
                    className: 'w-5 h-5 lg:w-6 lg:h-6',
                  })}
                  {secondaryButton.label}
                </div>
              )}
            </>
          ) : null}
        </div>
      </div>
      <div
        className={classNames({
          'relative aspect-pano h-[40%] w-full lg:h-full lg:w-5/12 flex': true,
          'items-center w-8/12 ml-auto': animation === 'swing',
        })}
      >
        <div
          className={classNames({
            'mt-auto': animation === 'none',
            'ml-auto mt-4 lg:mt-0': animation !== 'none',
          })}
        >
          {animation === 'swing' ? (
            <motion.img
              className="w-full h-auto"
              initial={false}
              variants={{
                inViewport: {
                  rotate: 13,
                  transition: {
                    delay: 0.2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: [0.6, 0.07, 0.38, 0.96],
                    duration: 0.9,
                    repeatDelay: 0.2,
                  },
                },
                outsideViewport: { rotate: -13, transition: { duration: 0.2 } },
              }}
              animate={starAnimation ? 'inViewport' : 'outsideViewport'}
              src={imageUrl}
              alt=""
            />
          ) : (
            <img src={imageUrl} alt="" />
          )}
          {animation !== 'none' ? (
            <>
              <motion.img
                initial={{ scale: 0, opacity: 0, rotate: -270 }}
                variants={{
                  inViewport: {
                    scale: 1,
                    opacity: 1,
                    rotate: 0,
                    transition: {
                      ease: [0.6, 0.07, 0.38, 0.96],
                      delay: animation === 'sparkle' ? 1.4 : 1.6,
                      duration: 0.8,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      repeatDelay: 0.375,
                    },
                  },
                  outsideViewport: {
                    scale: 0,
                    opacity: 0,
                    transition: { duration: 0.2 },
                  },
                }}
                src="/assets/sparkle.svg"
                alt=""
                className="w-[60px] lg:w-[90px] h-auto absolute bottom-[90px] right-[40%]"
                animate={starAnimation ? 'inViewport' : 'outsideViewport'}
              />
              <motion.img
                initial={{ scale: 0, opacity: 0, rotate: -360 }}
                variants={{
                  inViewport: {
                    scale: 1,
                    opacity: 1,
                    rotate: 0,
                    transition: {
                      ease: [0.6, 0.07, 0.38, 0.96],
                      delay: animation === 'sparkle' ? 1.4 : 1.6,
                      duration: 0.8,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      repeatDelay: 0.375,
                    },
                  },
                  outsideViewport: {
                    scale: 0,
                    opacity: 0,
                    transition: { duration: 0.2 },
                  },
                }}
                src="/assets/sparkle.svg"
                alt=""
                className="w-[22px] h-auto absolute top-[120px] left-[60px]"
                animate={starAnimation ? 'inViewport' : 'outsideViewport'}
              />
              <motion.img
                initial={{ scale: 0, opacity: 0, rotate: -270 }}
                variants={{
                  inViewport: {
                    scale: 1,
                    opacity: 1,
                    rotate: 0,
                    transition: {
                      ease: [0.6, 0.07, 0.38, 0.96],
                      delay: animation === 'sparkle' ? 0 : 1.6,
                      duration: 0.8,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      repeatDelay: 0.375,
                    },
                  },
                  outsideViewport: {
                    scale: 0,
                    opacity: 0,
                    transition: { duration: 0.2 },
                  },
                }}
                src="/assets/sparkle.svg"
                alt=""
                className="w-[47px] h-auto absolute top-[100px] right-[10px]"
                animate={starAnimation ? 'inViewport' : 'outsideViewport'}
              />
            </>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default LauncherBanner

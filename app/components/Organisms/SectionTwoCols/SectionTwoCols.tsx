import { motion, useScroll, useTransform } from 'framer-motion'
import type { FC } from 'react'
import { useRef } from 'react'
import classNames from 'classnames'
import type { CSSProperties } from 'react'

import Button from '../../Atoms/Button/Button'

export interface imagePosition extends CSSProperties {
  '--imageUrl': string
  '--rotate': string
}

interface SectionTwoColsProps {
  type: 'default' | 'star' | 'double'
  title: string
  subtitle?: string
  shortDesc: string
  imageUrl: string
  secondImageUrl?: string
  button?: {
    label: string
    to: string
  }
}

const SectionTwoCols: FC<SectionTwoColsProps> = ({
  type = 'default',
  title,
  subtitle,
  shortDesc,
  imageUrl,
  secondImageUrl,
  button,
}) => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  })

  interface ShapeRectProps {
    startY: number
    startX: number
    endY: number
    endX: number
    startRotation: number
    endRotation: number
    rx: number
    hasStroke?: boolean
    className?: string
  }

  const ShapeRect: FC<ShapeRectProps> = ({
    startY,
    startX,
    endY,
    endX,
    startRotation,
    endRotation,
    rx,
    hasStroke,
    className,
  }) => {
    const y = useTransform(scrollYProgress, [0, 1], [startY, endY])

    const x = useTransform(scrollYProgress, [0, 1], [startX, endX])

    const strokeWidth = useTransform(scrollYProgress, [0, 1], [0, 3])

    const rotate = useTransform(
      scrollYProgress,
      [0, 1],
      [startRotation, endRotation],
    )

    if (hasStroke) {
      return (
        <motion.rect
          className={className}
          rx={rx}
          x={x}
          y={y}
          style={{ originX: `${startX}px`, originY: `${startY}px`, rotate }}
          stroke="black"
          fill="transparent"
          strokeWidth={strokeWidth}
        />
      )
    }
    return (
      <motion.rect
        className={className}
        rx={rx}
        x={x}
        y={y}
        style={{ originX: `${startX}px`, originY: `${startY}px`, rotate }}
        fill="#fff"
      />
    )
  }

  const DefaultShape = () => {
    return (
      <svg className="default-shape">
        <defs>
          <mask id={`mask-${imageUrl}`} maskUnits="objectBoundingBox">
            <ShapeRect
              startY={80}
              endY={1.5}
              startX={417.859}
              endX={150}
              startRotation={37.9154}
              endRotation={0}
              rx={200}
              className="hidden lg:inline-block"
            />
            <ShapeRect
              startY={-13}
              endY={0}
              startX={40}
              endX={0}
              startRotation={8.96}
              endRotation={0}
              rx={96}
              className="lg:hidden"
            />
          </mask>
        </defs>
        <g mask={`url(#mask-${imageUrl})`}>
          <image
            xlinkHref={imageUrl}
            width="2731"
            height="4096"
            transform="matrix(0.24 0 0 0.24 -0.485931 -0.772224)"
          />
          <ShapeRect
            startY={80}
            endY={1.5}
            startX={417.859}
            endX={150}
            startRotation={37.9154}
            endRotation={0}
            rx={200}
            hasStroke
            className="hidden lg:inline-block"
          />
          <ShapeRect
            startY={-13}
            endY={0}
            startX={40}
            endX={0}
            startRotation={8.96}
            endRotation={0}
            rx={96}
            className="lg:hidden"
            hasStroke
          />
        </g>
      </svg>
    )
  }

  const DoubleShape = () => {
    return (
      <svg id="double-shape" className="double-shape mx-auto">
        <defs>
          <mask id="shapeLeft" maskUnits="objectBoundingBox">
            <ShapeRect
              startY={97}
              endY={0}
              startX={0}
              endX={54}
              startRotation={-15}
              endRotation={0}
              rx={150}
              className="hidden lg:inline-block"
            />
            <ShapeRect
              startY={20}
              endY={0}
              startX={0}
              endX={0}
              startRotation={-4.96}
              endRotation={0}
              rx={96}
              className="lg:hidden"
            />
          </mask>
          <mask id="shapeRight" maskUnits="objectBoundingBox">
            <ShapeRect
              startY={235}
              endY={216}
              startX={433}
              endX={361}
              startRotation={15}
              endRotation={0}
              rx={150}
              className="hidden lg:inline-block"
            />
            <ShapeRect
              startY={90}
              endY={70}
              startX={293}
              endX={300}
              startRotation={4.96}
              endRotation={0}
              rx={96}
              className="lg:hidden hidden sm:inline-block"
            />
            <ShapeRect
              startY={190}
              endY={190}
              startX={135}
              endX={140}
              startRotation={4.96}
              endRotation={0}
              rx={96}
              className="sm:hidden"
            />
          </mask>
        </defs>
        <g>
          <g mask="url(#shapeLeft)">
            <image
              xlinkHref={secondImageUrl}
              width="2731"
              height="4096"
              transform="matrix(0.24 0 0 0.24 -0.485931 -0.772224)"
            />
            <ShapeRect
              startY={97}
              endY={0}
              startX={0}
              endX={54}
              startRotation={-15}
              endRotation={0}
              rx={150}
              className="hidden lg:inline-block"
              hasStroke
            />
            <ShapeRect
              startY={20}
              endY={0}
              startX={0}
              endX={0}
              startRotation={-4.96}
              endRotation={0}
              rx={96}
              className="lg:hidden"
              hasStroke
            />
          </g>
          <g mask="url(#shapeRight)">
            <image
              id="SvgjsImage1032"
              xlinkHref={imageUrl}
              width="2731"
              height="4096"
              transform="matrix(0.24 0 0 0.24 45.485931 90.772224)"
              className="sm:hidden lg:inline-block"
            />
            <image
              id="SvgjsImage1032"
              xlinkHref={imageUrl}
              width="2731"
              height="4096"
              transform="matrix(0.24 0 0 0.24 250 100)"
              className="hidden sm:inline-block lg:hidden"
            />
            <ShapeRect
              startY={235}
              endY={216}
              startX={433}
              endX={361}
              startRotation={15}
              endRotation={0}
              rx={150}
              className="hidden lg:inline-block"
              hasStroke
            />
            <ShapeRect
              startY={90}
              endY={70}
              startX={293}
              endX={300}
              startRotation={4.96}
              endRotation={0}
              rx={96}
              className="lg:hidden hidden sm:inline-block"
              hasStroke
            />
            <ShapeRect
              startY={190}
              endY={190}
              startX={135}
              endX={140}
              startRotation={4.96}
              endRotation={0}
              rx={96}
              className="sm:hidden"
              hasStroke
            />
          </g>
        </g>
      </svg>
    )
  }

  const StarShape = () => {
    const y = useTransform(scrollYProgress, [0, 1], [28, 0])

    const rotate = useTransform(scrollYProgress, [0, 1], [37.9154, 0])

    return (
      <motion.div style={{ y }} className="h-full w-full">
        <svg id="star-shape" className="star-shape" fill="none">
          <defs>
            <mask id="mask" maskUnits="objectBoundingBox">
              <motion.path
                style={{ rotate }}
                d="M337.38 7.41219L336 4.1722L334.62 7.41219L291.997 107.481L212.357 33.4L209.778 31.0015L209.835 34.5226L211.599 143.277L108.713 107.993L105.382 106.85L106.866 110.044L152.711 208.678L44.3686 218.292L40.8607 218.603L43.5157 220.917L125.516 292.377L30.4502 345.227L27.3722 346.938L30.7387 347.972L134.715 379.901L69.3641 466.849L67.2482 469.664L70.7442 469.239L178.718 456.117L154.382 562.128L153.594 565.56L156.615 563.75L249.917 507.846L270.803 614.59L271.479 618.046L273.503 615.164L336 526.143L398.497 615.164L400.2521 618.046L401.197 614.59L422.083 507.846L515.385 563.75L518.406 565.56L517.618 562.128L493.282 456.117L601.256 469.239L604.752 469.664L602.636 466.849L537.285 379.901L641.261 347.972L644.628 346.938L641.55 345.227L546.484 292.377L628.484 220.917L631.139 218.603L627.631 218.292L519.289 208.678L565.134 110.044L566.619 106.85L563.287 107.993L460.401 143.277L462.165 34.5226L462.222 31.0015L459.643 33.4L380.003 107.481L337.38 7.41219Z"
                fill="#D9D9D9"
              />
            </mask>
          </defs>
          <g mask="url(#mask)" className="star-g">
            <image xlinkHref={imageUrl} />
            <motion.path
              style={{ rotate }}
              d="M337.38 7.41219L336 4.1722L334.62 7.41219L291.997 107.481L212.357 33.4L209.778 31.0015L209.835 34.5226L211.599 143.277L108.713 107.993L105.382 106.85L106.866 110.044L152.711 208.678L44.3686 218.292L40.8607 218.603L43.5157 220.917L125.516 292.377L30.4502 345.227L27.3722 346.938L30.7387 347.972L134.715 379.901L69.3641 466.849L67.2482 469.664L70.7442 469.239L178.718 456.117L154.382 562.128L153.594 565.56L156.615 563.75L249.917 507.846L270.803 614.59L271.479 618.046L273.503 615.164L336 526.143L398.497 615.164L400.2521 618.046L401.197 614.59L422.083 507.846L515.385 563.75L518.406 565.56L517.618 562.128L493.282 456.117L601.256 469.239L604.752 469.664L602.636 466.849L537.285 379.901L641.261 347.972L644.628 346.938L641.55 345.227L546.484 292.377L628.484 220.917L631.139 218.603L627.631 218.292L519.289 208.678L565.134 110.044L566.619 106.85L563.287 107.993L460.401 143.277L462.165 34.5226L462.222 31.0015L459.643 33.4L380.003 107.481L337.38 7.41219Z"
              fill="transparent"
              stroke="black"
              strokeWidth="3"
            />
          </g>
        </svg>
      </motion.div>
    )
  }

  const Shape = () => {
    if (type === 'star') {
      return <StarShape />
    }
    if (type === 'double' || secondImageUrl) {
      return <DoubleShape />
    }
    return <DefaultShape />
  }

  return (
    <div className="bg-white lg:h-screen" ref={containerRef}>
      <div className="container lg:flex lg:flex-row-reverse  w-full items-center h-full relative">
        <div className="lg:w-1/2 shape-container w-full h-full">
          <Shape />
        </div>
        <div className="lg:w-1/2  py-12">
          <h2 className="h2 font-sans">{title}</h2>
          {type === 'double' && subtitle ? (
            <h4 className="h4 font-sans mt-10">{subtitle}</h4>
          ) : null}
          <div
            className={classNames({
              'font-sans': true,
              'display-m mt-6': type !== 'double',
              'body-l mt-2': type === 'double',
              'mb-5 lg:mb-10': button,
            })}
          >
            {shortDesc}
          </div>
          {type === 'double' && button ? (
            <Button
              icon="ArrowRight"
              variant="secondary"
              iconPos="left"
              label={button.label}
              to={button.to}
            />
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default SectionTwoCols

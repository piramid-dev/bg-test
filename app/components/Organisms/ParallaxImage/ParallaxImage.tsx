import { motion, useScroll, useTransform } from 'framer-motion'
import type { FC } from 'react'

interface ParallaxImageProps {
  imageUrl: string
  imageWidth?: string
  scrollRef: RefObject<HTMLDivElement>
  xPos?: [number, number]
  yPos?: [number, number]
  rotation?: [number, number]
  speed?: number
  className?: string
}

const ParallaxImage: FC<ParallaxImageProps> = ({
  imageUrl,
  imageWidth,
  scrollRef,
  xPos,
  yPos,
  rotation,
  speed,
  className,
}) => {
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end start'],
  })

  const position = {
    x: xPos ? [xPos[0], xPos[1]] : [0, 0],
    y: yPos ? [yPos[0], yPos[1]] : [0, 0],
    rotation: rotation ? [rotation[0], rotation[1]] : [0, 0],
  }

  const y = useTransform(scrollYProgress, [0, speed ? speed : 0.15], position.y)

  const x = useTransform(scrollYProgress, [0, speed ? speed : 0.15], position.x)

  const rotate = useTransform(
    scrollYProgress,
    [0, speed ? speed : 0.15],
    position.rotation,
  )

  return (
    <motion.div
      className={`absolute inline-block ${className ? className : ''}`}
      style={{ rotate, x, y, maxWidth: imageWidth }}
    >
      <img src={imageUrl} alt="" />
    </motion.div>
  )
}

export default ParallaxImage

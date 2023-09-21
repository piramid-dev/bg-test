import { useEffect, useRef, useState, type FC, type ReactNode } from 'react'
import move from 'lodash-move'
import { motion } from 'framer-motion'
import { Plus } from 'phosphor-react'

import Button from '../../Atoms/Button/'
import CardProduct from '../CardProduct/CardProduct'

interface ProductCarouselColumnProps {
  products: any[]
  currentIndex: number
  onChangeSetElement: () => void
  children: ReactNode
  isLast?: boolean
}

const ProductCarouselColumn: FC<ProductCarouselColumnProps> = ({
  products,
  currentIndex,
  onChangeSetElement,
  children,
  isLast = false,
}) => {
  const [cards, setCards] = useState(products)
  const firstUpdate = useRef(true)
  const badRefForHeight = useRef<any>(null)
  const [containerHeight, setContainerHeight] = useState(0)

  useEffect(() => {
    if (firstUpdate.current) {
      setContainerHeight(badRefForHeight.current?.clientHeight)
      firstUpdate.current = false
      return
    }

    setCards([...move(cards, 0, cards.length - 1)])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex])

  const setOpacity = (idx: number) => {
    switch (idx) {
      case 0:
        return 1
      case 1:
        return 0.7
      case 2:
        return 0.4
      default:
        return 0
    }
  }

  const setEventPointer = (idx: number) => {
    if (idx > 3) {
      return 'none'
    }
    return 'auto'
  }

  return (
    <>
      <div className="shrink-0 flex-1">
        <div
          className="relative w-full mt-4"
          style={{ height: containerHeight }}
        >
          {cards.map((product: any, idx: any) => (
            <motion.div
              className="absolute w-full"
              key={product.id}
              ref={badRefForHeight}
              animate={{
                bottom: idx > 3 ? 16 * 3 : idx * 16,
                opacity: setOpacity(idx),
                pointerEvents: setEventPointer(idx),
                zIndex: cards.length - idx,
              }}
            >
              <CardProduct {...product} />
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <Button
            variant="outline-dark"
            icon="ArrowsClockwise"
            onClick={onChangeSetElement}
            containerClassName="duration-300 transition-all active:rotate-180 mt-3"
            extraClasses={
              cards.length === 1 ? 'opacity-0 pointer-events-none' : ''
            }
          />
        </div>
        <div className="mt-4 lg:mt-14 text-center">{children}</div>
      </div>
      {isLast ? null : (
        <div className="w-8 max-lg:w-full max-lg:py-6 shrink-0 flex-col lg:flex-row flex items-center justify-center">
          <Plus className="w-8 h-8 text-white/40" />
        </div>
      )}
    </>
  )
}

export default ProductCarouselColumn

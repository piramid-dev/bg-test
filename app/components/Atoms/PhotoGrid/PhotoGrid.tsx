import classNames from 'classnames'
import { type FC, useEffect, useState } from 'react'
import { Item } from 'react-photoswipe-gallery'

import type { Maybe } from '~/lib/generated'

interface PhotoGridProps {
  images: (Maybe<string> | undefined)[]
}

const PhotoGrid: FC<PhotoGridProps> = ({ images }) => {
  const [imagesMetadata, setImagesMetadata] = useState(
    images.map(() => ({ width: 0, height: 0, loaded: false })),
  )

  useEffect(() => {
    images.forEach((image, idx) => {
      if (!image) return

      const img = new Image()
      img.src = image!

      img.onload = () => {
        setImagesMetadata((prev) => {
          const newSizes = [...prev]
          newSizes[idx] = { width: img.width, height: img.height, loaded: true }
          return newSizes
        })
      }
    })
  }, [images])

  return (
    <div className="grid grid-cols-2 gap-3 py-3 lg:pag-4 lg:py-20">
      {images.map(
        (image, idx) =>
          image &&
          imagesMetadata[idx].loaded && (
            <Item
              key={image}
              original={image}
              thumbnail={image}
              width={imagesMetadata[idx].width}
              height={imagesMetadata[idx].height}
            >
              {({ ref, open }) => (
                <img
                  className={classNames({
                    'cursor-pointer overflow-hidden rounded-lg border': true,
                    'col-span-2':
                      imagesMetadata[idx]?.width > imagesMetadata[idx]?.height,
                  })}
                  src={image}
                  alt="product"
                  ref={ref as any}
                  onClick={open}
                />
              )}
            </Item>
          ),
      )}
    </div>
  )
}

export default PhotoGrid

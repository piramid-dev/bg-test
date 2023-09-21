import type { FC } from 'react'
import { useState, useEffect } from 'react'
import { Item } from 'react-photoswipe-gallery'

import type { Maybe } from '~/lib/generated'

interface ProductCoveProps {
  /**
   * cover image
   */
  coverImageSrc?: Maybe<string>
  /**
   * alt cover image
   */
  coverAltTxt?: Maybe<string>
  /**
   * cover full image
   */
  coverImageFullSrc?: Maybe<string>

  /**
   * year tested
   */
  testedIn?: Maybe<string>
  /**
   * awards array
   */
  awards: Array<{
    name?: Maybe<string>
    img?: Maybe<string>
  }>
}
const ProductCover: FC<ProductCoveProps> = ({
  coverImageSrc,
  coverAltTxt,
  coverImageFullSrc,
  testedIn,
  awards = [],
}) => {
  const [imageMetadata, setImageMetadata] = useState({
    width: 0,
    height: 0,
    loaded: false,
  })

  useEffect(() => {
    //if (!coverImageSrc) return

    const img = new Image()
    img.src = coverImageSrc || 'https://placehold.co/600x1200'

    img.onload = () => {
      setImageMetadata({ width: img.width, height: img.height, loaded: true })
    }
  }, [coverImageSrc])

  return (
    <div className="col relative mb-auto w-full overflow-hidden lg:sticky lg:top-0 lg:float-right lg:w-5/12">
      {coverImageFullSrc && imageMetadata.loaded ? (
        <Item
          original={coverImageFullSrc || 'https://placehold.co/600x1200'}
          thumbnail={coverImageSrc!}
          width={imageMetadata.width}
          height={imageMetadata.height}
        >
          {({ ref, open }) => (
            <img
              alt={coverAltTxt!}
              src={coverImageSrc || 'https://placehold.co/600x1200'}
              className="mx-auto h-80-screen w-auto object-contain object-top"
              ref={ref as any}
              onClick={open}
            />
          )}
        </Item>
      ) : null}

      {testedIn ? (
        <span className="body-m absolute right-0 top-1/2 -translate-y-1/2 -rotate-180 font-condensed text-black/70 [writing-mode:vertical-rl]">
          {testedIn}
        </span>
      ) : null}
      <div className="absolute left-2 lg:left-6 top-0 flex h-full flex-col items-center justify-center">
        {awards.map((award, index) => (
          <img
            key={index}
            alt={award.name!}
            src={award.img!}
            className="w-30 h-30 my-4"
          />
        ))}
      </div>
    </div>
  )
}
export default ProductCover

import type { FC } from 'react'
import classNames from 'classnames'

interface NewsColsTextImageProps {
  imageUrl: string
  text: string
  imagePosition: 'left' | 'right'
  backgroundColor?: boolean
}
const NewsColsTextImage: FC<NewsColsTextImageProps> = ({
  imageUrl,
  text,
  imagePosition = 'left',
  backgroundColor = true,
}) => {
  return (
    <div
      className={classNames({
        'bg-dove-500': backgroundColor,
      })}
    >
      <div
        className={classNames({
          'container pt-10 lg:pt-20 lg:pb-10 lg:flex lg:justify-between lg:items-center':
            true,
          'flex flex-col-reverse lg:flex-row-reverse':
            imagePosition === 'right',
        })}
      >
        <div className="lg:w-5/12 mb-10">
          <img src={imageUrl} alt="" className="mx-auto w-full" />
        </div>
        <div className="lg:w-1/2 mb-10">
          <div
            className="font-serif body-xl"
            dangerouslySetInnerHTML={{ __html: text as string }}
          ></div>
        </div>
      </div>
    </div>
  )
}
export default NewsColsTextImage

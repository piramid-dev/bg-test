import type { FC } from 'react'
import classNames from 'classnames'
interface SectionFullWidthProps {
  title: string
  subtitle?: string
  imageUrl?: {
    desktop: string
    mobile?: string
  }
  /**
   * Is text position top or bottom?
   * @default 'top'
   */
  textPosition?: 'top' | 'bottom'
}
const SectionFullWidth: FC<SectionFullWidthProps> = ({
  title,
  subtitle,
  imageUrl,
  textPosition = 'top',
}) => {
  return (
    <div
      className={classNames({
        'section-full-width relative': true,
        'flex h-[80vh] lg:h-[90vh] xl:h-screen': imageUrl,
        'pb-10 pb-12': !imageUrl,
        'items-end pb-10 pb-12': textPosition === 'bottom',
        'pt-10 xl:pt-12': textPosition !== 'bottom',
      })}
    >
      {imageUrl ? (
        <div
          className={classNames({
            'h-[70%] lg:h-[75%] xl:h-[85%] w-full absolute': true,
            'top-0': textPosition === 'bottom',
            'bottom-0 xl:bg-[center_50px]': textPosition !== 'bottom',
          })}
        >
          <picture>
            <source media="(max-width: 1024px)" srcSet={imageUrl.mobile} />
            <source media="(min-width: 1025px)" srcSet={imageUrl.desktop} />
            <img
              className="w-full h-full object-cover"
              src={imageUrl.desktop}
              alt=""
            />
          </picture>
        </div>
      ) : null}
      <div className="container relative">
        <h2
          className={classNames({
            'h2 font-sans': true,
            'lg:w-9/12': imageUrl,
            'lg:w-1/2': !imageUrl,
          })}
        >
          {title}
        </h2>
        {subtitle ? (
          <div className="display-m font-sans lg:w-1/2 mt-1.5 xl:mt-6">
            {subtitle}
          </div>
        ) : null}
      </div>
    </div>
  )
}
export default SectionFullWidth

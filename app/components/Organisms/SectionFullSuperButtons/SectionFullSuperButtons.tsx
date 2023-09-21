import type { FC } from 'react'
import classNames from 'classnames'

import type { Maybe } from '~/lib/generated'

import ButtonSuper from '../../Atoms/ButtonSuper/ButtonSuper'

interface SectionFullSuperButtonsProps {
  title: Maybe<string> | undefined
  imageUrl: {
    desktop: Maybe<string> | undefined
    mobile?: Maybe<string> | undefined
  }
  /**
   * Is backgroun position left, right or cover?
   * @default 'cover'
   */
  imagePosition?: 'cover' | 'left' | 'right'
  buttons: Array<{
    label: Maybe<string> | undefined
    to: Maybe<string> | undefined
    leftImageSrc: Maybe<string> | undefined
  }>
}
const SectionFullSuperButtons: FC<SectionFullSuperButtonsProps> = ({
  title,
  imageUrl,
  imagePosition = 'cover',
  buttons,
}) => {
  return (
    <div
      className={classNames({
        'section-full-super-buttons relative h-screen flex lg:items-center':
          true,
        'items-end pb-10 lg:pb-0': imagePosition === 'left',
        'py-10 lg:py-0': imagePosition !== 'left',
      })}
    >
      <div
        className={classNames({
          'bg-cover bg-center bg-no-repeat w-full absolute lg:h-[100%]': true,
          'h-[50vh] top-0 lg:w-1/2 lg:left-0': imagePosition === 'left',
          'h-[50vh] bottom-0 lg:w-1/2 lg:right-0': imagePosition === 'right',
          'h-[60%] lg:h-full bottom-0 lg:inset-0': imagePosition === 'cover',
        })}
      >
        <picture>
          <source media="(max-width: 1024px)" srcSet={imageUrl.mobile || ''} />
          <source media="(min-width: 1025px)" srcSet={imageUrl.desktop || ''} />
          <img
            className={classNames({
              'w-full h-full object-cover': !imageUrl.mobile,
              'w-full h-auto lg:h-full lg:object-cover': imageUrl.mobile,
            })}
            src={imageUrl.desktop || ''}
            alt=""
          />
        </picture>
      </div>
      <div className="container relative w-full">
        <div
          className={classNames({
            'lg:w-1/2 lg:ml-auto lg:pl-6 lg:pr-12': imagePosition === 'left',
            'lg:w-3/4': imagePosition === 'cover',
            'lg:w-2/3': imagePosition === 'right',
          })}
        >
          <h2
            className={classNames({
              'font-sans h2': true,
              h2: imagePosition === 'right',
              h3: imagePosition !== 'right',
            })}
          >
            {title}
          </h2>
          <div
            className={classNames({
              'flex flex-wrap': true,
              'mt-6': imagePosition === 'right',
              'lg:mt-16': imagePosition !== 'right',
              'mt-12': imagePosition === 'cover',
              'mt-4': imagePosition === 'left',
            })}
          >
            {buttons.map((el, i) => (
              <span
                key={i}
                className={classNames({
                  'inline-block mb-2 lg:mb-4': true,
                  'mr-2 lg:mr-4': i !== buttons.length - 1,
                })}
              >
                <ButtonSuper
                  label={el.label!}
                  to={el.to}
                  leftImageSrc={el.leftImageSrc!}
                  variant="filled"
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default SectionFullSuperButtons

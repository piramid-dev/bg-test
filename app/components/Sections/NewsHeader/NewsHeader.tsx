import { motion, useScroll, useTransform } from 'framer-motion'
import type { FC } from 'react'
import { useRef } from 'react'
import classNames from 'classnames'
import { Link } from '@remix-run/react'

import type { NewsTypes, ColorTypes } from '~/types/globalTypes'

import Chip from '../../Atoms/Chip/Chip'
import Button from '../../Atoms/Button/Button'

export type CoverShapes = 'squared' | 'rounded' | 'inverted-rounded-corners'

interface NewsHeaderProps {
  categoryChips: Array<{
    label: string
    to: string
    variant: 'transparent' | 'overlay' | 'white'
  }>
  type: NewsTypes
  color: ColorTypes
  title: React.ReactNode
  alt?: string
  shortDesc: string
  coverImageSrc?: string
  coverImageShape: CoverShapes
  authors: Array<{ name: string; role: string; to: string }>
}

const NewsHeader: FC<NewsHeaderProps> = ({
  type,
  color,
  categoryChips,
  title,
  alt,
  shortDesc,
  coverImageSrc,
  coverImageShape,
  authors,
}) => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  const widthValue = useTransform(
    scrollYProgress,
    [0, 0.5],
    coverImageShape === 'inverted-rounded-corners'
      ? ['699px', '920px']
      : ['41.667vw', '91vw'],
  )

  const heightValue = useTransform(
    scrollYProgress,
    [0, 0.5],
    ['15.417vw', '41.667vw'],
  )

  return (
    <div
      ref={containerRef}
      className={classNames({
        'pb-13 pt-12': true,
        'bg-red-500': color === 'red',
        'bg-purple-500': color === 'purple',
        'bg-green-500': color === 'green',
        'bg-blue-500': color === 'blue',
      })}
    >
      <div className="container text-center  has-decorator">
        <div className="mb-5 flex w-full justify-center gap-x-2">
          {categoryChips?.map((chip, idx) => (
            <Chip
              label={chip.label}
              to={chip.to}
              key={chip.label}
              variant={chip.variant}
              disabled
            />
          ))}
        </div>
        <h1 className="h1 my-4 lg:my-5 font-serif">{title}</h1>
        <div className="mt-4 lg:mt-5 mb-8 lg:mb-10">
          <p
            className="display-m font-serif"
            dangerouslySetInnerHTML={{ __html: shortDesc }}
          ></p>
        </div>
        <ul className="flex items-center justify-center gap-1 mb-8 lg:mb-10 body-m font-sans">
          {authors.map((author, idx) => (
            <li
              {...(idx !== authors.length - 1 && { className: 'has-divider' })}
              key={author.name}
            >
              {author.role}:{' '}
              <Link className="underline" to={author.to}>
                {author.name}
              </Link>
            </li>
          ))}
        </ul>
        {coverImageSrc && coverImageShape !== 'inverted-rounded-corners' ? (
          <motion.div
            className={classNames({
              'news-hero-img relative mx-auto max-w-full overflow-hidden ':
                true,
              'rounded-full': coverImageShape === 'rounded',
              'border-black border-[3px] news-hero-img-squared':
                coverImageShape === 'squared',
            })}
            {...(coverImageShape === 'rounded' && {
              style: { width: widthValue },
            })}
            {...(coverImageShape === 'squared' && {
              style: { height: heightValue },
            })}
          >
            <img
              src={coverImageSrc}
              alt={alt}
              className="absolute h-full w-full object-cover object-center"
            />
          </motion.div>
        ) : null}
        {coverImageSrc && coverImageShape === 'inverted-rounded-corners' ? (
          <motion.div
            style={{ width: widthValue }}
            className="overflow-hidden mx-auto"
          >
            <motion.svg
              width={widthValue}
              height="544"
              viewBox="0 0 920 544"
              fill="none"
              className="mx-auto"
            >
              <path
                d="M918 68.5714V475.394C901.69 475.637 889.273 479.839 879.843 486.122C870.135 492.59 863.682 501.203 859.396 509.77C855.112 518.332 852.978 526.876 851.912 533.266C851.379 536.465 851.111 539.134 850.977 541.009C850.936 541.583 850.908 542.082 850.888 542.5H69.1466C68.9035 526.2 64.6989 513.79 58.4121 504.366C51.9403 494.664 43.3219 488.215 34.7493 483.931C26.1826 479.65 17.6341 477.517 11.2398 476.452C8.03918 475.919 5.36868 475.652 3.49249 475.518C2.91839 475.477 2.41838 475.448 2 475.429V68.6058C18.3103 68.363 30.7272 64.161 40.1572 57.8782C49.8649 51.4103 56.318 42.7972 60.6045 34.2296C64.8879 25.6679 67.0222 17.1243 68.0879 10.7338C68.6214 7.53495 68.8887 4.86599 69.0227 2.99086C69.0637 2.41745 69.0922 1.91799 69.1121 1.5H850.853C851.096 17.8004 855.301 30.21 861.588 39.6343C868.06 49.3363 876.678 55.7854 885.251 60.0691C893.817 64.3498 902.366 66.4827 908.76 67.5478C911.961 68.0809 914.631 68.3481 916.508 68.482C917.082 68.523 917.582 68.5515 918 68.5714Z"
                fill="#FFC700"
              />
              <path
                d="M918 68.5714V475.394C901.69 475.637 889.273 479.839 879.843 486.122C870.135 492.59 863.682 501.203 859.396 509.77C855.112 518.332 852.978 526.876 851.912 533.266C851.379 536.465 851.111 539.134 850.977 541.009C850.936 541.583 850.908 542.082 850.888 542.5H69.1466C68.9035 526.2 64.6989 513.79 58.4121 504.366C51.9403 494.664 43.3219 488.215 34.7493 483.931C26.1826 479.65 17.6341 477.517 11.2398 476.452C8.03918 475.919 5.36868 475.652 3.49249 475.518C2.91839 475.477 2.41838 475.448 2 475.429V68.6058C18.3103 68.363 30.7272 64.161 40.1572 57.8782C49.8649 51.4103 56.318 42.7972 60.6045 34.2296C64.8879 25.6679 67.0222 17.1243 68.0879 10.7338C68.6214 7.53495 68.8887 4.86599 69.0227 2.99086C69.0637 2.41745 69.0922 1.91799 69.1121 1.5H850.853C851.096 17.8004 855.301 30.21 861.588 39.6343C868.06 49.3363 876.678 55.7854 885.251 60.0691C893.817 64.3498 902.366 66.4827 908.76 67.5478C911.961 68.0809 914.631 68.3481 916.508 68.482C917.082 68.523 917.582 68.5515 918 68.5714Z"
                fill="#FFC700"
              />
              <path
                d="M918 68.5714V475.394C901.69 475.637 889.273 479.839 879.843 486.122C870.135 492.59 863.682 501.203 859.396 509.77C855.112 518.332 852.978 526.876 851.912 533.266C851.379 536.465 851.111 539.134 850.977 541.009C850.936 541.583 850.908 542.082 850.888 542.5H69.1466C68.9035 526.2 64.6989 513.79 58.4121 504.366C51.9403 494.664 43.3219 488.215 34.7493 483.931C26.1826 479.65 17.6341 477.517 11.2398 476.452C8.03918 475.919 5.36868 475.652 3.49249 475.518C2.91839 475.477 2.41838 475.448 2 475.429V68.6058C18.3103 68.363 30.7272 64.161 40.1572 57.8782C49.8649 51.4103 56.318 42.7972 60.6045 34.2296C64.8879 25.6679 67.0222 17.1243 68.0879 10.7338C68.6214 7.53495 68.8887 4.86599 69.0227 2.99086C69.0637 2.41745 69.0922 1.91799 69.1121 1.5H850.853C851.096 17.8004 855.301 30.21 861.588 39.6343C868.06 49.3363 876.678 55.7854 885.251 60.0691C893.817 64.3498 902.366 66.4827 908.76 67.5478C911.961 68.0809 914.631 68.3481 916.508 68.482C917.082 68.523 917.582 68.5515 918 68.5714Z"
                fill="url(#pattern0)"
              />
              <path
                d="M918 68.5714V475.394C901.69 475.637 889.273 479.839 879.843 486.122C870.135 492.59 863.682 501.203 859.396 509.77C855.112 518.332 852.978 526.876 851.912 533.266C851.379 536.465 851.111 539.134 850.977 541.009C850.936 541.583 850.908 542.082 850.888 542.5H69.1466C68.9035 526.2 64.6989 513.79 58.4121 504.366C51.9403 494.664 43.3219 488.215 34.7493 483.931C26.1826 479.65 17.6341 477.517 11.2398 476.452C8.03918 475.919 5.36868 475.652 3.49249 475.518C2.91839 475.477 2.41838 475.448 2 475.429V68.6058C18.3103 68.363 30.7272 64.161 40.1572 57.8782C49.8649 51.4103 56.318 42.7972 60.6045 34.2296C64.8879 25.6679 67.0222 17.1243 68.0879 10.7338C68.6214 7.53495 68.8887 4.86599 69.0227 2.99086C69.0637 2.41745 69.0922 1.91799 69.1121 1.5H850.853C851.096 17.8004 855.301 30.21 861.588 39.6343C868.06 49.3363 876.678 55.7854 885.251 60.0691C893.817 64.3498 902.366 66.4827 908.76 67.5478C911.961 68.0809 914.631 68.3481 916.508 68.482C917.082 68.523 917.582 68.5515 918 68.5714Z"
                stroke="black"
                stroke-width="3"
              />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image_bg"
                    transform="matrix(0.00025 0 0 0.000422335 0 -0.0631831)"
                  />
                </pattern>
                <image
                  id="image_bg"
                  width="4000"
                  height="2667"
                  xlinkHref={coverImageSrc}
                />
              </defs>
            </motion.svg>
          </motion.div>
        ) : null}
        <div className="flex justify-center items-center gap-x-2 py-6 font-sans display-s">
          Condividi <Button variant="outline" icon="FacebookLogo" />
          <Button variant="outline" icon="TwitterLogo" />
          <Button variant="outline" icon="ShareNetwork" />
        </div>
      </div>
    </div>
  )
}

export default NewsHeader

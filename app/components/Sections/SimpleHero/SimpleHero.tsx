import type { FC } from 'react'
import classNames from 'classnames'

import type { Maybe } from '~/lib/generated'

interface SimpleHeroProps {
  title: string
  subtitle?: Maybe<string>
  description?: string
  imageUrl: string
}

const SimpleHero: FC<SimpleHeroProps> = ({
  title,
  subtitle,
  description,
  imageUrl,
}) => {
  return (
    <div>
      {/* TODO: fix height when we have header */}
      <div className="relative simple-hero-h overflow-hidden">
        <div
          style={{ backgroundImage: `url(${imageUrl})` }}
          className="h-full w-full bg-cover bg-center "
        />
        <div className="container">
          <div className="relative">
            <div className="h1 before-white absolute bottom-0 left-0 max-w-[90%] bg-white pr-4 pt-4 font-sans lg:pb-6 lg:pr-12 lg:pt-8">
              <span className="relative">{title}</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className={classNames({
          container: true,
          'py-8 lg:py-0': !subtitle && !description,
        })}
      >
        {subtitle || description ? (
          <div
            className={classNames({
              'display-m font-sans lg:w-10/12': true,
              'py-6': subtitle,
              'py-10 lg:py-16': !subtitle,
            })}
          >
            {subtitle ? <h3 className="!font-bold mb-4">{subtitle}</h3> : null}
            {description}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default SimpleHero

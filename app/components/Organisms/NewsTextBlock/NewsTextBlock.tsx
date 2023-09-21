import type { FC } from 'react'
import classNames from 'classnames'

import type { Maybe } from '../../../lib/generated'

interface NewsTextBlockProps {
  text: React.ReactNode
  fontFamily?: 'sans' | 'serif'
  colorClass?: Maybe<string>
}
const NewsTextBlock: FC<NewsTextBlockProps> = ({
  text,
  fontFamily = 'serif',
  colorClass,
}) => {
  return (
    <div className="container">
      <div className="lg:w-8/12 lg:mx-auto">
        <div
          className={classNames(colorClass, {
            'body-xl text-block': true,
            'font-serif': fontFamily === 'serif',
            'font-sans': fontFamily === 'sans',
          })}
          dangerouslySetInnerHTML={{
            __html: text as string,
          }}
        ></div>
      </div>
    </div>
  )
}
export default NewsTextBlock

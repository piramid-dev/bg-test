import type { FC } from 'react'
import classNames from 'classnames'
interface NewsHeadingProps {
  title: string
  headingSize?: 'default' | 'small'
  fontFamily?: 'sans' | 'serif'
}
const NewsHeading: FC<NewsHeadingProps> = ({
  title,
  headingSize = 'default',
  fontFamily = 'serif',
}) => {
  return (
    <div className="container mt-10 lg:mt-16">
      <div className="lg:w-8/12 lg:mx-auto">
        {headingSize === 'default' ? (
          <h2
            className={classNames({
              'h3 !font-bold mb-2 lg:mb-6': true,
              'font-serif': fontFamily === 'serif',
              'font-sans': fontFamily === 'sans',
            })}
          >
            {title}
          </h2>
        ) : null}
        {headingSize === 'small' ? (
          <h3
            className={classNames({
              'h4 !font-bold mb-4 lg:mb-6': true,
              'font-serif': fontFamily === 'serif',
              'font-sans': fontFamily === 'sans',
            })}
          >
            {title}
          </h3>
        ) : null}
      </div>
    </div>
  )
}
export default NewsHeading

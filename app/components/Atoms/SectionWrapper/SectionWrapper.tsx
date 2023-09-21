import classNames from 'classnames'
import type { FC } from 'react'

interface SectionWrapperProps {
  background: 'dove' | 'dove-500' | 'white' | 'black'
  title?: string
  containerClass?: string
  children: React.ReactNode
}

const SectionWrapper: FC<SectionWrapperProps> = ({
  background = 'white',
  title,
  children,
  containerClass = '',
}) => {
  return (
    <section
      className={classNames({
        'bg-dove-500': background === 'dove-500',
        'bg-dove-300': background === 'dove',
        'bg-white': background === 'white',
        'bg-black': background === 'black',
        'overflow-hidden': true,
      })}
    >
      <div
        className={classNames({
          container: true,
          [containerClass]: containerClass,
        })}
      >
        {title ? <h3 className="h3 mb-12 font-sans">{title}</h3> : null}
        {children}
      </div>
    </section>
  )
}

export default SectionWrapper

import type { FC } from 'react'
import classNames from 'classnames'

import type { NewsTypes, ColorTypes } from '~/types/globalTypes'

interface NewsTwoColsHighlightProps {
  type: NewsTypes
  highlight: string
  highlightPos: 'left' | 'right'
  text: string
  color: ColorTypes
}
const NewsTwoColsHighlight: FC<NewsTwoColsHighlightProps> = ({
  color,
  highlight,
  highlightPos = 'left',
  text,
}) => {
  return (
    <div
      className={classNames({
        'bg-red-500': color === 'red',
        'bg-purple-500': color === 'purple',
        'bg-green-500': color === 'green',
        'bg-blue-500': color === 'blue',
      })}
    >
      <div
        className={classNames({
          'container py-10 lg:pt-20 lg:flex lg:items-center gap-x-6': true,
          'bg-red-500': color === 'red',
          'bg-purple-500': color === 'purple',
          'bg-green-500': color === 'green',
          'bg-blue-500': color === 'blue',
          'flex flex-col-reverse lg:flex-row-reverse': highlightPos === 'right',
        })}
      >
        <div className="lg:w-1/2 pb-10">
          <div
            className="has-decorator-both has-decorator-bottom font-serif display-l text-center uppercase"
            dangerouslySetInnerHTML={{
              __html: highlight as string,
            }}
          ></div>
        </div>
        <div
          className="lg:w-1/2 pb-10 display-serif body-xl"
          dangerouslySetInnerHTML={{
            __html: text as string,
          }}
        ></div>
      </div>
    </div>
  )
}
export default NewsTwoColsHighlight

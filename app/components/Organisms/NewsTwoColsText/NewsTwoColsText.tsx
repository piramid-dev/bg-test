import type { FC } from 'react'
import classNames from 'classnames'
interface NewsTwoColsTextProps {
  leftColumn: {
    title?: string
    content: string
  }
  rightColumn: {
    title?: string
    content: string
  }
  swapContent: boolean
}
const NewsTwoColsText: FC<NewsTwoColsTextProps> = ({
  leftColumn,
  rightColumn,
  swapContent = false,
}) => {
  return (
    <div
      className={classNames({
        'container pt-10 lg:pt-20 lg:flex gap-x-6': true,
        'flex flex-col-reverse lg:flex-row-reverse': swapContent,
      })}
    >
      <div className="lg:w-1/2 pb-10">
        {leftColumn.title ? (
          <h5 className="body-m font-sans mb-2 uppercase">
            {leftColumn.title}
          </h5>
        ) : null}
        <div
          className="font-serif display-l"
          dangerouslySetInnerHTML={{ __html: leftColumn.content as string }}
        ></div>
      </div>
      <div className="lg:w-1/2 pb-10">
        {rightColumn.title ? (
          <h3 className="h3 font-serif mb-6 !font-bold ">
            {rightColumn.title}
          </h3>
        ) : null}
        <div
          className="font-serif body-xl"
          dangerouslySetInnerHTML={{ __html: rightColumn.content as string }}
        ></div>
      </div>
    </div>
  )
}
export default NewsTwoColsText

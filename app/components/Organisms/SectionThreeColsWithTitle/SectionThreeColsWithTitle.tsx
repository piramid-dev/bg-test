import type { FC } from 'react'

type col = {
  title: string
  text: string
}

interface SectionThreeColsWithTitleProps {
  title: string
  cols: [col, col, col]
  imageUrl: string
}

const SectionThreeColsWithTitle: FC<SectionThreeColsWithTitleProps> = ({
  title,
  cols,
  imageUrl,
}) => {
  return (
    <div className="bg-white overflow-hidden">
      <div className="container text-center py-12 lg:py-16">
        <h2 className="h2 font-sans">{title}</h2>
        <div className="pt-12 lg:pt-16 lg:flex lg:gap-x-6">
          {cols.map((el) => (
            <div key={el.title} className="mb-6 lg:mb-0">
              <h4 className="h4 font-sans mb-2 lg:mb-6">{el.title}</h4>
              <div className="font-sans body-l">{el.text}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-wrapper h-[500px] lg:h-screen -mt-30 lg:-mt-[200px]">
        <img src={imageUrl} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  )
}

export default SectionThreeColsWithTitle

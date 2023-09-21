import type { FC } from 'react'
interface NewsHighlightTextBlockProps {
  title: string
  text: string
}
const NewsHighlightTextBlock: FC<NewsHighlightTextBlockProps> = ({
  title,
  text,
}) => {
  return (
    <div className="container my-10 lg:my-16">
      <div className="lg:w-8/12 lg:mx-auto">
        <h5 className="font-sans body-m mb-2 uppercase">{title}</h5>
        <div className="font-serif display-l">{text}</div>
      </div>
    </div>
  )
}
export default NewsHighlightTextBlock

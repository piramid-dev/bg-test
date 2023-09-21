import type { FC } from 'react'
interface QuoteProps {
  quote: string
  author?: string
}
const Quote: FC<QuoteProps> = ({ quote, author }) => {
  return (
    <div className="container text-center lg:min-h-[75vh] flex flex-col items-center justify-center gap-6 py-10">
      <div className="font-serif display-l">«{quote}»</div>
      {author ? <p className="uppercase body-m">{author}</p> : null}
    </div>
  )
}
export default Quote

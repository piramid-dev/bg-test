import type { FC, ReactNode } from 'react'
interface OverlappedTextBlockProps {
  eyelet: string
  text: ReactNode
}
const OverlappedTextBlock: FC<OverlappedTextBlockProps> = ({
  eyelet,
  text,
}) => {
  return (
    <div className="container mb-4 lg:-mb-[6em] relative z-10">
      <h5
        className="display-m font-semibold font-sans mb-4"
        dangerouslySetInnerHTML={{ __html: eyelet }}
      ></h5>
      <div
        className="h2 font-sans !font-normal"
        dangerouslySetInnerHTML={{
          __html: text as string,
        }}
      />
    </div>
  )
}
export default OverlappedTextBlock

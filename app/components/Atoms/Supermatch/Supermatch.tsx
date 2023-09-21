import { ThumbsUp } from '@phosphor-icons/react'
import type { FC } from 'react'

interface SupermatchProps {}

const Supermatch: FC<SupermatchProps> = () => {
  // TODO: typography
  return (
    <div className="m-2 flex flex-row items-center">
      <ThumbsUp className="mr-2 h-4 w-4 text-green-500 lg:h-5 lg:w-5" />
      <div className="body-l font-sans">Editor's choice</div>
    </div>
  )
}

export default Supermatch

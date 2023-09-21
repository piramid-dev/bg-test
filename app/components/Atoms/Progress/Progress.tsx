import { useState, type FC, useEffect } from 'react'

interface ProgressProps {
  progress: number
}

const Progress: FC<ProgressProps> = ({ progress }) => {
  const [width, setWidth] = useState(progress)

  useEffect(() => {
    setWidth(Math.max(Math.min(progress || 0, 100), 0))
  }, [progress])

  return (
    <div className="h-1.5 rounded-full relative w-full">
      <div
        className="h-1.5 rounded-full bg-black transition-all duration-500"
        style={{ width: `${width}%` }}
      />
      <div className="absolute left-0 right-0 bg-black/40 h-[1px] top-1/2 -translate-y-1/2"></div>
    </div>
  )
}

export default Progress

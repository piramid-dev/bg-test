import type { FC } from 'react'

interface EvaluationWarnProps {}

const EvaluationWarn: FC<EvaluationWarnProps> = () => {
  return (
    <div className="p-4">
      <div className="body-m mb-2.5 text-center font-sans text-black/70">
        I grafici raccolgono le impressioni dei nostri test
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-baseline gap-1">
          <div className="h-3 w-3 rounded-full bg-yellow-300"></div>
          <span className="body-s font-sans text-black/50">
            Dato del prodotto
          </span>
        </div>
        <div className="flex flex-row items-baseline gap-1">
          <div className="h-3 w-3 rounded-full bg-black/20"></div>
          <span className="body-s font-sans text-black/50">
            Media di categoria
          </span>
        </div>
      </div>
    </div>
  )
}

export default EvaluationWarn

import type { FC } from 'react'

import type { Maybe } from '~/lib/generated'
import type { ICardInfo } from '~/types/card-info'

import EvaluationWarn from '../../Atoms/EvaluationWarn/EvaluationWarn'
import SectionWrapper from '../../Atoms/SectionWrapper/SectionWrapper'
import ChartRadarTriangle from '../../Charts/ChartRadarTriangle'
import CardInfo from '../../Organisms/CardInfo/CardInfo'

interface ProductEvaluationWithInfoProps {
  title: Maybe<string>
  locked: boolean
  firstChartTriangle?: {
    title?: Maybe<string>
    suggestedUse?: Maybe<string>
    chartData: number[]
    chartLabels: (Maybe<string> | undefined)[]
    meanData: number[]
  }
  secondChartTriangle?: {
    title?: Maybe<string>
    suggestedUse?: Maybe<string>
    chartData: number[]
    chartLabels: (Maybe<string> | undefined)[]
    meanData: number[]
  }

  firstBoxData?: ICardInfo[]
  secondBoxData?: ICardInfo[]
}

const ProductEvaluationWithInfo: FC<ProductEvaluationWithInfoProps> = ({
  title,
  locked,
  firstChartTriangle,
  secondChartTriangle,
  firstBoxData,
  secondBoxData,
}) => {
  return (
    <SectionWrapper
      background="dove"
      title="Le Valutazioni della Buyers"
      containerClass="py-10 lg:py-20"
    >
      <div className="gap-x-4 gap-y-3 lg:gap-y-4 max-lg:flex max-lg:flex-col lg:columns-3 lg:[&>*]:mb-4">
        {firstChartTriangle ? (
          <div className="order-1 lg:break-after-column">
            <ChartRadarTriangle {...firstChartTriangle} locked={locked} />
          </div>
        ) : null}
        <div className="order-3">
          <EvaluationWarn />
        </div>

        {firstBoxData && firstBoxData.length ? (
          <CardInfo
            infos={firstBoxData}
            title="Test di sgancio / Certificati Dynafit"
            locked={locked}
          />
        ) : null}
        {secondBoxData && secondBoxData.length ? (
          <div className="order-1 lg:break-after-column">
            <CardInfo
              infos={secondBoxData}
              title="Test di sgancio / Altri Inserti"
              locked={locked}
            />
          </div>
        ) : null}
        {secondChartTriangle ? (
          <div className="order-3">
            <ChartRadarTriangle {...secondChartTriangle} locked={locked} />
          </div>
        ) : null}
      </div>
    </SectionWrapper>
  )
}

export default ProductEvaluationWithInfo

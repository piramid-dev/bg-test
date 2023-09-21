import { useState, type FC, useEffect } from 'react'
import { Item } from 'react-photoswipe-gallery'
import classNames from 'classnames'

import type { ICardInfo } from '~/types/card-info'
import type { Maybe } from '~/lib/generated'
import { useContext } from '~/hooks/useContext'

import EvaluationWarn from '../../Atoms/EvaluationWarn/EvaluationWarn'
import SectionWrapper from '../../Atoms/SectionWrapper/SectionWrapper'
import ChartBar from '../../Charts/ChartBar'
import ChartPie from '../../Charts/ChartPie'
import ChartRadarSquare from '../../Charts/ChartRadarSquare'
import ChartRadarTriangle from '../../Charts/ChartRadarTriangle'
import CardInfo from '../..//Organisms/CardInfo/CardInfo'

interface ProductEvaluationProps {
  variant?: 'full' | 'one-row' | 'one-row-compressed'
  title?: Maybe<string>
  locked: boolean
  location?: ICardInfo[]
  chartTriangle?: {
    title?: Maybe<string>
    suggestedUse?: Maybe<string>
    chartData: number[]
    chartLabels: (Maybe<string> | undefined)[]
    meanData: number[]
  }
  chartTriangleTwo?: {
    title?: Maybe<string>
    suggestedUse?: Maybe<string>
    chartData: number[]
    chartLabels: (Maybe<string> | undefined)[]
    meanData: number[]
  }
  chartSquare?: {
    title?: Maybe<string>
    suggestedUse?: Maybe<string>
    chartData: number[]
    chartLabels: (Maybe<string> | undefined)[]
    meanData: number[]
  }
  chartPie?: {
    title?: Maybe<string>
    chartData: number[]
    chartLabels: (Maybe<string> | undefined)[]
    suggestedUse?: Maybe<string>
  }
  chartBar?: {
    title?: Maybe<string>
    chartData: number[]
    chartLabels: (Maybe<string> | undefined)[]
    suggestedUse?: Maybe<string>
    meanData: number[]
  }
  imageUrl?: Maybe<string>
}

const ProductEvaluation: FC<ProductEvaluationProps> = ({
  variant = 'full',
  title,
  locked,
  location,
  chartTriangle,
  chartTriangleTwo,
  imageUrl,
  chartSquare,
  chartPie,
  chartBar,
}) => {
  const [imageMetadata, setImageMetadata] = useState({
    width: 0,
    height: 0,
    loaded: false,
  })
  const { validPass } = useContext()
  locked = !validPass

  useEffect(() => {
    if (!imageUrl) return

    const img = new Image()
    img.src = imageUrl

    img.onload = () => {
      setImageMetadata({ width: img.width, height: img.height, loaded: true })
    }
  }, [imageUrl])

  return (
    <SectionWrapper
      background="dove"
      title="Le Valutazioni della Buyers"
      containerClass="py-10 lg:py-20 relative z-0"
    >
      <div className="gap-x-4 gap-y-3 lg:gap-y-4 max-lg:flex max-lg:flex-col lg:columns-3 lg:[&>*]:mb-4">
        {location && variant === 'full' ? (
          <div className="order-1">
            <CardInfo
              title="Posizionamento"
              locked={locked}
              infos={location}
              showInfoIcon
              customClass={classNames({
                'max-lg:!aspect-[auto]': true,
                card: !locked,
              })}
            />
          </div>
        ) : null}

        <div className="order-5 lg:break-after-column">
          {chartSquare ? (
            <ChartRadarSquare {...chartSquare} locked={locked} />
          ) : null}
          {chartTriangleTwo ? (
            <ChartRadarTriangle {...chartTriangleTwo} locked={locked} />
          ) : null}
        </div>

        <div className="order-3">
          <EvaluationWarn />
        </div>

        {variant === 'full' && chartTriangle ? (
          <div className="order-4">
            <ChartRadarTriangle {...chartTriangle} locked={locked} />
          </div>
        ) : null}

        {chartPie ? (
          <div className="order-6">
            <ChartPie {...chartPie} locked={locked} />
          </div>
        ) : null}

        {variant === 'full' && imageUrl && imageMetadata.loaded ? (
          <div className="order-2 w-full">
            <div
              className={classNames({
                'relative w-full overflow-hidden rounded-xl border bg-white':
                  true,
                card: !locked,
                'card-locked': locked,
              })}
            >
              <Item
                original={imageUrl}
                thumbnail={imageUrl}
                width={imageMetadata.width}
                height={imageMetadata.height}
              >
                {({ ref, open }) => (
                  <img
                    className="absolute w-full h-full object-cover cursor-pointer"
                    src={imageUrl}
                    alt="section"
                    ref={ref as any}
                    onClick={open}
                  />
                )}
              </Item>
            </div>
          </div>
        ) : null}

        <div className="order-7">
          {chartBar ? <ChartBar {...chartBar} locked={locked} /> : null}
        </div>

        {variant === 'one-row-compressed' ? (
          <div className="h-80 w-full"></div>
        ) : null}
      </div>
    </SectionWrapper>
  )
}

export default ProductEvaluation

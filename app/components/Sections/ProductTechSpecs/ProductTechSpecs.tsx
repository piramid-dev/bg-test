import type { FC } from 'react'

import type { Maybe } from '~/lib/generated'
import type { ICardInfo } from '~/types/card-info'

import SectionWrapper from '../../Atoms/SectionWrapper/SectionWrapper'
import CardDataCompare from '../../Organisms/CardDataCompare/CardDataCompare'
import CardInfo from '../../Organisms/CardInfo/CardInfo'

export interface ProductTechSpecsProps {
  locked: boolean
  dataCompare: {
    mainLabel?: Maybe<string>
    mainData?: Maybe<string>
    measurements: {
      data?: Maybe<string>
      declared?: Maybe<number>
      measured?: Maybe<number>
      unit?: Maybe<string>
    }[]
  }

  firstSpecs?: ICardInfo[]
  secondSpecs?: ICardInfo[]
}

const ProductTechSpecs: FC<ProductTechSpecsProps> = ({
  locked,
  dataCompare,
  firstSpecs,
  secondSpecs,
}) => {
  console.log('data', firstSpecs, secondSpecs)
  return (
    <SectionWrapper
      title="Specifiche tecniche"
      containerClass="py-10 lg:py-20 relative z-0"
      background="dove"
    >
      <div className="lg:columns-2 [&>*]:mb-3 [&>*:last-child]:mb-0">
        {firstSpecs?.length ? (
          <div>
            <CardInfo infos={firstSpecs} />
          </div>
        ) : null}
        {secondSpecs?.length ? (
          <div>
            <CardInfo infos={secondSpecs} />
          </div>
        ) : null}
        {dataCompare ? (
          <div>
            <CardDataCompare {...dataCompare} locked={locked} />
          </div>
        ) : null}
      </div>
    </SectionWrapper>
  )
}

export default ProductTechSpecs

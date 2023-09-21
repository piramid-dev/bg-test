import { type FC } from 'react'

import type { Maybe } from '~/lib/generated'
import { useContext } from '~/hooks/useContext'

import SectionWrapper from '../../Atoms/SectionWrapper/SectionWrapper'
import CardText from '../../Organisms/CardText/CardText'
import PhotoGrid from '../../Atoms/PhotoGrid/PhotoGrid'

interface ProductInWordsProps {
  intro?: Maybe<string>
  description?: Maybe<string>
  descriptionTitle?: Maybe<string>
  lab?: Maybe<string>
  skiing?: Maybe<string>
  locked: boolean
  images: (Maybe<string> | undefined)[]
}

const ProductInWords: FC<ProductInWordsProps> = ({
  intro,
  description,
  lab,
  skiing,
  locked,
  images,
  descriptionTitle,
}) => {
  const { validPass } = useContext()
  return (
    <SectionWrapper
      title="A Parole"
      containerClass="py-10 lg:py-20 relative z-0"
      background="dove"
    >
      <CardText
        title="Intro"
        text={intro}
        size="large"
        locked={false}
        showLock={false}
      />

      {images?.length ? <PhotoGrid images={images} /> : null}

      <div
        className={
          description || lab || skiing
            ? 'flex flex-col gap-3 py-3 lg:gap-4 lg:flex-row lg:pt-20'
            : ''
        }
      >
        {description ? (
          <div className="lg:w-1/2">
            <CardText
              title={descriptionTitle}
              text={description}
              size="regular"
              locked={!validPass ? true : false}
            />
          </div>
        ) : null}

        {lab ? (
          <div className="lg:w-1/2">
            <CardText
              title="Lab"
              text={lab}
              size="regular"
              locked={!validPass ? true : false}
            />
          </div>
        ) : null}

        {skiing ? (
          <div className="lg:w-1/2">
            <CardText
              title="Sciata"
              text={skiing}
              size="regular"
              locked={!validPass ? true : false}
            />
          </div>
        ) : null}
      </div>
    </SectionWrapper>
  )
}

export default ProductInWords

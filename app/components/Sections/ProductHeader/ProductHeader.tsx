import type { FC } from 'react'
import { Form, useNavigation } from '@remix-run/react'
import { useState } from 'react'

import type { Maybe } from '~/lib/generated'
import { useContext } from '~/hooks/useContext'
import { useLocalizeLink } from '~/hooks/useLocalizeLink'

import Button from '../../Atoms/Button/Button'
import Chip from '../../Atoms/Chip/Chip'
import LinkMenu from '../../Atoms/LinkMenu/LinkMenu'
import ProductCover from '../../Atoms/ProductCover/ProductCover'
import CardSummary from '../../Organisms/CardSummary/CardSummary'

/**
 * Array of filters
 */

interface ProductHeaderProps {
  productId?: Maybe<string>
  userId?: Maybe<string>
  chips: Array<{ label?: Maybe<string>; to?: Maybe<string> }>
  brand: Array<{ label?: Maybe<string>; to?: Maybe<string> }>
  title?: Maybe<string>
  shortDesc?: Maybe<string>
  ProductCoverData: {
    coverAltTxt?: Maybe<string>
    coverImageSrc?: Maybe<string>
    coverImageFullSrc?: Maybe<string>
    testedIn?: Maybe<string>
    awards: Array<{ name?: Maybe<string>; img?: Maybe<string> }>
  }
  CardSummaryData?: {
    title?: Maybe<string>
    locked: boolean
    apt_text?: Maybe<string>
    not_apt_text?: Maybe<string>
    also_apt_text?: Maybe<string>
  }
  onFeedback?: Function
  isFeedbackVisible?: boolean
  hasCompiledForm?: boolean
}

const ProductHeader: FC<ProductHeaderProps> = ({
  productId,
  chips,
  brand,
  title,
  shortDesc,
  ProductCoverData,
  CardSummaryData,
  onFeedback,
  isFeedbackVisible = false,
  hasCompiledForm = false,
}) => {
  const { user } = useContext()
  const navigation = useNavigation()
  const isFavoriteProduct = user?.favoriteProducts?.find(
    (fav: { id: string }) => fav?.id === productId,
  )
  const { l } = useLocalizeLink()

  const [isFavorite, setIsFavorite] = useState(isFavoriteProduct)

  const handleOnFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  const handleOnFeedback = () => {
    console.log('onFeedback')
    onFeedback && onFeedback()
  }

  return (
    <>
      <div className="container mb-16 lg:mb-24">
        <div className="-mx-2 lg:-mx-3">
          <div className="col lg:float-left lg:w-7/12 pt-8 lg:pt-10">
            <div className="flex w-full">
              <span className="mr-7 flex items-center gap-x-2">
                {chips?.map((chip) => (
                  <Chip label={chip.label} to={chip.to} key={chip.label} />
                ))}
              </span>
              {brand?.map((brand) => (
                <LinkMenu
                  label={brand.label}
                  to={l(`/products/?brand=${brand.to}`)}
                  key={brand.label}
                />
              ))}
            </div>

            <h1 className="h1 pt-6 font-sans lg:pb-5 lg:pt-2">{title}</h1>

            <div className="block w-full py-4 lg:mb-6 lg:flex">
              <Form action={user ? `/favorites/${productId}` : '/login'}>
                <div className="mb-4 mr-10 flex items-center lg:mb-0 align-middle">
                  <Button
                    icon="Star"
                    label=""
                    type="submit"
                    variant={isFavorite ? 'primary' : 'secondary'}
                    disabled={navigation.state === 'submitting'}
                    onClick={handleOnFavorite}
                    extraClasses="cursor-loading"
                  />
                  <span className="body-m ml-2 font-sans text-black/70 lg:max-w-[180px] inline-flex">
                    {isFavorite
                      ? 'Aggiunto ai preferiti'
                      : 'Aggiungilo ai tuoi preferiti'}
                  </span>
                </div>
              </Form>
              <div className="flex items-center">
                <Button
                  variant="secondary"
                  label="L'ho provato"
                  onClick={handleOnFeedback}
                />
                <span className="body-m ml-2 font-sans text-black/70">
                  Dicci la tua su questo <br />
                  prodotto
                </span>
              </div>
            </div>
          </div>

          <ProductCover {...ProductCoverData} />

          <div className="col lg:w-7/12">
            <div className="display-m my-4 font-sans lg:mb-10">{shortDesc}</div>
            {CardSummaryData ? <CardSummary {...CardSummaryData} /> : null}
          </div>
        </div>
      </div>
      <div className="w-full clear-both"></div>
    </>
  )
}

export default ProductHeader

import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { useContext } from '../../../hooks/useContext'
import Button from '../../Atoms/Button/Button'
interface NewsShareBlockProps {}
const NewsShareBlock: FC<NewsShareBlockProps> = () => {
  const { t } = useTranslation()

  // const { l } = useLocalizeLink()
  const { user } = useContext() || false
  return (
    <div className="container py-28 xl:py-32">
      <div className="pb-6 lg:pb-10 border-b border-black/40 text-center">
        <div className="lg:w-1/2 mx-auto">
          <div className="font-sans display-s">
            {t('newsShareBlockHeadingLine_1')}
            <br />
            {t('newsShareBlockHeadingLine_2')}
          </div>
          <div className="flex justify-center items-center gap-x-2 mt-4 font-sans display-s">
            <Button variant="outline" icon="FacebookLogo" />
            <Button variant="outline" icon="TwitterLogo" />
            <Button variant="outline" icon="ShareNetwork" />
          </div>

          {user ? (
            <div className="font-sans body-l  mb-t xl:mt-12">
              <div className="mb-4 text-black/70">{t('sendUsComment')}</div>
              <Button
                variant="outline-inverted"
                label={t('write-to-us')}
                icon="ArrowRight"
                iconPos="left"
                to="mailto:redazione@mulatero.it"
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
export default NewsShareBlock

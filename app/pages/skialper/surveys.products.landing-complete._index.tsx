import { useNavigate, useSearchParams } from '@remix-run/react'
import { useTranslation } from 'react-i18next'

import Button from '~/components/Atoms/Button/Button'

export default function SurveyCustomerProfilation() {
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <main className="w-screen h-screen relative overflow-y-hidden">
      <div className="absolute w-screen top-0 left-1/2 -translate-x-1/2 lg:w-[50vw] p-4 text-center flex-col flex items-center">
        <img
          src={params.get('productImageUrl') || ''}
          className="w-5/12 mb-6"
          alt=""
        />
        <h3 className="font-sans h3 mb-1">{t('good_job')}</h3>
        <p className="font-sans body-m text-black/70 w-3/4">
          {t('landing.products')}
        </p>
        <Button
          variant="primary"
          label={t('landing.products_cta')}
          containerClassName="w-3/4 mt-10"
          icon="ArrowRight"
          onClick={() => {
            navigate(params.get('callbackUrl') || '/')
          }}
        />
      </div>
    </main>
  )
}

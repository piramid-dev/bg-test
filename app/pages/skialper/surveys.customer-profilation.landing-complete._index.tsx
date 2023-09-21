import { useTranslation } from 'react-i18next'

export default function SurveyCustomerProfilation() {
  const { t } = useTranslation()

  return (
    <main className="w-screen h-screen relative overflow-y-hidden">
      <div className="absolute w-screen top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 lg:w-[50vw] p-4 text-center flex-col flex items-center">
        <img src="/assets/landing-survey.png" className="w-full mb-13" alt="" />
        <h3 className="font-sans h3 mb-1">{t('thank_you')}!</h3>
        <p className="font-sans body-m text-black/70 w-1/2">
          {t('landing.customer_profilation')}
        </p>
      </div>
    </main>
  )
}

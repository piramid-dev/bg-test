import type { FC } from 'react'
import { Link } from '@remix-run/react'
import { useTranslation } from 'react-i18next'
import { InstagramLogo, ShareNetwork, Newspaper } from '@phosphor-icons/react'

import type { Maybe } from '~/lib/generated'

interface SiteFooterProps {
  payOff: string
  payOffSecondary: string
  firstCol: {
    title: string
    menuNav: {
      to: Maybe<string>
      label: Maybe<string>
    }[]
  }
  secondCol: {
    title: string
    menuNav: {
      to: Maybe<string>
      label: Maybe<string>
    }[]
  }
}
const SiteFooter: FC<SiteFooterProps> = ({
  firstCol,
  secondCol,
  payOff,
  payOffSecondary,
}) => {
  const { t } = useTranslation()

  return (
    <div className="bg-black/90 py-6">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between text-white">
          <img
            src="/assets/logo-buyers-negative.svg"
            alt="logo"
            width="134px"
          />
          <div
            className="font-sans display-s lg:w-1/2 text-center order-last lg:order-none mt-8 lg:mt-0 mx-auto"
            dangerouslySetInnerHTML={{ __html: payOff }}
          ></div>
          <div className="flex items-center gap-x-3 lg:gap-x-6 lg:order-last">
            <span className="inline-block w-[57px] font-sans body-s">
              Powered by
            </span>
            <img
              src="/assets/Mulatero.svg"
              alt="logo mulatero"
              width="60px"
              className=""
            />
          </div>
        </div>
        <div className="mt-8 lg:mt-20 lg:flex lg:gap-x-12">
          <div className="lg:w-1/2 xl:w-1/4 mb-12">
            <div className="font-sans body-m text-white/60 mb-6">
              {firstCol.title}
            </div>
            <ul>
              {firstCol.menuNav.map((el) => (
                <li key={el.label}>
                  <Link
                    to={el.to}
                    className="text-white hover:text-white/60 transition-all duration-300 mb-2 font-sans body-m"
                  >
                    {el.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 xl:w-1/4 mb-12">
            <div className="font-sans body-m text-white/60 mb-6">
              {secondCol.title}
            </div>
            <ul>
              {secondCol.menuNav.map((el) => (
                <li key={el.label}>
                  <Link
                    to={el.to}
                    className="text-white hover:text-white/60 transition-all duration-300 mb-2 font-sans body-m"
                  >
                    {el.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 xl:w-1/4 mb-12">
            <div className="mb-12">
              <div className="font-sans body-m text-white/60 mb-6">
                {t('whatDoYouThink')}
              </div>
              <Link
                to="mailto:redazione@mulatero.it"
                className="text-white hover:text-white/60 transition-all duration-300 font-sans body-m "
              >
                {t('tellUsYours')}
              </Link>
            </div>
            <div>
              <div className="font-sans body-m text-white/60 mb-6">
                <span className="uppercase block">{t('forCompanies')}</span>

                {t('doYouWantToBePart')}
              </div>
              <Link
                to="mailto:redazione@mulatero.it"
                className="text-white hover:text-white/60 transition-all duration-300 font-sans body-m"
              >
                {t('contactUs')}
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 xl:w-1/4 mb-12">
            <ul>
              <li className="text-white/60 hover:text-white transition-all duration-300 mb-5 lg:mb-6">
                <Link
                  to="https://skialper.it"
                  target="_blank"
                  className="flex items-center font-sans body-m"
                >
                  <ShareNetwork className="mr-2 text-white/60 " />
                  skialper.it
                </Link>
              </li>
              <li className="text-white/60 hover:text-white transition-all duration-300 mb-5 lg:mb-6">
                <Link
                  to="https://www.instagram.com/skialper/"
                  target="_blank"
                  className="flex items-center font-sans body-m"
                >
                  <InstagramLogo className="mr-2 text-white/60 " />
                  @skialper
                </Link>
              </li>
              <li className="text-white/60 hover:text-white transition-all duration-300 mb-5 lg:mb-6">
                <Link
                  to="https://mulatero.it"
                  target="_blank"
                  className="flex items-center font-sans body-m"
                >
                  <Newspaper className="mr-2 text-white/60" />
                  mulatero.it
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="lg:mt-10 text-center text-white/50 font-sans body-l">
        {payOffSecondary}
      </div>
    </div>
  )
}
export default SiteFooter

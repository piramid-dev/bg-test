import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from '@remix-run/react'
import { useState } from 'react'
import {
  CaretRight,
  CaretLeft,
  MagnifyingGlass,
  UserCircle,
  ArrowRight,
} from 'phosphor-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { AnimatePresence, motion } from 'framer-motion'

import 'swiper/swiper-bundle.min.css'
import useScrollBlock from '../../../hooks/useScrollBlock'
import type { SubMenuPanelProps } from '../../Molecules/SubMenuPanel/SubMenuPanel'
import { useLocalizeLink } from '../../../hooks/useLocalizeLink'
import BuyBanner from '../../Organisms/BuyBanner/BuyBanner'
import CardMenu from '../CardMenu/CardMenu'

interface SiteNavMobileProps {
  isOpen: boolean
  onClick: React.MouseEventHandler<HTMLAnchorElement>
  products: SubMenuPanelProps
  brands: SubMenuPanelProps
  user: Object
  locale: string
  page_url_it?: string
  page_url_en?: string
}

const SiteNavMobile: FC<SiteNavMobileProps> = ({
  isOpen,
  onClick,
  products,
  brands,
  user,
  locale,
  page_url_it = '/it/',
  page_url_en = '/',
}) => {
  const { t } = useTranslation()
  const { l } = useLocalizeLink()

  const [blockScroll, allowScroll] = useScrollBlock()

  isOpen ? blockScroll() : allowScroll()

  const [showProducts, setShowProducts] = useState(false)
  const [showBrands, setShowBrands] = useState(false)
  const [showLanguages, setShowLanguages] = useState(false)

  const categories: Array<any> = []
  products?.categoryCards?.map((category) => {
    return categories.push(...category.cards)
  })

  const brandCards: Array<any> = []
  brands?.categoryCards?.map((category) => {
    return brandCards.push(...category.cards)
  })

  return (
    <>
      <AnimatePresence>
        {isOpen ? (
          <>
            <motion.aside
              initial={{ opacity: 0, transform: 'translateX(-100%)' }}
              animate={{ opacity: 1, transform: 'translateX(0)' }}
              exit={{
                opacity: 0,
                transform: 'translateX(-100%)',
                transition: { delay: 0, duration: 0.6 },
              }}
              onAnimationComplete={(definition) => {
                //console.log('Completed animating', definition)
                setShowLanguages(false)
                setShowBrands(false)
                setShowProducts(false)
              }}
              className="fixed z-100 left-0 top-0 h-full w-full bg-white lg:hidden"
            >
              {/* header */}
              <div className="border-b border-black">
                <div className="container py-4 flex items-center h-[60px]">
                  <svg
                    onClick={onClick}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.5269 18.4698C19.6006 18.5385 19.6597 18.6213 19.7007 18.7133C19.7417 18.8053 19.7637 18.9046 19.7655 19.0053C19.7673 19.106 19.7488 19.2061 19.711 19.2994C19.6733 19.3928 19.6172 19.4777 19.546 19.5489C19.4747 19.6201 19.3899 19.6762 19.2965 19.714C19.2031 19.7517 19.1031 19.7702 19.0024 19.7684C18.9017 19.7667 18.8024 19.7446 18.7104 19.7036C18.6184 19.6626 18.5356 19.6035 18.4669 19.5298L9.99692 11.0611L1.52692 19.5298C1.38474 19.6623 1.1967 19.7344 1.00239 19.731C0.808093 19.7276 0.622708 19.6489 0.485295 19.5115C0.347882 19.3741 0.26917 19.1887 0.265742 18.9944C0.262314 18.8001 0.334437 18.612 0.466917 18.4698L8.93567 9.99985L0.466917 1.52985C0.334437 1.38767 0.262314 1.19963 0.265742 1.00532C0.26917 0.811023 0.347882 0.625638 0.485295 0.488225C0.622708 0.350812 0.808093 0.2721 1.00239 0.268672C1.1967 0.265243 1.38474 0.337366 1.52692 0.469846L9.99692 8.9386L18.4669 0.469846C18.6091 0.337366 18.7971 0.265243 18.9914 0.268672C19.1857 0.2721 19.3711 0.350812 19.5085 0.488225C19.646 0.625638 19.7247 0.811023 19.7281 1.00532C19.7315 1.19963 19.6594 1.38767 19.5269 1.52985L11.0582 9.99985L19.5269 18.4698Z"
                      fill="black"
                    />
                  </svg>
                  <img
                    src="/assets/logo-buyers-cond.svg"
                    alt="logo"
                    width="125px"
                    className="ml-5"
                  />
                </div>
              </div>

              {/* scrollable content */}
              <div className="h-[calc(100vh-60px)] overflow-auto">
                {/* login / register */}
                <div className="container">
                  {user ? (
                    <Link
                      to={l('/account')}
                      className="w-full flex items-center py-6 font-sans h5 uppercase !font-normal !leading-none"
                      onClick={onClick}
                    >
                      <UserCircle size={24} className="mr-4" weight="light" />
                      {t('my_account_page')}
                    </Link>
                  ) : (
                    <>
                      <Link
                        to={l('/login')}
                        className="w-full flex items-center py-6 font-sans h5 uppercase !font-normal !leading-none"
                        onClick={onClick}
                      >
                        <UserCircle size={24} className="mr-4" weight="light" />
                        {t('menu_login_register')}
                      </Link>
                    </>
                  )}
                </div>

                {/* products */}
                <div className="bg-dove-500 overflow-hidden">
                  <div className="container pt-2">
                    <h6 className="py-3 font-sans h4">
                      {products?.styleTitle}
                    </h6>
                    <Swiper
                      breakpoints={{
                        0: {
                          slidesPerView: 3.5,
                          spaceBetween: 8,
                        },
                        580: {
                          slidesPerView: 5.1,
                          spaceBetween: 8,
                        },
                      }}
                      className="relative mb-6 !overflow-visible"
                    >
                      {categories.map((style) => (
                        <SwiperSlide key={style.title}>
                          <CardMenu {...style} callback={onClick} />
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    <span
                      className="w-full flex items-center py-3 font-sans h4"
                      onClick={() => setShowProducts(true)}
                    >
                      {t('menu_all_products')}
                      <CaretRight size={24} className="ml-auto" />
                    </span>
                  </div>
                </div>

                {/* links container */}
                <div className="container pb-4 pt-1">
                  {/* about */}
                  <Link
                    onClick={onClick}
                    to={l('/articles')}
                    className="w-full flex items-center border-b border-black py-3 font-sans h4"
                  >
                    {t('menu_about')}
                  </Link>
                  {/* brands */}
                  <span
                    className="w-full flex items-center border-b border-black py-3 font-sans h4"
                    onClick={() => setShowBrands(true)}
                  >
                    {t('menu_brands')}
                    <CaretRight size={24} className="ml-auto" />
                  </span>
                  {/* articles */}
                  <Link
                    onClick={onClick}
                    to={l('/articles')}
                    className="w-full flex items-center border-b border-black py-3 font-sans h4"
                  >
                    {t('menu_articles')}
                  </Link>
                  {/* search */}
                  <span className="w-full flex items-center border-b border-black py-3 font-sans h4 mb-4">
                    {t('menu_search')}
                    <MagnifyingGlass size={24} className="ml-auto" />
                  </span>
                  {/* buy banner */}
                  <BuyBanner menuVersion={true} navUser={user} />
                  {/* language */}
                  <span
                    className="w-full flex items-center py-3 font-sans h4 !font-normal mt-4"
                    onClick={() => setShowLanguages(true)}
                  >
                    {locale === 'it' ? 'Italiano' : 'English'}
                    <CaretRight size={24} className="ml-auto" />
                  </span>
                </div>
              </div>
            </motion.aside>

            {/* all products panel */}
            <AnimatePresence>
              {showProducts ? (
                <motion.aside
                  initial={{ opacity: 0, transform: 'translateX(100%)' }}
                  animate={{ opacity: 1, transform: 'translateX(0)' }}
                  exit={{
                    opacity: 0,
                    transform: 'translateX(100%)',
                    transition: { delay: 0, duration: 0.6 },
                  }}
                  className="fixed z-100 left-0 top-0 h-full w-full bg-white lg:hidden"
                >
                  <div className="container py-4 flex items-center h-[60px]">
                    <span
                      className="font-sans h5 uppercase !font-normal flex items-center !leading-none"
                      onClick={() => setShowProducts(false)}
                    >
                      <CaretLeft size={24} className="mr-2" />
                      {t('back')}
                    </span>
                  </div>

                  <div className="h-[calc(100vh-60px)] overflow-auto">
                    <div className="container py-4">
                      {products?.columnOne?.map((column, i) => (
                        <div key={i} className="mb-8">
                          <Link
                            to={column.main.to || '/'}
                            className="uppercase font-sans h5 !font-normal border-b pb-2 mb-2 flex justify-between items-center"
                            onClick={onClick}
                          >
                            {column.main.label}
                            <ArrowRight className="ml-2 inline-block" />
                          </Link>
                          {column.subLinks.map((subLink, i) => (
                            <Link
                              to={subLink.to || '/'}
                              className="block"
                              key={i}
                              onClick={onClick}
                            >
                              {subLink.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                      {products?.columnTwo?.map((column, i) => (
                        <div key={i} className="mb-8">
                          <Link
                            to={column.main.to || '/'}
                            className="uppercase font-sans h5 !font-normal border-b pb-2 mb-2 flex justify-between items-center"
                            onClick={onClick}
                          >
                            {column.main.label}
                            <ArrowRight className="ml-2 inline-block" />
                          </Link>
                          {column.subLinks.map((subLink, i) => (
                            <Link
                              to={subLink.to || '/'}
                              className="block"
                              key={i}
                              onClick={onClick}
                            >
                              {subLink.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.aside>
              ) : null}
            </AnimatePresence>

            {/* all Brands panel */}
            <AnimatePresence>
              {showBrands ? (
                <motion.aside
                  initial={{ opacity: 0, transform: 'translateX(100%)' }}
                  animate={{ opacity: 1, transform: 'translateX(0)' }}
                  exit={{
                    opacity: 0,
                    transform: 'translateX(100%)',
                    transition: { delay: 0, duration: 0.6 },
                  }}
                  className="fixed z-100 left-0 top-0 h-full w-full bg-white lg:hidden"
                >
                  <div className="container py-4 flex items-center h-[60px]">
                    <span
                      className="font-sans h5 uppercase !font-normal flex items-center !leading-none"
                      onClick={() => setShowBrands(false)}
                    >
                      <CaretLeft size={24} className="mr-2" />
                      {t('back')}
                    </span>
                  </div>

                  <div className="h-[calc(100vh-60px)] overflow-auto">
                    {brandCards.length ? (
                      <div className="container grid grid-cols-3 gap-4 mb-4">
                        {brandCards.map((brand) => (
                          <CardMenu
                            {...brand}
                            callback={onClick}
                            key={brand.title}
                          />
                        ))}
                      </div>
                    ) : null}
                    <div className="container py-4">
                      {brands?.columnOne?.map((column, i) => (
                        <div key={i} className="mb-8">
                          <Link
                            to={column.main.to || '/'}
                            className="uppercase font-sans h5 !font-normal border-b pb-2 mb-2 flex justify-between items-center"
                          >
                            {column.main.label}
                          </Link>
                          {column.subLinks.map((subLink, i) => (
                            <Link
                              to={subLink.to || '/'}
                              className="block"
                              key={i}
                              onClick={onClick}
                            >
                              {subLink.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.aside>
              ) : null}
            </AnimatePresence>

            {/* Languages panel */}
            <AnimatePresence>
              {showLanguages ? (
                <motion.aside
                  initial={{ opacity: 0, transform: 'translateX(100%)' }}
                  animate={{ opacity: 1, transform: 'translateX(0)' }}
                  exit={{
                    opacity: 0,
                    transform: 'translateX(100%)',
                    transition: { delay: 0, duration: 0.6 },
                  }}
                  className="fixed z-100 left-0 top-0 h-full w-full bg-white lg:hidden"
                >
                  <div className="border-b border-black">
                    <div className="container py-4 flex items-center h-[60px]">
                      <span
                        className="font-sans h5 uppercase !font-normal flex items-center !leading-none"
                        onClick={() => setShowLanguages(false)}
                      >
                        <CaretLeft size={24} className="mr-2" />
                        {t('back')}
                      </span>
                    </div>
                  </div>

                  <div className="container py-4">
                    <h6 className="font-sans h4 mb-3">
                      {t('menu_select_language')}
                    </h6>

                    <a
                      href={page_url_en}
                      className="font-sans body-l py-2 block "
                    >
                      English
                    </a>
                    <a
                      href={page_url_it}
                      className="font-sans body-l py-2 block "
                    >
                      Italiano
                    </a>
                  </div>
                </motion.aside>
              ) : null}
            </AnimatePresence>
          </>
        ) : null}
      </AnimatePresence>
    </>
  )
}

export default SiteNavMobile

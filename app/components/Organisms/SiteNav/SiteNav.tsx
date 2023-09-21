import type { FC } from 'react'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import { Link } from '@remix-run/react'
import { useState } from 'react'

import type { SubMenuPanelProps } from '../../Molecules/SubMenuPanel/SubMenuPanel'
import { useLocalizeLink } from '../../../hooks/useLocalizeLink'
import Button from '../../Atoms/Button/Button'
import LinkMenu from '../../Atoms/LinkMenu/LinkMenu'
import LinkBasic from '../../Atoms/LinkBasic/LinkBasic'
import Dropdown from '../../Atoms/Dropdown/Dropdown'
import SubMenuPanel from '../../Molecules/SubMenuPanel/SubMenuPanel'
import SiteNavMobile from '../SiteNavMobile/SiteNavMobile'

interface SiteNavProps {
  navIsOpen: boolean
  navIsVisible: boolean
  subMenuProps: SubMenuPanelProps
  subMenuProps2: SubMenuPanelProps
  user: Object
  locale: string
  page_url_it?: string
  page_url_en?: string
}

const SiteNav: FC<SiteNavProps> = ({
  navIsOpen,
  navIsVisible,
  subMenuProps,
  subMenuProps2,
  user,
  locale,
  page_url_it = '/it/skialper/',
  page_url_en = '/skialper/',
}) => {
  const { t } = useTranslation()
  const { l } = useLocalizeLink()
  locale = locale?.toUpperCase()

  const [isLangDropdownClosed, setIsLangDropdownClosed] = useState(false)
  const [dropdownLabel, setDropdownLabel] = useState(locale)
  const [menuMobileVisibility, setMenuMobileVisibility] = useState(false)

  function handleOnToggleMobileMenu() {
    setMenuMobileVisibility((menuMobileVisibility) => !menuMobileVisibility)
  }

  const handleSelectedOptions = (option: string) => {
    setIsLangDropdownClosed(true)
    setDropdownLabel(option)
    setTimeout(() => setIsLangDropdownClosed(false))
  }

  return (
    <>
      <nav className="bg-white w-full relative h-[100px] z-60">
        <div className="container relative h-full">
          <div className="relative h-full flex justify-center items-center">
            <div className="lg:hidden mr-4" onClick={handleOnToggleMobileMenu}>
              <svg
                width="24"
                height="18"
                viewBox="0 0 24 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.75 9C23.75 9.19891 23.671 9.38968 23.5303 9.53033C23.3897 9.67098 23.1989 9.75 23 9.75H1C0.801088 9.75 0.610322 9.67098 0.46967 9.53033C0.329018 9.38968 0.25 9.19891 0.25 9C0.25 8.80109 0.329018 8.61032 0.46967 8.46967C0.610322 8.32902 0.801088 8.25 1 8.25H23C23.1989 8.25 23.3897 8.32902 23.5303 8.46967C23.671 8.61032 23.75 8.80109 23.75 9ZM1 1.75H23C23.1989 1.75 23.3897 1.67098 23.5303 1.53033C23.671 1.38968 23.75 1.19891 23.75 1C23.75 0.801088 23.671 0.610322 23.5303 0.46967C23.3897 0.329018 23.1989 0.25 23 0.25H1C0.801088 0.25 0.610322 0.329018 0.46967 0.46967C0.329018 0.610322 0.25 0.801088 0.25 1C0.25 1.19891 0.329018 1.38968 0.46967 1.53033C0.610322 1.67098 0.801088 1.75 1 1.75ZM23 16.25H1C0.801088 16.25 0.610322 16.329 0.46967 16.4697C0.329018 16.6103 0.25 16.8011 0.25 17C0.25 17.1989 0.329018 17.3897 0.46967 17.5303C0.610322 17.671 0.801088 17.75 1 17.75H23C23.1989 17.75 23.3897 17.671 23.5303 17.5303C23.671 17.3897 23.75 17.1989 23.75 17C23.75 16.8011 23.671 16.6103 23.5303 16.4697C23.3897 16.329 23.1989 16.25 23 16.25Z"
                  fill="black"
                />
              </svg>
            </div>

            <div className="lg:absolute lg:w-3/12 left-0 mr-auto">
              <Link to={l('/')}>
                <img
                  src="/assets/logo-buyers.svg"
                  alt="logo"
                  width="113px"
                  className="lg:absolute top-1/2 left-0 lg:-translate-y-1/2 opacity-100"
                />
              </Link>
            </div>

            <div className="hidden lg:flex text-center flex-grow-0 mt-4">
              <Dropdown
                label={t('menu_explore')}
                hasSubMenuPanel={true}
                additionalClasses="mb-4 hover:mb-0 hover:pb-4 mx-2"
              >
                <SubMenuPanel {...subMenuProps} />
              </Dropdown>
              <LinkBasic
                to={l('/about')}
                label={t('menu_about')}
                extraClasses={'mb-auto mx-2'}
              />
              <Dropdown
                label={t('menu_brands')}
                hasSubMenuPanel={true}
                additionalClasses="mb-4 hover:mb-0 hover:pb-4 mx-2"
                smallSubMenuPanel={subMenuProps2?.oneColLayout ? true : false}
              >
                <SubMenuPanel {...subMenuProps2} />
              </Dropdown>
              <LinkBasic
                to={l('/articles')}
                label={t('menu_articles')}
                extraClasses={'mb-auto mx-2'}
              />
              {/* {isAtTop ? (
                <span className="">Esplora About Articoli Brand</span>
              ) : (
                <span>condensed</span>
              )} */}
            </div>

            <div className="flex absolute right-0 items-center">
              {user ? (
                <Button
                  type="submit"
                  variant="outline"
                  to={l('/account')}
                  icon="UserCircle"
                  onlyIcon={true}
                />
              ) : (
                <>
                  <span className="hidden lg:flex mr-4">
                    <LinkMenu to={l('/login')} label={t('login')} />
                  </span>
                  <Button to={l('/subscription')} isCompressed={false}>
                    {t('subscribe')}
                  </Button>
                </>
              )}

              <Dropdown
                label={dropdownLabel}
                isClosed={isLangDropdownClosed}
                variant="light"
                additionalClasses="hidden lg:block ml-4"
                rightAlign={true}
              >
                <a
                  href={page_url_en}
                  onClick={() => handleSelectedOptions('EN')}
                  className="font-sans body-m bg-dove-300 hover:bg-white py-2 pl-4 pr-12 text-center block border-b border-black"
                >
                  English
                </a>
                <a
                  href={page_url_it}
                  onClick={() => handleSelectedOptions('IT')}
                  className="font-sans body-m bg-dove-300 hover:bg-white py-2 pl-4 pr-12 text-center block "
                >
                  Italiano
                </a>
              </Dropdown>
            </div>
          </div>
        </div>
      </nav>

      <nav
        style={{ height: '60px' }}
        className={classNames(
          'bg-white w-full fixed top-0 z-40 transition-transform duration-200 ease-in-out',
          {
            '-translate-y-full': !navIsOpen,
            'opacity-100': navIsVisible,
            'opacity-0': !navIsVisible,
          },
        )}
      >
        <div className="container h-full">
          <div className="relative h-full flex justify-center items-center">
            <div className="lg:hidden mr-4" onClick={handleOnToggleMobileMenu}>
              <svg
                width="24"
                height="18"
                viewBox="0 0 24 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.75 9C23.75 9.19891 23.671 9.38968 23.5303 9.53033C23.3897 9.67098 23.1989 9.75 23 9.75H1C0.801088 9.75 0.610322 9.67098 0.46967 9.53033C0.329018 9.38968 0.25 9.19891 0.25 9C0.25 8.80109 0.329018 8.61032 0.46967 8.46967C0.610322 8.32902 0.801088 8.25 1 8.25H23C23.1989 8.25 23.3897 8.32902 23.5303 8.46967C23.671 8.61032 23.75 8.80109 23.75 9ZM1 1.75H23C23.1989 1.75 23.3897 1.67098 23.5303 1.53033C23.671 1.38968 23.75 1.19891 23.75 1C23.75 0.801088 23.671 0.610322 23.5303 0.46967C23.3897 0.329018 23.1989 0.25 23 0.25H1C0.801088 0.25 0.610322 0.329018 0.46967 0.46967C0.329018 0.610322 0.25 0.801088 0.25 1C0.25 1.19891 0.329018 1.38968 0.46967 1.53033C0.610322 1.67098 0.801088 1.75 1 1.75ZM23 16.25H1C0.801088 16.25 0.610322 16.329 0.46967 16.4697C0.329018 16.6103 0.25 16.8011 0.25 17C0.25 17.1989 0.329018 17.3897 0.46967 17.5303C0.610322 17.671 0.801088 17.75 1 17.75H23C23.1989 17.75 23.3897 17.671 23.5303 17.5303C23.671 17.3897 23.75 17.1989 23.75 17C23.75 16.8011 23.671 16.6103 23.5303 16.4697C23.3897 16.329 23.1989 16.25 23 16.25Z"
                  fill="black"
                />
              </svg>
            </div>

            <div className="lg:absolute lg:w-3/12 left-0 mr-auto">
              <Link to={l('/')}>
                <img
                  src="/assets/logo-buyers-cond.svg"
                  alt="logo"
                  width="125px"
                  className="lg:absolute top-1/2 left-0 lg:-translate-y-1/2"
                />
              </Link>
            </div>

            <div className="hidden lg:flex text-center flex-grow-0 mt-4">
              <Dropdown
                label={t('menu_explore')}
                hasSubMenuPanel={true}
                additionalClasses="mb-4 hover:mb-0 hover:pb-4 mx-2"
              >
                <SubMenuPanel {...subMenuProps} />
              </Dropdown>
              <LinkBasic
                to={l('/about')}
                label={t('menu_about')}
                extraClasses={'mb-auto mx-2'}
              />
              <Dropdown
                label={t('menu_brands')}
                hasSubMenuPanel={true}
                additionalClasses="mb-4 hover:mb-0 hover:pb-4 mx-2"
                smallSubMenuPanel={subMenuProps2?.oneColLayout ? true : false}
              >
                <SubMenuPanel {...subMenuProps2} />
              </Dropdown>
              <LinkBasic
                to={l('/articles')}
                label={t('menu_articles')}
                extraClasses={'mb-auto mx-2'}
              />
            </div>

            <div className="flex absolute right-0">
              {user ? (
                <Button
                  type="submit"
                  variant="outline"
                  to={l('/account')}
                  icon="UserCircle"
                  onlyIcon={true}
                />
              ) : (
                <>
                  <span className="hidden lg:flex mr-4">
                    <LinkMenu to={l('/login')} label={t('login')} />
                  </span>
                  <Button to={l('/subscription')} isCompressed={true}>
                    {t('subscribe')}
                  </Button>
                </>
              )}

              <Dropdown
                label={dropdownLabel}
                isClosed={isLangDropdownClosed}
                variant="light"
                additionalClasses="hidden lg:block ml-4 my-auto"
                rightAlign={true}
              >
                <a
                  href={page_url_en}
                  onClick={() => handleSelectedOptions('EN')}
                  className="font-sans body-m bg-dove-300 hover:bg-white py-2 pl-4 pr-12 text-center block border-b border-black"
                >
                  English
                </a>
                <a
                  href={page_url_it}
                  onClick={() => handleSelectedOptions('IT')}
                  className="font-sans body-m bg-dove-300 hover:bg-white py-2 pl-4 pr-12 text-center block "
                >
                  Italiano
                </a>
              </Dropdown>
            </div>
          </div>
        </div>
      </nav>

      <SiteNavMobile
        isOpen={menuMobileVisibility}
        onClick={handleOnToggleMobileMenu}
        locale={locale}
        products={subMenuProps}
        brands={subMenuProps2}
        page_url_en={page_url_en}
        page_url_it={page_url_it}
        user={user}
      />
    </>
  )
}

export default SiteNav

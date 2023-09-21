import type { LinksFunction, LoaderArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { cssBundleHref } from '@remix-run/css-bundle'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import { json } from '@remix-run/node'
import { useChangeLanguage } from 'remix-i18next'
import { useTranslation } from 'react-i18next'
import { useScroll, useVelocity } from 'framer-motion'
import { useEffect, useState } from 'react'

import type {
  Column,
  SubMenuPanelProps,
} from '~/components/Molecules/SubMenuPanel/SubMenuPanel'
import { logout } from '~/session.server'
import type { ContextType } from '~/types/globalTypes'
import stylesheet from '~/tailwind.css'
import SiteNav from '~/components/Organisms/SiteNav/SiteNav'
import { getLocale } from '~/utils'
import { getUserId, getUserEmail, getUserAccessToken } from '~/session.server'
import { datoQuerySubscription, loadFragments } from '~/lib/datocms'
import { ResponsiveImageFragmentQuery } from '~/lib/generated'
import type { BrandRecord, CategoryRecord, ScopeRecord } from '~/lib/generated'
import { useLocalizeLink } from '~/hooks/useLocalizeLink'
import { FavoritesFragmentQuery } from '~/lib/generated'
import { getUserCL, hasUserValidPassCL } from '~/utils/commerceLayer'

import SiteFooter from './components/Organisms/SiteFooter/SiteFooter'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
]

export const loader = async ({ request }: LoaderArgs) => {
  const skuCode = 'buyer-sub-2023' // TODO: make this dynamic
  const locale = getLocale(request)
  const url = new URL(request.url)
  const search = new URLSearchParams(url.search)
  const userId = (await getUserId(request)) || search.get('userId')
  const userEmail = (await getUserEmail(request)) || search.get('userEmail')
  const userAccessToken =
    (await getUserAccessToken(request)) || search.get('accessToken')
  const fragments = loadFragments([
    ResponsiveImageFragmentQuery,
    FavoritesFragmentQuery,
  ])

  // If userid or accessToken are not present, redirect to the home page
  let user = null
  let validPass = false

  if (userId && userAccessToken) {
    try {
      user = await getUserCL(userAccessToken, userId)
      validPass = await hasUserValidPassCL(userAccessToken, userId, skuCode)
    } catch (error) {
      console.log('Error: ', error)
      // If the user is not found the token is not valid, clean the session
      return logout(request)
    }
  }

  //get scopes
  const scopesQuery = `#graphql
    query($locale: SiteLocale, $email: String) {
      allBrands: allBrands(first: 100, orderBy: name_ASC, filter: {isFeatured: {eq: false}}){
        id
        slug
        name
      }
      brands: allBrands( filter: {isFeatured: {eq: true}}){
        id
        slug
        name
        image{
          responsiveImage(
            imgixParams: { fm: jpg }
          ) {
            ...responsiveImage
          }
        }
      }
      categories: allCategories(locale: $locale){
        id
        name
        slug
        scope{
          id
          name
          slug
        }
        image{
          responsiveImage(
            imgixParams: { fm: jpg, fit: crop, w: 1000, h: 1000, fpX:1}
          ) {
            ...responsiveImage
          }
        }
      }
      scopes: allScopes(locale: $locale, orderBy: order_ASC) {
        id
        name
        slug
        relatedFamilies{
          id
          name
          slug
        }
      }
      skiers: allSkiers(locale: $locale, filter: {slug: {eq: "lady" }}) {
        id
        name
        slug
        relatedFamilies{
          id
          name
          slug
        }
        scope{
          id
          name
          slug
        }
        image{
          responsiveImage(
            imgixParams: { fm: jpg, fit: crop, w: 1000, h: 1000, fpX:1}
          ) {
            ...responsiveImage
          }
        }
      }
      user: user(filter: { email: { eq: $email } }) {
        name
        surname
        id
        idCommercelayer
        email
        favoriteProducts {
          ...favorites
        }
      }
      common: common(locale: $locale){
        launchText
        scopesHeading
        servicesHeading
        servicesUrls{
          label
          url
        }
      }
    }
    ${fragments}
  `

  const datoQuerySub = await datoQuerySubscription({
    request,
    query: scopesQuery,
    variables: { locale, email: userEmail },
  })

  const scopes = datoQuerySub.datoQuerySubscription.initialData.scopes
  const skiers = datoQuerySub.datoQuerySubscription.initialData.skiers
  const categories = datoQuerySub.datoQuerySubscription.initialData.categories
  const brands = datoQuerySub.datoQuerySubscription.initialData.brands
  const allBrands = datoQuerySub.datoQuerySubscription.initialData.allBrands
  const userDato = datoQuerySub.datoQuerySubscription.initialData.user
  const common = datoQuerySub.datoQuerySubscription.initialData.common

  return json({
    locale,
    user: user || userDato ? { ...user, ...userDato } : null,
    validPass,
    scopes,
    skiers,
    categories,
    brands,
    allBrands,
    common,
  })
}

export default function App() {
  // Get the locale from the loader
  const {
    locale,
    user,
    validPass,
    scopes,
    skiers,
    categories,
    brands,
    allBrands,
    common,
  } = useLoaderData<typeof loader>()
  const { i18n } = useTranslation()
  const { l } = useLocalizeLink()
  const { t } = useTranslation()

  // This hook will change the i18n instance language to the current locale
  // detected by the loader, this way, when we do something to change the
  // language, this locale will change and i18next will load the correct
  // translation files
  useChangeLanguage(locale)

  //group categories by category.scope and keep scope name and slug
  const categoriesByScope = categories.reduce((acc, category) => {
    const scope = category.scope
    if (!acc[scope.slug]) {
      acc[scope.slug] = {
        name: scope.name,
        slug: scope.slug,
        id: scope.id,
        categories: [],
      }
    }
    acc[scope.slug].categories.push(category)
    return acc
  }, {})

  //remove key from categoriesByScope and keep only the values with and array of categories
  const scopesWithCategories = Object.values(categoriesByScope)

  const data = useLoaderData<typeof loader>()

  const threshold = 20 // only slide it back when scrolling back at velocity above this positive (or zero) value
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const [isScrollingBack, setIsScrollingBack] = useState(false)
  const [isAtTop, setIsAtTop] = useState(true) // true if the page is not scrolled or fully scrolled back
  const [isInView, setIsInView] = useState(true)
  const subMenuProps: SubMenuPanelProps = {
    styleTitle: t('styleExpore'),
    allProductsLinkLabel: t('menu_all_products'),
    allProductsLinkTo: l('/products'),
    categoryCards: [
      ...scopesWithCategories.map((scope: any) => ({
        title: scope.name as String,
        cards: [
          ...scope.categories.map((category: CategoryRecord) => ({
            title: category.name as String,
            to: l(`/categories/${category.slug}`) as String,
            imageUrl: category.image?.responsiveImage?.src as String,
          })),
          ...skiers
            .filter((skier) => {
              return skier.scope.id === scope.id
            })
            .map((skier) => ({
              title: skier.name as String,
              to: l(`/skiers/${skier.slug}`) as String,
              imageUrl: skier.image?.responsiveImage?.src as String,
            })),
        ],
      })),
    ] as SubMenuPanelProps['categoryCards'],
    columnOne: scopes.slice(0, 2).map((scope: ScopeRecord) => ({
      main: {
        label: scope.name,
        to: l(`/scopes/${scope.slug}`),
      },
      subLinks: scope.relatedFamilies.map((family) => ({
        label: family.name,
        to: l(`/products/${family.slug}`),
      })),
    })) as Column,
    columnTwo: scopes.slice(2, 5).map((scope: ScopeRecord) => ({
      main: {
        label: scope.name,
        to: l(`/scopes/${scope.slug}`),
      },
      subLinks: scope.relatedFamilies.map((family) => ({
        label: family.name,
        to: l(`/products/${family.slug}`),
      })),
    })) as Column,
  }

  //group allBrands by first letter of brand.name
  const brandsByLetter = allBrands.reduce((acc, brand) => {
    const firstLetter = brand.name.charAt(0)
    if (!acc[firstLetter]) {
      acc[firstLetter] = []
    }
    acc[firstLetter].push(brand)
    return acc
  }, {})

  const subMenuProps2: SubMenuPanelProps = {
    styleTitle: t('insideBrands'),
    allProductsLinkLabel: '',
    allProductsLinkTo: '',
    categoryCards: [
      {
        cards: [
          ...brands.map((brand: BrandRecord) => ({
            title: brand.name,
            to: l(`/brands/${brand.slug}`),
            imageUrl: brand.image?.responsiveImage?.src,
          })),
        ],
      },
    ] as SubMenuPanelProps['categoryCards'],
    columnOne: [
      ...Object.keys(brandsByLetter).map((letter) => ({
        main: {
          label: letter,
        },
        subLinks: brandsByLetter[letter].map((brand: BrandRecord) => ({
          label: brand.name,
          to: l(`/products?brand=${brand.name}`),
        })),
      })),
    ] as Column,
    oneColLayout: brands.length <= 3,
  }
  const siteFooterProps = {
    payOff: common.launchText,
    payOffSecondary: common.launchTextSecondary,
    firstCol: {
      title: common.scopesHeading,
      menuNav: [
        ...scopes.map((scope: ScopeRecord) => ({
          to: l(`/scopes/${scope.slug}`),
          label: scope.name,
        })),
      ],
    },
    secondCol: {
      title: common.servicesHeading,
      menuNav: [
        ...common.servicesUrls.map(
          (service: { url: string; label: string }) => ({
            to: service.url,
            label: service.label,
          }),
        ),
      ],
    },
  }

  useEffect(
    () =>
      scrollVelocity.on('change', (latest) => {
        if (latest > 0) {
          setIsScrollingBack(false)
          return
        }
        if (latest < -threshold) {
          setIsScrollingBack(true)
          return
        }
      }),
    [scrollVelocity],
  )

  useEffect(
    () => scrollY.on('change', (latest) => setIsAtTop(latest <= 100)),
    [scrollY],
  )

  useEffect(
    () => setIsInView(isScrollingBack || isAtTop),
    [isScrollingBack, isAtTop],
  )

  return (
    <html lang={locale} dir={i18n.dir()} className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.env = ${JSON.stringify(data)}`,
          }}
        />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <SiteNav
          navIsOpen={isInView ? !isAtTop : false}
          navIsVisible={!isAtTop}
          subMenuProps={subMenuProps}
          subMenuProps2={subMenuProps2}
          user={user}
          locale={locale}
        />
        <Outlet
          context={
            {
              navIsOpen: isInView && !isAtTop,
              locale,
              user,
              isUser: !!user,
              validPass,
            } satisfies ContextType
          }
        />
        <SiteFooter {...siteFooterProps} />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

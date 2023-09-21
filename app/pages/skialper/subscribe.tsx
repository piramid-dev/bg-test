import type { LoaderArgs } from '@remix-run/node'
import { redirect } from '@remix-run/node'

import { getUserAccessToken, getSalesChannelToken } from '~/session.server'
import { createOrderCL, addSkuToOrderCL } from '~/utils/commerceLayer'
import { getLocale } from '~/utils'
import routes from '~/pages/_routes.js'

export async function loader({ request }: LoaderArgs) {
  const userAccessToken = await getUserAccessToken(request)
  const accessToken = await getSalesChannelToken(request)
  const token = userAccessToken ? userAccessToken : accessToken || ''
  const checkoutUrl = process.env.CHECKOUT_URL || ''

  const locale = getLocale(request)

  // If the user is logged in, create the order with the user access token
  if (userAccessToken) {
    const orderLanguage = locale
    const skuCode = 'buyer-sub-2023' // TODO: make this dynamic
    const return_url = process.env.APP_URL + '/thank-you'

    // Create the order
    const order = await createOrderCL(token, orderLanguage)
    // The order id is needed to add the sku to the order
    const orderId = order.data.id
    // Add sku to order
    await addSkuToOrderCL(token, orderId, skuCode)

    // Redirect user to checkout page
    return redirect(
      `${checkoutUrl}/${orderId}?accessToken=${token}&returnUrl=${return_url}`,
    )
  } else {
    // Redirect user to join page
    const joinPage = locale === 'en' ? '/skialper/join/' : findRoutes('/join')
    const returnUrl =
      locale === 'en' ? '/skialper/subscribe' : findRoutes('/subscribe')
    const redirectUrl = `${joinPage}?returnUrl=${returnUrl}`
    return redirect(redirectUrl)
  }
}

const findRoutes = (path: string) => {
  const route = routes.find(
    (route) =>
      route.originalPath === path ||
      route.originalPath.includes(path) ||
      route.originalPath.replace(':slug', '') === path,
  )
  return route ? route.path : null
}

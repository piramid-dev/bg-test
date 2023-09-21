import type { MetaFunction, LoaderArgs } from '@remix-run/node'
import { redirect } from '@remix-run/node'

import Button from '~/components/Atoms/Button'
import { getUserAccessToken, getSalesChannelToken } from '~/session.server'
import {
  createSubscriptionCL,
  updateSubscriptionCL,
} from '~/utils/commerceLayer'

export const meta: MetaFunction = () => [{ title: 'Thank you' }]

export async function loader({ request }: LoaderArgs) {
  const userAccessToken = await getUserAccessToken(request)
  const accessToken = await getSalesChannelToken(request)
  const token = userAccessToken ? userAccessToken : accessToken || ''
  // Get order id from qury string
  const url = new URL(request.url)
  const orderId =
    url.searchParams.get('orderId') || url.searchParams.get('orderid')
  // Return to home if no order id is present
  if (!orderId || !token) return redirect('/')

  // Create subscription
  const subscrition = await createSubscriptionCL(token, orderId)
  //Setup next payment date
  await updateSubscriptionCL(token, subscrition.id)

  return null
}

export default function LoginPage(): JSX.Element {
  return (
    <div className="flex min-h-full flex-col justify-center">
      <div className="mx-auto w-full max-w-md px-8 text-center">
        <h1>Thanks for your order!</h1>
        <Button to="/account">Go to your account</Button>
      </div>
    </div>
  )
}

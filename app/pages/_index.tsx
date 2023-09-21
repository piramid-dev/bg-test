import { redirect, type LoaderArgs } from '@remix-run/node'

import { getLocale } from '~/utils'

export const loader = async ({ request }: LoaderArgs) => {
  const locale = getLocale(request)
  return locale === 'it' ? redirect('/it/skialper') : redirect('/skialper')
}

export default function Index() {
  return <div>Hub page</div>
}

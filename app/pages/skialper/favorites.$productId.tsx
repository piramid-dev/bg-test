import type { LoaderArgs } from '@remix-run/node'
import { redirect } from '@remix-run/node'

import datoCmsClient from '~/lib/datocms.server'
import { retrieveUser } from '~/graphql/common-queries.graphql'

export async function loader({ request, params }: LoaderArgs) {
  const { productId } = params
  const client = datoCmsClient()
  const user = await retrieveUser(request)
  const urlRedirect = request.headers.get('Referer') || '/'

  if (!user || !productId) return redirect(urlRedirect)

  const userId = user?.id
  const userFavorites: Array<{ id: string }> = user?.favoriteProducts
  let newFavorites: Array<{ id: string }> = []

  // if user has already liked the product, remove it from the list
  if (userFavorites?.find((fav) => fav?.id === productId)) {
    newFavorites = userFavorites.filter(
      (fav: { id: string }) => fav.id !== productId,
    )
  } else {
    newFavorites = [...userFavorites, { id: productId }]
  }

  // favorite_products accept an array of strings
  const newFavoritesIds = newFavorites.map((fav) => fav.id)

  await client.items.update(userId, {
    favorite_products: newFavoritesIds,
  })

  // redirect to refer page
  return redirect(urlRedirect)
}

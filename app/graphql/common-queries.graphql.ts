import { datoQuerySubscription, loadFragments } from '~/lib/datocms'
import { FavoritesFragmentQuery } from '~/lib/generated'
import { getUserId } from '~/session.server'

export const retrieveProductForm = async (
  request: any,
  userId: number,
  productId: number,
) => {
  const formQuery = `#graphql
    query ($userId: ItemId, $productId: ItemId) {
      form: allForms(filter: {user: { eq: $userId } product: { eq: $productId } formType: {eq: "product"} }) {
        id
      }
    }
  `
  const datoQuerySubForm = await datoQuerySubscription({
    request,
    query: formQuery,
    variables: {
      userId: userId as any,
      productId: productId as any,
    },
  })

  return datoQuerySubForm.datoQuerySubscription
}

export const retrieveUser = async (request: any, userId?: string) => {
  const url = new URL(request.url)
  const search = new URLSearchParams(url.search)

  const _userId = userId || (await getUserId(request)) || search.get('userId')

  const fragments = loadFragments([FavoritesFragmentQuery])

  const userQuery = `#graphql
  query ($idCommercelayer: String) {
    user(filter: {idCommercelayer: {eq: $idCommercelayer}}) {
      name
      surname
      id
      idCommercelayer
      email
      favoriteProducts {
        ...favorites
      }
    }
  }
  ${fragments}
  `

  const datoQuerySub = await datoQuerySubscription({
    request,
    query: userQuery,
    variables: { idCommercelayer: _userId },
  })

  const { user } = datoQuerySub.datoQuerySubscription.initialData

  return user
}

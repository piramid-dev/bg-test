import { useTranslation } from 'react-i18next'

const routes = require('../pages/_routes.js')
// import routes from '~/pages/_routes.js'

export const useLocalizeLink = () => {
  const { i18n } = useTranslation()
  const locale = i18n.language

  const currentSite = 'skialper' // TODO: make skialper dynamic

  const findRoutes = (path: string) => {
    const route = routes.find(
      (route) =>
        route.originalPath === path ||
        route.originalPath.includes(path) ||
        route.originalPath.replace(':slug', '') === path,
    )
    return route ? route.path : null
  }

  const localizeLink = (path: string) => {
    if (locale === 'it') {
      let cleanPath = path

      // If path contains
      if (
        path.includes('/products') ||
        path.includes('/articles') ||
        path.includes('/scopes') ||
        path.includes('/categories') ||
        path.includes('/team') ||
        path.includes('/skiers') ||
        path.includes('/brands')
      ) {
        //check if path contains /products/ or /articles/
        const pathContainsProducts = path.includes('/products')
        const pathContainsArticles = path.includes('/articles')
        const pathContainsScopes = path.includes('/scopes')
        const pathContainsCategories = path.includes('/categories')
        const pathContainsSkiers = path.includes('/skiers')
        const pathContainsTeam = path.includes('/team')
        const pathContainsBrands = path.includes('/brands')

        // Get the last part of the path after the last slash
        const lastPart =
          path.split('/').length > 3
            ? path.substring(path.lastIndexOf('/') + 1)
            : ''

        // Remove last part of the path after the last slash
        // cleanPath = lastPart ? path.substring(0, path.lastIndexOf('/')) : path

        //cleanPath = path.replace('/products', '/it/prodotti')
        // console.log(path, cleanPath)

        if (pathContainsProducts) {
          cleanPath = path.replace('/products', '/it/prodotti')
        } else if (pathContainsArticles) {
          cleanPath = path.replace('/articles', '/it/articoli')
        } else if (pathContainsScopes) {
          cleanPath = path.replace('/scopes', '/it/ambiti')
        } else if (pathContainsCategories) {
          cleanPath = path.replace('/categories', '/it/categorie')
        } else if (pathContainsSkiers) {
          cleanPath = path.replace('/skiers', '/it/sciatori')
        } else if (pathContainsTeam) {
          cleanPath = path.replace('/team', '/it/team')
        } else if (pathContainsBrands) {
          cleanPath = path.replace('/brands', '/it/marchi')
        } else {
          cleanPath = path
        }

        cleanPath = cleanPath.replace('/it', `/it/${currentSite}`)

        const findRoute = findRoutes(cleanPath)
        return findRoute ? `${findRoute}/${lastPart}` : cleanPath
      }

      const findRoute = findRoutes(path)
      return findRoute || `/it/${currentSite}${path}`
    }

    // In english return the path
    return `/${currentSite}${path}`
  }

  return { l: localizeLink, locale }
}

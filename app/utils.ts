// import routes from './pages/_routes.js'
const routes = require('~/pages/_routes.js')

export function validateEmail(email: unknown): email is string {
  return typeof email === 'string' && email.length > 3 && email.includes('@')
}

// SEE: https://stackoverflow.com/a/53187393/5292632
export const _get = (object: any, path: any, defaultValue = null) => {
  if (typeof path === 'string') {
    path = path.split('.')
  }

  return path.reduce(
    (xs: any, x: any) => (xs && xs[x] ? xs[x] : defaultValue),
    object,
  )
}

export const _arrayDistinct = (array: Array<any>) => [...new Set(array)]

export const _arrayOfObjectDistinct = (array: Array<any>, key: string) => {
  return array.filter(
    (thing, index, self) =>
      index === self.findIndex((t) => t[key] === thing[key]),
  )
}

// Get the language from the request
export const getLocale = (request: Request) => {
  if (request.url.indexOf('/it/') > 0) {
    return 'it'
  }
  // Check if the latest part of the request.url is '/it'
  const urlParts = request.url.split('/it')
  if (urlParts[1] === '' || urlParts[1] === '/') {
    return 'it'
  }
  // Default to english
  return 'en'
}

// Localize url
export const localizeUrl = (url: string, locale: string) => {
  if (locale === 'it') {
    const findRoute = routes.find((route) => route.originalPath === url)
    return findRoute ? `${findRoute.path}` : url
  }

  return url
}

// Trasfrom product record to product type
export const productRecordToType = (record: string | undefined) => {
  if (!record) return ''

  switch (record) {
    case 'AirbagRecord':
      return 'backpack'
    case 'SplitboardBindingRecord':
      return 'splitboard_binding'
    case 'SplitboardBootRecord':
      return 'splitboard_boot'
    default:
      return record.toLocaleLowerCase().replace('record', '')
  }
}

export const scrollToTop = () => {
  setTimeout(() => {
    window.scrollTo(0, 0)
  }, 1000)
}

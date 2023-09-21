// Pages
const pages = [
  {
    originalPath: '/',
    path: '/',
    component: '_index',
  },
  {
    originalPath: '/account',
    path: '/account',
    component: 'account',
  },
  {
    originalPath: '/login',
    path: '/accedi',
    component: 'login',
  },
  {
    originalPath: '/join',
    path: '/registrati',
    component: 'join',
  },
  {
    originalPath: '/products',
    path: '/prodotti',
    component: 'products/products._index', // Inside products folder
  },
  {
    originalPath: '/articles',
    path: '/articoli',
    component: 'articles._index',
  },
  {
    originalPath: '/subscription',
    path: '/abbonamento',
    component: 'subscription._index',
  },
  {
    originalPath: '/team',
    path: '/team',
    component: 'team._index',
  },
  {
    originalPath: '/about',
    path: '/about',
    component: 'about._index',
  },
  {
    originalPath: '/subscribe',
    path: '/acquista',
    component: 'subscribe',
  },
  {
    originalPath: '/credits',
    path: '/credits',
    component: 'credits._index',
  },
  {
    originalPath: '/cookie-and-privacy',
    path: '/cookie-e-privacy',
    component: 'cookie-and-privacy._index',
  },
]

// Categories
const categories = [
  {
    originalPath: '/brands/:slug',
    path: '/marchi/:slug',
    component: 'brands.$slug',
  },
  {
    originalPath: '/scopes/:slug',
    path: '/ambiti/:slug',
    component: 'scopes.$slug',
  },
  {
    originalPath: '/categories/:slug',
    path: '/categorie/:slug',
    component: 'categories.$slug',
  },
  {
    originalPath: '/skiers/:slug',
    path: '/sciatori/:slug',
    component: 'skiers.$slug',
  },
]

const team = [
  {
    originalPath: '/team/:slug',
    path: '/team/:slug',
    component: 'team.$slug',
  },
]

// Articles
const articles = [
  {
    originalPath: '/articles/:slug',
    path: '/articoli/:slug',
    component: 'articles.$slug',
  },
]

// Products
const products = [
  {
    originalPath: '/artvas',
    path: '/artva',
    component: 'artvas',
  },
  {
    originalPath: '/axes',
    path: '/piccozze',
    component: 'axes',
  },
  {
    originalPath: '/airbags',
    path: '/airbag',
    component: 'airbags',
  },
  {
    originalPath: '/bindings',
    path: '/attacchi-scialpinismo',
    component: 'bindings',
  },
  {
    originalPath: '/boots',
    path: '/scarponi',
    component: 'boots',
  },
  {
    originalPath: '/crampons',
    path: '/ramponi',
    component: 'crampons',
  },
  {
    originalPath: '/harnesses',
    path: '/imbracature',
    component: 'harnesses',
  },
  {
    originalPath: '/helmets',
    path: '/caschi',
    component: 'helmets',
  },
  {
    originalPath: '/poles',
    path: '/bastoni',
    component: 'poles',
  },
  {
    originalPath: '/probes',
    path: '/sonde',
    component: 'probes',
  },
  {
    originalPath: '/shovels',
    path: '/pale',
    component: 'shovels',
  },
  {
    originalPath: '/skis',
    path: '/sci',
    component: 'skis',
  },
  {
    originalPath: '/splitboard-bindings',
    path: '/attacchi-splitboard',
    component: 'splitboard-bindings',
  },
  {
    originalPath: '/splitboard-boots',
    path: '/scarponi-splitboard',
    component: 'splitboard-boots',
  },
  {
    originalPath: '/splitboards',
    path: '/tavole',
    component: 'splitboards',
  },
  {
    originalPath: '/skins',
    path: '/pelli',
    component: 'skins',
  },
]

const _products = products.map((p) => ({
  originalPath: `/products/${p.originalPath}`,
  path: `/prodotti/${p.path}`,
  component: `products/products.${p.component}._index`,
}))

const _productSingle = products.map((p) => ({
  originalPath: `/products/${p.originalPath}/:slug`,
  path: `/prodotti/${p.path}/:slug`,
  component: `products/products.${p.component}.$slug`,
}))

const routes = [
  ...pages,
  ...categories,
  ..._products,
  ..._productSingle,
  ...articles,
  ...team,
]

// The regulare expression is used to remove double slashes
// (?<!:)
// e.g. "//", "///", "////", "/////"
const cleanRoutes = routes.map((r) => ({
  originalPath: `/skialper/${r.originalPath}`.replace(/(?:\/)\/+/gm, '/'),
  path: `/it/skialper/${r.path}`.replace(/(?:\/)\/+/gm, '/'),
  component: `pages/skialper/${r.component}.tsx`,
}))

module.exports = cleanRoutes

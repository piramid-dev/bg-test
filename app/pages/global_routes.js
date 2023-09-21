// Pages
const pages = [
  {
    originalPath: '/',
    path: '/',
    component: '_index',
  },
]

const routes = [...pages]

// The regulare expression is used to remove double slashes
// (?<!:)
// e.g. "//", "///", "////", "/////"
const cleanRoutes = routes.map((r) => ({
  originalPath: `/${r.originalPath}`.replace(/(?:\/)\/+/gm, '/'),
  path: `/it/${r.path}`.replace(/(?:\/)\/+/gm, '/'),
  component: `pages/${r.component}.tsx`,
}))

module.exports = cleanRoutes

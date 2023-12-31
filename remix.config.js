/** @type {import('@remix-run/dev').AppConfig} */
// Import routes.js
const routes = require('./app/pages/_routes.js')
// import routes from './app/pages/skialper_routes.js'
console.log(routes)

module.exports = {
  cacheDirectory: './node_modules/.cache/remix',
  ignoredRouteFiles: ['**/.*'],
  serverModuleFormat: 'cjs',
  tailwind: true,
  serverDependenciesToBundle: [
    '@phosphor-icons/react',
    'datocms-structured-text-generic-html-renderer',
    'datocms-structured-text-utils',
    'dequal',
    'react-datocms',
    'react-intersection-observer',
    'use-deep-compare-effect',
    'react-photoswipe-gallery',
    'photoswipe',
    'photoswipe/dist/photoswipe.css',
    'swiper',
    'swiper/react',
    'swiper/react/swiper-react.js',
    'ssr-window',
    'ssr-window/ssr-window.esm.js',
    'dom7',
  ], // to fix Error [ERR_REQUIRE_ESM]: require() of ES Module

  // Routes
  routes: (defineRoutes) => {
    // If you need to do async work, do it before calling `defineRoutes`, we use
    // the call stack of `route` inside to set nesting.

    // const routes = require('./app/pages/_routes.mjs')

    return defineRoutes((route) => {
      // route('/about', 'pages/skialper/about._index.tsx')
      routes.forEach((r) => {
        route(r.path, r.component, {
          id: `it-${r.path}`,
        })
      })
      routes.forEach((r) => {
        route(r.originalPath, r.component, {
          id: `en-${r.originalPath}`,
        })
      })
    })
  },
}

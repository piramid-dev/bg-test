const global_routes = require('./global_routes.js')
const skialper_routes = require('./skialper_routes.js')

const allRoutes = [...global_routes, ...skialper_routes]

module.exports = allRoutes

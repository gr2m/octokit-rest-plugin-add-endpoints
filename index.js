module.exports = addEndpointsPlugin

const pick = require('lodash/pick')

const method = require('./lib/method')

function addEndpointsPlugin (octokit) {
  octokit.addEndpoints = (routes) => {
    Object.keys(routes).forEach(namespaceName => {
      octokit[namespaceName] = {}

      Object.keys(routes[namespaceName]).forEach(apiName => {
        const apiOptions = routes[namespaceName][apiName]
        const endpointDefaults = pick(apiOptions, ['method', 'url', 'headers', 'request'])

        octokit[namespaceName][apiName] = method.bind(null, octokit, endpointDefaults, apiOptions.params)
      })
    })
  }
}

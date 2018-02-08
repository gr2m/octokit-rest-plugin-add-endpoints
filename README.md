# octokit-rest-plugin-add-endpoints

> @octokit/rest plugin to add endpoint methods based on a routes.json file

## Usage

```js
const octokit = require('@octokit/rest')()
octokit.plugin(require('octokit-rest-plugin-add-endpoints'))

octokit.addEndpoints(require('./my-routes.json'))
octokit.repos.newEndpointGet({
  owner: 'octokit',
  repo: 'welcome',
  foo: 'bar'
})
```

## License

[MIT](LICENSE)

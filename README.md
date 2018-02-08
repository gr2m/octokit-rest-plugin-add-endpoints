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

The `my-routes.json` file has to follow the format of [`@octokit/rest/lib/routes.json`](https://github.com/octokit/rest.js/blob/47204015c20ee88926f8a17276cbbc236af3bc6d/lib/routes.json).

## License

[MIT](LICENSE)

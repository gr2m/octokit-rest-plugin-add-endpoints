const nock = require('nock')
const test = require('tap').test

const Octokit = require('@octokit/rest')
const plugin = require('.')

test('octokit.addEndpoints(routes)', t => {
  nock('https://api.github.com')
    .get('/foo/bar')
    .reply(200, {foo: 'bar'})

  const ROUTES = {
    repos: {
      newEndpointGet: {
        url: '/foo/:foo',
        method: 'GET',
        headers: {
          accept: 'application/vnd.github.black-panther-preview+json'
        },
        params: {
          foo: {
            type: 'string',
            required: true
          }
        }
      }
    }
  }
  const octokit = Octokit()
  octokit.plugin(plugin)

  octokit.addEndpoints(ROUTES)

  octokit.repos.newEndpointGet({
    foo: 'bar'
  })

  .then(result => {
    t.is(result.data.foo, 'bar')
    t.end()
  })

  .catch(t.error)
})

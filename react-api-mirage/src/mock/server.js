import { Server, Model } from 'miragejs'

export function makeServer({ environment = "development" } = {}) {
  let server = new Server({
    environment,
    models: {
      user: Model,
      movie: Model,
    },
    seeds(server) {
      server.create('user', { name: 'Bob' })
      server.create('user', { name: 'Alice' })
      server.create('movie', { title: 'The Intern', year: 20151010, country: 'America' })
      server.create('movie', { title: 'The Devil Wears Prada', year: 20061118, country: 'America' })
      server.create('movie', { title: 'Les Miserables', year: 20151221, country: 'United Kingdom' })
    },
    routes() {
      this.namespace = 'api'

      this.get('/users', schema => {
        return schema.users.all()
      })
      this.get('/movies', schema => {
        return schema.movies.all()
      })
    },
  })
  return makeServer
}
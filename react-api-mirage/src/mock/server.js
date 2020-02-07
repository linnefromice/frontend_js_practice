import { Server, Model, Factory } from 'miragejs'

export function makeServer({ environment = "development" } = {}) {
  let server = new Server({
    environment,
    models: {
      user: Model,
      movie: Model,
    },
    factories: {
      user: Factory.extend({
        name(i) {
          return `sample name ${i}`
        },
        age() {
          const min = 6;
          const max = 30;
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }
      }),
      movie: Factory.extend({
        title(i) {
          return `Movie Title ${i}`
        },
        releaseDate() {
          const min = 19500101;
          const max = 20201231;
          return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        country() {
          const countries = [
            "America",
            "United Kingdom",
            "France",
            "Italy",
            "Japan",
            "Korea",
            "India",
            "Russia"
          ];
          const randomIndex = Math.floor(Math.random() * (countries.length - 1));
          return countries[randomIndex];
        }
      }),
    },
    seeds(server) {
      server.create('user', { name: 'Mike', age: 15 })
      server.create('user', { name: 'Bob' })
      server.create('user', { name: 'Alice' })
      server.create('user')
      server.create('user')
      server.create('movie', { title: 'The Intern', releaseDate: 20151010, country: 'America' })
      server.create('movie', { title: 'The Devil Wears Prada', releaseDate: 20061118, country: 'America' })
      server.create('movie', { title: 'Les Miserables', releaseDate: 20151221, country: 'United Kingdom' })
      server.create('movie', { title: 'Fixed Movie Title 1' })
      server.create('movie', { title: 'Fixed Movie Title 2', releaseDate: 20300101 })
      server.create('movie')
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
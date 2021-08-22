import {Server, Model, Factory} from 'miragejs'
import faker from 'faker'

export function makeServer(environment = 'development') {
  return new Server({
    environment,

    models: {
      campaign: Model
    },

    factories: {
      campaign: Factory.extend({
        name: faker.name.findName(),
        children: [
          {
            id: faker.datatype.uuid(),
            name: faker.name.findName(),
          }
        ],
        category: faker.name.findName()
      })
    },

    seeds(server) {
      server.createList('campaign', 8)
    },

    routes() {
      this.namespace = 'api',

      this.get('campaigns', schema => schema.db.campaigns)
    }
  })
}

if (process.env.NODE_ENV === 'development') {
  makeServer()
}



import {Server, Model, Factory} from 'miragejs'
import faker from 'faker'

export function makeServer(environment = 'development') {
  return new Server({
    environment,

    models: {
      campaign: Model,
      public: Model
    },

    factories: {
      campaign: Factory.extend({
        name: faker.name.findName(),
        children: [
          {
            id: faker.datatype.uuid(),
            name: faker.name.findName(),
          },
          {
            id: faker.datatype.uuid(),
            name: faker.name.findName(),
          }
        ],
        category: faker.name.findName()
      }),

      public: Factory.extend({
        name: faker.name.findName(),
        contactQty: faker.datatype.number(),
        contactMailQty: faker.datatype.number(),
        contactPhoneQty: faker.datatype.number(),
        createdAt: faker.datatype.datetime(),
      })
    },

    seeds(server) {
      server.createList('campaign', 8)
      server.createList('public', 20)
    },

    routes() {
      this.namespace = 'api',

      this.get('campaigns', schema => schema.db.campaigns)
      this.get('publics', schema => schema.db.publics)
    }
  })
}

if (process.env.NODE_ENV === 'development') {
  makeServer()
}



import { Server } from 'miragejs'

export function makeServer(environment = 'development') {
  return new Server({
    environment,

    routes() {
      this.namespace = 'api',
      this.get('/campaigns', () => {
        return {
          id: 1,
          name: '2021 - CLT',
          children: [],
          category: "campanhas"
        }
      })
    }
  })
}

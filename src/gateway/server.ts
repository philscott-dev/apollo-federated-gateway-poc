import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { ApolloGateway } from '@apollo/gateway'
import cors from 'cors';

const app = express()

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'items', url: 'http://localhost:3001/graphql' },
    { name: 'service_one', url: 'http://localhost:3002/graphql' },
    { name: 'service_two', url: 'http://localhost:3003/graphql' }
  ]
});

const server = new ApolloServer({
  gateway,
  subscriptions: false
})
app.use('*', cors())
server.applyMiddleware({ app, path: '/graphql' })
app.listen({ port: 3000 }, () =>
  console.log(`🚀 Gateway ready at http://localhost:3000`)
);

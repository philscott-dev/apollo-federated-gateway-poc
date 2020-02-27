import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { buildFederatedSchema } from '@apollo/federation'
import cors from 'cors'
import typeDefs from './typeDefs'
import resolvers from './resolvers'

const app = express()

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }])
})
app.use('*', cors())
server.applyMiddleware({ app, path: '/graphql' })
app.listen({ port: 3002 }, () =>
  console.log(`🚀 Service One ready at http://localhost:3002`)
);

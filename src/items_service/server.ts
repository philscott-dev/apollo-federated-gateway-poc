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
app.listen({ port: 3001 }, () =>
  console.log(`🚀 Items Service ready at http://localhost:3001`)
);

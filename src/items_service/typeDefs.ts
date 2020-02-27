import { gql } from 'apollo-server-express'

export default gql`
  scalar ID
  type Query {
    items: [Item]
  }
  type Item @key(fields: "id") {
    id: ID!
    name: String!
  }
`
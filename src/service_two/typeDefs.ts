import { gql } from 'apollo-server-express'

export default gql`
  scalar ID
  extend type Item @key(fields: "id") {
    id: ID! @external
    propTwo: String
  }
`
import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  type Transactions {
    id: ID!
    receiver: String
    amount: Int
    status: String
    alias: String
    description: String
    created_at: String!
    type: String
  }

  input TxnFilters {
    status: String
    type: String
  }

  type Query {
    transactions(q: String, filter: TxnFilters): [Transactions]!
    count: Int
  }
`

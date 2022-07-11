import { gql } from 'graphql-request'

export interface TxnFilters {
  status: string
  type: string
}

export const txnQuery = gql`
  query getTxn($query: String, $filter: TxnFilters) {
    transactions(q: $query, filter: $filter) {
      id
      amount
      description
      status
      alias
      receiver
      type
      created_at
    }
    count
  }
`

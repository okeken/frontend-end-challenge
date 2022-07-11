export interface Transactions {
  id: string
  receiver: string
  amount: number
  status: string
  alias: string
  description: string
  created_at: string
  type: string
}

export interface TxnFilters {
  status: string
  type: string
}

export interface SearchQuery {
  q: string
  filter: TxnFilters
}

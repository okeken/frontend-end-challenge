import { request } from 'graphql-request'
import { txnQuery } from '../queries'


export const fetchTransaction = async (
  queryWord = '',
  filter = { status: '', type: '' },
) => {
  try {
    const result = await request(
      'http://localhost:3000/api/graphql',
      txnQuery,
      {
        query: queryWord,
        filter,
      },
    )
  
    return result?.transactions
  } catch (e: any) {
    return e
  }
}

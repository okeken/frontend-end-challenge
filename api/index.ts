import { request } from 'graphql-request'
import { txnQuery } from '../queries'


export const fetchTransaction = async (
  queryWord = '',
  filter = { status: '', type: '' },
) => {
  try {
    const result = await request(
      process.env.NEXT_GRAPHQL_URL as string,
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

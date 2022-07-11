import { useState, useEffect } from 'react'
import { fetchTransaction } from '../api'
import { Transactions, TxnFilters } from '../types'

const initTxn: Transactions[] = []
const useGetTxn = (queryWord = '') => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [data, setData] = useState(initTxn)

  const fetchData = async (query: string, filter: TxnFilters) => {
    setError(false)
    if (loaded) {
      setLoading(true)
    }

    try {
      const result = await fetchTransaction(query, filter)
      setData(result ?? [])
      setLoaded(true)
      setLoading(false)
    } catch (e) {
      setError(true)
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchData(queryWord, { status: '', type: '' })
  }, [queryWord])

  return {
    loaded,
    loading,
    error,
    setError,
    data,
    setData,
    fetchData,
  }
}

export default useGetTxn

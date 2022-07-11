import { useState, useEffect } from 'react'
import { fetchTransaction } from '../api'
import { Transactions, TxnFilters } from '../types'

const initTxn: Transactions[] = []
const useGetTxn = (queryWord = '') => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [data, setData] = useState(initTxn)

  const fetchData = (query: string, filter: TxnFilters) => {
    setError(false)
    setLoading(true)
    fetchTransaction(query, filter)
      .then((data) => {
        setData(data ?? [])
        setLoaded(true)
      })
      .catch(() => setError(true))
    setLoading(false)
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

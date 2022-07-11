import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import useGetTxn from '../hooks/useGetTxn'
import Input from '../components/input'
import Loader from '../components/Loader'
import { normalizedTxn } from '../utils'
import TransactionComp from '../components/Transactions'

const initTxnStatusCheck = {
  status: '',
  type: '',
}

const Home: NextPage = () => {
  const [userInput, setUserInput] = useState('')
  const [filterTxn, setFilterTxn] = useState(initTxnStatusCheck)
  const { status, type } = filterTxn
  const { data, loading, error, fetchData, loaded } = useGetTxn(userInput)

  const handleChange = (e: any) => {
    setUserInput(e.target.value)
  }

  const fetchAgain = () => fetchData(userInput, { status: '', type: '' })
  const _loading = !loaded && <Loader />
  const _error = !!error && (
    <div>
      <div>
        {' '}
        Error Occurred, <button onClick={fetchAgain}>try again</button>{' '}
      </div>
    </div>
  )
  const _data = <TransactionComp data={normalizedTxn(data)} />

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterTxn((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    })
  }

  // const memoizedValue = useMemo(() => filterTxn, [filterTxn]);

  useEffect(() => {
    fetchData(userInput, { status, type })
  }, [status, type])

  const handleClear = (input: string) => {
    if (input == 'status') {
      setFilterTxn((prev) => ({
        ...prev,
        pending: false,
        success: false,
        failed: false,
        status: '',
      }))
    }
    if (input == 'type') {
      setFilterTxn((prev) => ({ ...prev, out: false, in: false, type: '' }))
    }
  }

  const _input = (
    <>
      {' '}
      <div className="max-w-lg m-auto my-6">
        <Input
          disabled={!loaded}
          placeholder="Search by Txn Id, Receiver Address or Alias"
          handleChange={handleChange}
        />
      </div>
      {!!(userInput.length && !data.length) ? (
        <h1 className="text-center">
          No search results for &quot;{userInput}&quot;
        </h1>
      ) : (
        <h1 className="text-center">
          {!!userInput.length && <>Results for &quot;{userInput}&quot;</>}
        </h1>
      )}
    </>
  )
  const _filters = (
    <>
      <div className="radio-block m-auto max-w-xl flex  items-center w-full mt-6">
        <div>
          <span className="mr-5">Status</span>
          <input
            checked={filterTxn.status == 'pending'}
            type="radio"
            id="pending-status"
            name="status"
            value="pending"
            onChange={handleFilter}
          />
          <label htmlFor="pending-status" className="border">
            Pending
          </label>

          <input
            checked={filterTxn.status == 'success'}
            type="radio"
            id="success-status"
            name="status"
            value="success"
            onChange={handleFilter}
          />
          <label htmlFor="success-status" className="border">
            Success
          </label>
          <input
            checked={filterTxn.status == 'failed'}
            type="radio"
            id="failed-status"
            name="status"
            value="failed"
            onChange={handleFilter}
          />
          <label htmlFor="failed-status" className="border">
            Failed
          </label>
        </div>
        <div>
          {!!filterTxn.status ? (
            <>
              {' '}
              <button
                onClick={() => handleClear('status')}
                className="bg-gray-400 text-white sm:px-4 px-2  py-1 text-sm "
              >
                clear
              </button>
            </>
          ) : null}
        </div>
      </div>

      <div className="radio-block m-auto max-w-xl flex items-center w-full mt-6">
        <div>
          <span className="mr-5">Type</span>
          <input
            checked={filterTxn.type == 'in'}
            type="radio"
            id="in-type"
            name="type"
            value="in"
            onChange={handleFilter}
          />
          <label htmlFor="in-type" className="border">
            Received
          </label>

          <input
            checked={filterTxn.type == 'out'}
            type="radio"
            id="out-type"
            name="type"
            value="out"
            onChange={handleFilter}
          />
          <label htmlFor="out-type" className="border">
            Sent
          </label>
        </div>
        <div>
          {!!filterTxn.type ? (
            <>
              {' '}
              <button
                onClick={() => handleClear('type')}
                className="bg-gray-400 text-white px-5 py-1 text-sm "
              >
                clear
              </button>
            </>
          ) : null}
        </div>
      </div>
    </>
  )

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="px-4">
        <h1 className="text-center text-4xl my-6">Transactions Lists</h1>

        {_input}
        {loaded && _filters}

        <div className="max-w-xl m-auto block mt-12 relative">
          {loading && (
            <p
              style={{
                left: '43%',
              }}
              className="absolute top-18 px-3 text-white rounded-full bg-blue-200"
            >
              Loading...
            </p>
          )}

          <div className={`${loading ? 'opacity-30' : ''}`}>
            {_loading}
            {_error}
            {_data}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

// Tranasctions
// filter by

// transaction type - sent, received
//  transaction status - pending, done, aborted,

// search by
// alias, txn id,receiver address

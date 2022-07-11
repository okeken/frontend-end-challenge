import { useId } from 'react'
import { splitAddress } from '../../utils'

const TransactionComp = ({ data }: any) => {
  const id = useId()
  return (
    <>
      {data?.map((i: any, idx: number) => (
        <div key={idx + id}>
          <div className="mb-6 border  ">
            <h1 className="mb-3 p-2">{i.date}</h1>
            {i.data.map((i: any, idx: number) => (
              <>
                <div
                  key={idx + id}
                  className="flex items-center border-t-2 border-gray-100 w-full justify-between p-2 "
                >
                  <div className="flex items-center">
                    <div className="mr-4">
                      {i.type === 'in' ? <InIcon /> : <OutIcon />}
                    </div>
                    <div>
                      <div>Transfer</div>
                      <div>
                        {' '}
                        {i.type === 'in' ? 'From' : 'To'}:{' '}
                        {splitAddress(i.receiver)} - {i.alias}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className={`${
                        i.type === 'in' && i.status == 'success'
                          ? 'text-green-600'
                          : ''
                      } text-center`}
                    >
                      {i.type === 'in' ? '+' : '-'} {i.amount} ETH
                    </div>

                    <div className="flex items-center rounded-full border px-2 text-sm text-bold  ">
                      <span
                        className={`${
                          i.status == 'pending'
                            ? 'bg-yellow-400'
                            : i.status == 'failed'
                            ? 'bg-red-600'
                            : 'bg-green-400'
                        } h-2 w-2 rounded-full  opacity-75 mr-1`}
                      ></span>
                      {i.status}
                    </div>
                  </div>
                </div>
               <div className='ml-2'> Id: {i.id}</div>
                
              </>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

export default TransactionComp

const InIcon = () => {
  return (
    <>
      <svg
        className="text-gray-500 text-3xl"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 1024 1024"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path>
      </svg>
    </>
  )
}
const OutIcon = () => {
  return (
    <>
      <svg
        className="text-gray-500 text-3xl"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 1024 1024"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 0 0-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path>
      </svg>
    </>
  )
}

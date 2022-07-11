import { faker } from '@faker-js/faker'
import { Transactions } from '../types/index'
import { randomUUID } from 'crypto'
import { genRandom, setDate } from '../utils'

const transactions: Transactions[] = []
const txnStatus = ['pending', 'success', 'failed']
const txnType = ['in', 'out']


const sampleData = {
  id:"9984df6-2b71-4788-84fc-314599789492",
  receiver:"0x786BfF269d10812Ac61c0c197E3Fc4215cabc3d9",
  amount:12,
  status:"Success",
  description:"This is a seed sample data",
  created_at:'2022-07-09T10:23:49.779Z',
  type:"out",
  alias:'Don'
}

transactions.push(sampleData)
for (let i = 0; i < 24; i++) {
  const element = {
    id: randomUUID(),
    receiver: faker.finance.ethereumAddress(),
    amount: +genRandom(2, 200),
    status: txnStatus?.[genRandom(0, 2)],
    description: faker.random.word(),
    alias: faker.name.firstName(),
    created_at: setDate(genRandom(0, 10)), // random date from today to last five days
    type: txnType?.[genRandom(0, 1)],
  }
  transactions.push(element)
}


// reformat date
const modified = transactions.map((i) => ({
  ...i,
  created_at: new Date(i.created_at),
})) /**@ts-ignore */
// sort date from current to previous dates
const sortedtransactions = modified.sort((a, b) => b.created_at - a.created_at)

export { sortedtransactions as transactions }

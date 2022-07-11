import { faker } from '@faker-js/faker'
import { Transactions } from '../types/index'
import { randomUUID } from 'crypto'
import { genRandom, setDate, groupBy } from '../utils'

const transactions: Transactions[] = []
const txnStatus = ['pending', 'success', 'failed']
const txnType = ['in', 'out']

for (let i = 0; i < 25; i++) {
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

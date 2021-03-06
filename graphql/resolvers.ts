import { transactions as txnList } from '../data'
import Fuse from 'fuse.js'
import { SearchQuery } from '../types'

const options = {
  includeScore: false,
  keys: ['receiver', 'id', 'alias','description', 'amount', 'status'],
  minMatchCharLength:3,
  distance:10,
}

const results = (args: SearchQuery, txnList: any[], options: any) => {
  const fuse = new Fuse(txnList, options)
  const result = fuse.search(args.q)
  const refined = result.map((i) => i.item)
  const search = args?.q?.length ? refined ?? [] : txnList
  let res = search
  if (!!args?.filter?.status) {
    res = res.filter((o) => o.status == args?.filter?.status)
  }
  if (!!args?.filter?.type) {
    res = res.filter((o) => o.type == args?.filter?.type)
  }

  return res
}
export const resolvers = {
  Query: {
    transactions: (parent: any, args: SearchQuery) => {
      if(args.q || args?.filter?.status || args?.filter?.type) {
        const list = txnList
        const output = results(args, list, options)
        return output
      }
      return txnList
    },
    count: (parent: any, args: SearchQuery) => {
      return txnList.length
    },
  },
}

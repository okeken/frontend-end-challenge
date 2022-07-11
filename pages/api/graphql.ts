import { ApolloServer } from 'apollo-server-micro'
import Cors from 'micro-cors'
import { typeDefs } from '../../graphql/schema'
import { resolvers } from '../../graphql/resolvers'

const cors = Cors()
const apolloServer = new ApolloServer({ typeDefs, resolvers })

const startServer = apolloServer.start()

export default cors(async function handler(req, res) {
  await startServer

  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }

  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
})

export const config = {
  api: {
    bodyParser: false,
  },
}

import { GraphQLClient } from 'graphql-request'

// TODO this will get fixed once you run `yarn gql-codegen` for the first time
import { getSdk } from './generated'

const client = new GraphQLClient(process.env.GRAPHQL_ENDPONT, {
  headers: { Authorization: `Bearer ${process.env.CMS_ACCESS_TOKEN}` }
})
const gqlSdk = getSdk(client)

export default gqlSdk

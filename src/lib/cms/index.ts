import { GraphQLClient } from 'graphql-request'

// TODO this will get fixed once you run `yarn gql-codegen` for the first time
import { getSdk } from './generated'

const endpoint = process.env.CMS_GRAPHQL_ENDPONT
if (!endpoint) throw new Error(`Endpoint must be defined. Got ${endpoint}`)

const cms = (preview?: boolean) =>
  getSdk(
    new GraphQLClient(endpoint, {
      headers: {
        Authorization: `Bearer ${
          preview
            ? process.env.CMS_PREVIEW_ACCESS_TOKEN
            : process.env.CMS_ACCESS_TOKEN
        }`
      }
    })
  )

export default cms

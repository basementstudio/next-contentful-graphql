import { GraphQLClient } from 'graphql-request'
import { getSdk } from './generated'

const endpoint = process.env.CMS_GRAPHQL_ENDPOINT

const cms = (preview?: boolean) =>
  getSdk(
    new GraphQLClient(endpoint as string, {
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

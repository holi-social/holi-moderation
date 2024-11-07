import type { RequestDocument, Variables } from 'graphql-request'
import { GraphQLClient } from 'graphql-request'
import type { Fetcher } from 'swr'

import { useAuthState } from './state'

export const BASE_URL = import.meta.env.VITE_GRAPHQL_URL as string
export const gqlClient = () => {
  const authState = useAuthState.getState()
  const headers: { authorization?: string } = {}

  if (authState.loggedIn) {
    headers['authorization'] = `Bearer ${authState.user.token}`
  }

  return new GraphQLClient(BASE_URL, { headers })
}

type FetcherArgs = [RequestDocument, Variables | undefined]

export const fetcher: Fetcher<unknown, FetcherArgs> = ([query, variables]: FetcherArgs) =>
  gqlClient().request(query, variables)

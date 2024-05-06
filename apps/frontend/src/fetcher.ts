import { GraphQLClient, RequestDocument, Variables } from "graphql-request";
import { Fetcher } from "swr";

export const BASE_URL = "http://localhost:8080/v1/graphql";
export const client = new GraphQLClient(BASE_URL);

type FetcherArgs = [RequestDocument, Variables | undefined];

export const fetcher: Fetcher<unknown, FetcherArgs> = ([
  query,
  variables,
]: FetcherArgs) => client.request(query, variables);

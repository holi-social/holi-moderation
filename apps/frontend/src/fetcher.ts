import { GraphQLClient } from "graphql-request";

export const BASE_URL = "http://localhost:8080/v1/graphql";
export const client = new GraphQLClient(BASE_URL);

export const fetcher = ([query, variables]) => client.request(query, variables);

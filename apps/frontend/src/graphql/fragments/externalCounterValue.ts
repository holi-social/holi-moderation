import gql from 'graphql-tag'

export const ExternalCounterValue = gql`
  fragment ExternalCounterValue on ExternalCounterValue {
    createdAt
    externalCount
  }
`

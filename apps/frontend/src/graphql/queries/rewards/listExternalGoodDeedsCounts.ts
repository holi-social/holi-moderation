import gql from 'graphql-tag'

import { ExternalCounterValue } from '../../fragments/externalCounterValue'

export const ListExternalGoodDeedsCountsQuery = gql`
  ${ExternalCounterValue}

  query ListExternalGoodDeedsCounts {
    rewards {
      externalCounterValue(orderBy: { createdAt: DESC }) {
        ...ExternalCounterValue
      }
    }
  }
`

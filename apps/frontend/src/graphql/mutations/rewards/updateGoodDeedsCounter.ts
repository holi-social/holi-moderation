import gql from 'graphql-tag'

import { ExternalCounterValue } from '../../fragments/externalCounterValue'

export const UpdateExternalGoodDeedsCountMutation = gql`
  ${ExternalCounterValue}

  mutation UpdateExternalGoodDeedsCount($count: Int!) {
    rewards {
      insertExternalCounterValueOne(object: { externalCount: $count }) {
        ...ExternalCounterValue
      }
    }
  }
`

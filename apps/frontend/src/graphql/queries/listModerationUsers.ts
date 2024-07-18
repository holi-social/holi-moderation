import { gql } from 'graphql-tag'

import { ModerationUserDetails } from '../fragments/moderationUser'

export const ListModerationUsersQuery = gql`
  ${ModerationUserDetails}

  query ListModerators {
    users {
      ...ModerationUserDetails
    }
  }
`

import { gql } from 'graphql-tag'

import { ModerationUserDetails } from '../fragments/moderationUser'

export const ChangeModerationUserRoleMutation = gql`
  ${ModerationUserDetails}

  mutation ChangeModerationUserRole($userId: UUID!, $newRole: UserRole!) {
    changeRole(userId: $userId, newRole: $newRole) {
      ...ModerationUserDetails
    }
  }
`

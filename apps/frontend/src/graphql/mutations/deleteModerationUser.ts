import { gql } from "graphql-tag";

export const DeleteModerationUserMutation = gql`
  mutation DeleteModerationUser($userId: UUID!) {
    deleteUser(userId: $userId) {
      success
    }
  }
`;

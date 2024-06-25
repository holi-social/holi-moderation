import gql from "graphql-tag";

export const SuspendUserMutation = gql`
  mutation SuspendUser($email: String!, $reason: String, $duration: Int) {
    suspendUser(email: $email, reason: $reason, duration: $duration) {
      success
    }
  }
`;

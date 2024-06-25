import gql from "graphql-tag";

export const SuspendUserMutation = gql`
  mutation SuspendUser(
    $reportId: UUID!
    $email: String!
    $reason: String
    $duration: Int
  ) {
    suspendUser(
      reportId: $reportId
      email: $email
      reason: $reason
      duration: $duration
    ) {
      success
    }
  }
`;

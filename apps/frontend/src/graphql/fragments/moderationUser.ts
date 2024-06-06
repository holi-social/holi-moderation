import gql from "graphql-tag";

export const ModerationUserDetails = gql`
  fragment ModerationUserDetails on User {
    id
    email
    role
    createdAt
    updatedAt
  }
`;

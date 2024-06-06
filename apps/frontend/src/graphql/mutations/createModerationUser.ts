import gql from "graphql-tag";
import { ModerationUserDetails } from "../fragments/moderationUser";

export const CreateModerationUserMutation = gql`
  ${ModerationUserDetails}

  mutation CreateModerationUser($user: CreateUser!) {
    registerUser(user: $user) {
      ...ModerationUserDetails
    }
  }
`;

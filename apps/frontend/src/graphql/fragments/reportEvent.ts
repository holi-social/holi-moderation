import { gql } from "graphql-tag";

import { ModerationUserDetails } from "./moderationUser";

export const ReportEventDetails = gql`
  ${ModerationUserDetails}

  fragment ReportEventDetails on ReportEvent {
    id
    eventName
    eventPayload
    occurredAt
    actor {
      ...ModerationUserDetails
    }
  }
`;

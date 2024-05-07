import gql from "graphql-tag";

export const ReportEventDetails = gql`
  fragment ReportEventDetails on ReportEvent {
    id
    eventName
    eventPayload
    occurredAt
  }
`;

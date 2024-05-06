import gql from "graphql-tag";
import { CommentDetails } from "../fragments/comment";
import { PostDetails } from "../fragments/post";
import { UserDetails } from "../fragments/user";
import { ReportedUserDetails } from "../fragments/reportedUser";
import { ReportedSpaceTaskDetails } from "../fragments/spaceTask";
import { ReportedSpaceDetails } from "../fragments/reportedSpace";
import { ReportedSpaceAppointmentDetails } from "../fragments/spaceAppointment";
import { ReportedSpaceLinkhubToolDetails } from "../fragments/spaceLinkhubTool";

export const ViewReportQuery = gql`
  ${UserDetails}
  ${PostDetails}
  ${CommentDetails}
  ${ReportedUserDetails}
  ${ReportedSpaceDetails}
  ${ReportedSpaceAppointmentDetails}
  ${ReportedSpaceTaskDetails}
  ${ReportedSpaceLinkhubToolDetails}

  query ViewReport($id: UUID!) {
    report(id: $id) {
      id
      details
      contentType
      createdAt

      reporter {
        ...UserDetails
      }

      reportedPost {
        ...PostDetails
      }

      reportedComment {
        ...CommentDetails
      }

      reportedUser {
        ...ReportedUserDetails
      }

      reportedSpace {
        ...ReportedSpaceDetails
      }

      reportedSpaceAppointment {
        ...ReportedSpaceAppointmentDetails
      }

      reportedSpaceTask {
        ...ReportedSpaceTaskDetails
      }

      reportedSpaceLinkhubTool {
        ...ReportedSpaceLinkhubToolDetails
      }
    }
  }
`;

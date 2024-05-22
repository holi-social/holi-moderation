import gql from "graphql-tag";
import { PostDetails } from "./post";
import { SpaceDetails } from "./space";
import { SpaceAppointmentDetails } from "./spaceAppointment";
import { SpaceTaskDetails } from "./spaceTask";
import { SpaceLinkhubToolDetails } from "./spaceLinkhubTool";
import { UserDetails } from "./user";

export const ReportedSpaceDetails = gql`
  ${UserDetails}
  ${SpaceDetails}
  ${SpaceAppointmentDetails}
  ${PostDetails}
  ${SpaceTaskDetails}
  ${SpaceLinkhubToolDetails}

  fragment ReportedSpaceDetails on OpenbookCommunitiesCommunity {
    ...SpaceDetails

    postsAggregate {
      aggregate {
        count
      }
    }

    appointmentsAggregate {
      aggregate {
        count
      }
    }

    tasksAggregate {
      aggregate {
        count
      }
    }

    linkhubToolsAggregate {
      aggregate {
        count
      }
    }

    posts(limit: 3, orderBy: { created: DESC }) {
      ...PostDetails
    }

    appointments(limit: 3, orderBy: { created: DESC }) {
      ...SpaceAppointmentDetails
    }

    tasks(limit: 3, orderBy: { created: DESC }) {
      ...SpaceTaskDetails
    }

    linkhubTools(limit: 3, orderBy: { createdAt: DESC }) {
      ...SpaceLinkhubToolDetails
    }

    admins: members(where: { isAdministrator: { _eq: true } }) {
      user {
        ...UserDetails
      }
    }
  }
`;

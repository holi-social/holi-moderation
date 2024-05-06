import gql from "graphql-tag";
import { UserDetails } from "./user";

export const SpaceDetails = gql`
  ${UserDetails}

  fragment SpaceDetails on OpenbookCommunitiesCommunity {
    id
    avatar
    cover
    name
    title
    description
    location

    contactDescription
    contactEmail
    contactPhone

    onboardingSteps {
      stepNumber
      text
    }

    created

    creator {
      ...UserDetails
    }

    externalLinks {
      id
      name
      type
      url
    }

    linkhubToolsAggregate {
      aggregate {
        count
      }
    }
  }
`;

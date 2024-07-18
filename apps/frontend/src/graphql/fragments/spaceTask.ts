import { gql } from 'graphql-tag'

import { UserDetails } from './user'
import { SpaceDetails } from './space'

export const SpaceTaskDetails = gql`
  ${UserDetails}

  fragment SpaceTaskDetails on OpenbookCommunitiesTask {
    id
    name
    description
    thumbnail

    locationType
    location

    visibility
    regularity
    slotsAvailable
    slotsTaken

    contactEmail
    contactPhone

    skills {
      skill {
        id
        title
      }
    }

    created
    creator {
      ...UserDetails
    }
  }
`

export const ReportedSpaceTaskDetails = gql`
  ${SpaceTaskDetails}
  ${SpaceDetails}

  fragment ReportedSpaceTaskDetails on OpenbookCommunitiesTask {
    ...SpaceTaskDetails

    space {
      ...SpaceDetails
    }
  }
`

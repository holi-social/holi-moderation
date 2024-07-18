import { gql } from 'graphql-tag'

import { SpaceDetails } from './space'
import { UserDetails } from './user'

export const SpaceLinkhubToolDetails = gql`
  ${UserDetails}

  fragment SpaceLinkhubToolDetails on OpenbookCommunitiesCollaborationtool {
    id
    title
    description
    thumbnail

    collectionType

    url
    domain

    createdAt
    creator {
      ...UserDetails
    }
  }
`

export const ReportedSpaceLinkhubToolDetails = gql`
  ${SpaceLinkhubToolDetails}
  ${SpaceDetails}

  fragment ReportedSpaceLinkhubToolDetails on OpenbookCommunitiesCollaborationtool {
    ...SpaceLinkhubToolDetails

    space {
      ...SpaceDetails
    }
  }
`

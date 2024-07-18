import { gql } from 'graphql-tag'

import { SpaceDetails } from './space'
import { UserDetails } from './user'

export const SpaceAppointmentDetails = gql`
  ${UserDetails}

  fragment SpaceAppointmentDetails on OpenbookAppointmentsAppointment {
    id

    title
    description
    thumbnail

    creator {
      ...UserDetails
    }

    startDateTime
    endDateTime

    videoCallLink {
      url
      additionalInfo
    }

    locationDetails {
      completeAddress
    }

    inviteOnly
    permission

    participantsAggregate {
      aggregate {
        count
      }
    }

    created
    modified
    isDeleted
    deletedAt
  }
`

export const ReportedSpaceAppointmentDetails = gql`
  ${SpaceAppointmentDetails}
  ${SpaceDetails}

  fragment ReportedSpaceAppointmentDetails on OpenbookAppointmentsAppointment {
    ...SpaceAppointmentDetails

    space {
      ...SpaceDetails
    }
  }
`

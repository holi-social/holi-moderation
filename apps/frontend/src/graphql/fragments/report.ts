import { gql } from 'graphql-tag'

import { CommentDetails } from './comment'
import { PostDetails } from './post'
import { FeedPostDetails } from './feedPost'
import { ReportedSpaceDetails } from './reportedSpace'
import { ReportedUserDetails } from './reportedUser'
import { ReportedSpaceAppointmentDetails } from './spaceAppointment'
import { ReportedSpaceLinkhubToolDetails } from './spaceLinkhubTool'
import { ReportedSpaceTaskDetails } from './spaceTask'
import { UserDetails } from './user'
import { ReportEventDetails } from './reportEvent'

export const ReportDetails = gql`
  ${UserDetails}
  ${PostDetails}
  ${FeedPostDetails}
  ${CommentDetails}
  ${ReportedUserDetails}
  ${ReportedSpaceDetails}
  ${ReportedSpaceAppointmentDetails}
  ${ReportedSpaceTaskDetails}
  ${ReportedSpaceLinkhubToolDetails}
  ${ReportEventDetails}

  fragment ReportDetails on Report {
    id
    details
    contentType
    status
    createdAt

    reporter {
      ...UserDetails
    }

    events {
      ...ReportEventDetails
    }

    reportedPost {
      ...PostDetails
    }

    reportedFeedPost {
      ...FeedPostDetails
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
`

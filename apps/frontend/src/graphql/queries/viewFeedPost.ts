import { gql } from 'graphql-tag'

import { FeedPostDetails } from '../fragments/feedPost'

export const viewFeedPostQuery = gql`
  ${FeedPostDetails}

  query ViewFeedPost($id: uuid!) {
    feedPostsFeedpostByPk(id: $id) {
      ...FeedPostDetails
    }
  }
`

import { gql } from 'graphql-tag'

import { UserDetails } from './user'

export const FeedPostDetails = gql`
  ${UserDetails}

  fragment FeedPostDetails on FeedPostsFeedpost {
    id
    title
    slug
    description
    visibility
    createdAt
    categoryId
    linkPreviewId
    languageCode

    creator {
      ...UserDetails
    }
  }
`

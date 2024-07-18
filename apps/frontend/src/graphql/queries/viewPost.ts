import { gql } from 'graphql-tag'

import { PostDetails } from '../fragments/post'

export const ViewPostQuery = gql`
  ${PostDetails}

  query ViewPost($id: uuid!) {
    openbookPostsPostByPk(id: $id) {
      ...PostDetails
    }
  }
`

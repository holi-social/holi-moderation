import { gql } from 'graphql-tag'

import { PostDetails } from '../fragments/post'

export const viewPostQuery = gql`
  ${PostDetails}

  query ViewPost($id: uuid!) {
    openbookPostsPostByPk(id: $id) {
      ...PostDetails
    }
  }
`

import { gql } from "graphql-tag";

import { UserDetails } from "./user";

export const PostDetails = gql`
  ${UserDetails}

  fragment PostDetails on OpenbookPostsPost {
    id
    title
    text
    status
    created

    author {
      ...UserDetails
    }

    space {
      id
      name
      title

      creator {
        ...UserDetails
      }
    }
  }
`;

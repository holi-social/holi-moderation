import gql from "graphql-tag";
import { UserDetails } from "./user";

export const CommentDetails = gql`
  ${UserDetails}

  fragment CommentDetails on OpenbookPostsPostcomment {
    id
    text

    isEdited
    isDeleted

    created
    modified

    commenter {
      ...UserDetails
    }

    commentableType {
      appLabel
      model
    }

    commentableId

    parentComment {
      id
      text

      isEdited
      isDeleted

      created
      modified

      commenter {
        ...UserDetails
      }
    }
  }
`;

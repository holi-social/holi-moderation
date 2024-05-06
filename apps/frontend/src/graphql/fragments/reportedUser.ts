import gql from "graphql-tag";
import { CommentDetails } from "./comment";
import { PostDetails } from "./post";
import { SpaceDetails } from "./space";
import { UserDetails } from "./user";

export const ReportedUserDetails = gql`
  ${UserDetails}
  ${PostDetails}
  ${CommentDetails}
  ${SpaceDetails}

  fragment ReportedUserDetails on OpenbookAuthUser {
    ...UserDetails

    postsAggregate {
      aggregate {
        count
      }
    }
    posts(limit: 3, orderBy: { created: DESC }) {
      ...PostDetails
    }

    commentsAggregate {
      aggregate {
        count
      }
    }
    comments(limit: 3, orderBy: { created: DESC }) {
      ...CommentDetails
    }

    createdSpacesAggregate {
      aggregate {
        count
      }
    }
    createdSpaces(limit: 3, orderBy: { created: DESC }) {
      ...SpaceDetails
    }
  }
`;

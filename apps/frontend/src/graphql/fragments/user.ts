import gql from "graphql-tag";

export const UserDetails = gql`
  fragment UserDetails on OpenbookAuthUser {
    id
    email
    dateJoined

    profile {
      id
      name
      lastName
      pronouns
      avatar
      cover
      aboutMe
      location
      url
    }
  }
`;

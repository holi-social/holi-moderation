import gql from "graphql-tag";
import { UserDetails } from "../fragments/user";

const ListReportsQuery = gql`
  ${UserDetails}

  query ListReports {
    reports {
      id
      details
      contentType
      reporter {
        ...UserDetails
      }
      createdAt
      updatedAt
    }
  }
`;

export default ListReportsQuery;

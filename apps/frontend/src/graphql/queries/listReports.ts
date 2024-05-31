import gql from "graphql-tag";
import { UserDetails } from "../fragments/user";

const ListReportsQuery = gql`
  ${UserDetails}

  query ListReports($filter: ReportsFilter = {}, $pagination: Pagination = {}) {
    reports(filter: $filter, pagination: $pagination) {
      id
      details
      status
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

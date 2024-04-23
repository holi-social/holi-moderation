import { gql } from "graphql-tag";

export const REPORTS_LIST_QUERY = gql`
  query ListReports {
    reports {
      id
      details
      contentType
      reporter {
        id
        email
        profile {
          name
          lastName
        }
      }
    }
  }
`;

export const VIEW_REPORT_QUERY = gql`
  query ViewReport($id: UUID!) {
    report(id: $id) {
      id
      details
      contentType
      createdAt

      reporter {
        id
        email
        profile {
          name
          lastName
          avatar
        }
      }

      reportedPost {
        id
        title
        text
        status
        created

        author {
          id
          email
          profile {
            name
            lastName
            avatar
          }
        }
      }
    }
  }
`;

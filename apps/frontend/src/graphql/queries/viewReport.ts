import { gql } from 'graphql-tag'

import { ReportDetails } from '../fragments/report'

export const ViewReportQuery = gql`
  ${ReportDetails}

  query ViewReport($id: UUID!) {
    report(id: $id) {
      ...ReportDetails
    }
  }
`

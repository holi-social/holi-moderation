import { gql } from 'graphql-tag'

import { ReportDetails } from '../fragments/report'

export const ChangeReportStatusMutation = gql`
  ${ReportDetails}

  mutation ChangeReportStatus($reportId: UUID!, $newStatus: ReportStatus!) {
    changeReportStatus(reportId: $reportId, newStatus: $newStatus) {
      ...ReportDetails
    }
  }
`

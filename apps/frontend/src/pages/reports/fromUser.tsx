import { useParams } from 'react-router-dom'
import { Stack, Title } from '@mantine/core'

import { ReportsTable } from '../../components/reportsTable'

export const ListReportsFromUser = () => {
  const { reporterId } = useParams<'reporterId'>()

  return (
    <Stack>
      <Title>Reports for user</Title>
      <ReportsTable filters={{ reporter: reporterId }} />
    </Stack>
  )
}

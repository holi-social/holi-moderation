import React from 'react'
import { Button, Grid, Group, Stack, Text } from '@mantine/core'
import { IconCalendar, IconTopologyRing3, IconUser } from '@tabler/icons-react'

import { Space } from '../space'
import { okunaAdminUrl } from '../../utils'
import { ReportedSpaceAppointmentDetailsFragment } from '../../graphql/generated/types'

import { SpaceAppointment } from '.'

type ReportedSpaceAppointmentProps = {
  appointment: ReportedSpaceAppointmentDetailsFragment
}

export const ReportedSpaceAppointment: React.FC<ReportedSpaceAppointmentProps> = ({ appointment }) => {
  return (
    <Grid>
      <Grid.Col span={9}>
        <Stack>
          <SpaceAppointment appointment={appointment} />
          <Group>
            <Text size="sm" fw={600}>
              Open in Okuna Admin:
            </Text>
            <Button
              variant="light"
              leftSection={<IconCalendar size={14} />}
              component="a"
              href={okunaAdminUrl(`openbook_appointments/appointment/${appointment.id}`)}
              target="_blank"
            >
              Appointment
            </Button>
            <Button
              variant="light"
              leftSection={<IconTopologyRing3 size={14} />}
              component="a"
              href={okunaAdminUrl(`openbook_communities/community/${appointment.space.id}`)}
              target="_blank"
            >
              Space
            </Button>
            <Button
              variant="light"
              leftSection={<IconUser size={14} />}
              component="a"
              href={okunaAdminUrl(`openbook_auth/user/${appointment.creator?.id}`)}
              target="_blank"
            >
              Creator
            </Button>
          </Group>
        </Stack>
      </Grid.Col>
      <Grid.Col span={3}>
        <Space space={appointment.space} />
      </Grid.Col>
    </Grid>
  )
}

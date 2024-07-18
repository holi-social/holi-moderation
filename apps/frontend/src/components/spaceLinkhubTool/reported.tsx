import React from 'react'
import { Button, Grid, Group, Stack, Text } from '@mantine/core'
import { IconTools, IconTopologyRing3, IconUser } from '@tabler/icons-react'

import { Space } from '../space'
import { ReportedSpaceLinkhubToolDetailsFragment } from '../../graphql/generated/types'
import { okunaAdminUrl } from '../../utils'

import { SpaceLinkhubTool } from '.'

type ReportedSpaceLinkhubToolProps = {
  tool: ReportedSpaceLinkhubToolDetailsFragment
}

export const ReportedSpaceLinkhubTool: React.FC<ReportedSpaceLinkhubToolProps> = ({ tool }) => {
  return (
    <Grid>
      <Grid.Col span={9}>
        <Stack>
          <SpaceLinkhubTool tool={tool} />
          <Group>
            <Text size="sm" fw={600}>
              Open in Okuna Admin:
            </Text>
            <Button
              variant="light"
              leftSection={<IconTools size={14} />}
              component="a"
              href={okunaAdminUrl(`openbook_communities/collaborationtool/${tool.id}`)}
              target="_blank"
            >
              Linkhub Tool
            </Button>
            <Button
              variant="light"
              leftSection={<IconTopologyRing3 size={14} />}
              component="a"
              href={okunaAdminUrl(`openbook_communities/community/${tool.space.id}`)}
              target="_blank"
            >
              Space
            </Button>
            <Button
              variant="light"
              leftSection={<IconUser size={14} />}
              component="a"
              href={okunaAdminUrl(`openbook_auth/user/${tool.creator!.id}`)}
              target="_blank"
            >
              Creator
            </Button>
          </Group>
        </Stack>
      </Grid.Col>
      <Grid.Col span={3}>
        <Space space={tool.space} />
      </Grid.Col>
    </Grid>
  )
}

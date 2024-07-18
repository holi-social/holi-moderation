import React from 'react'
import { Tabs, Badge, rem, Grid } from '@mantine/core'
import { IconCalendar, IconListCheck, IconMessage, IconTools, IconUserBolt } from '@tabler/icons-react'

import { Post } from '../post'
import { SpaceAppointment } from '../spaceAppointment'
import { ReportedSpaceDetailsFragment } from '../../graphql/generated/types'
import { SpaceTask } from '../spaceTask'
import { SpaceLinkhubTool } from '../spaceLinkhubTool'
import { User } from '../user'

import { Space } from '.'

type ReportedSpaceProps = {
  space: ReportedSpaceDetailsFragment
}

export const ReportedSpace: React.FC<ReportedSpaceProps> = ({ space }) => {
  const iconStyle = { height: rem(12), width: rem(12) }

  const additionalContent = (
    <Tabs defaultValue="admins">
      <Tabs.List>
        <Tabs.Tab
          value="admins"
          leftSection={<IconUserBolt style={iconStyle} />}
          rightSection={
            <Badge variant="light" color="gray">
              {space.admins.length}
            </Badge>
          }
        >
          Admins
        </Tabs.Tab>
        <Tabs.Tab
          value="posts"
          leftSection={<IconMessage style={iconStyle} />}
          rightSection={
            <Badge variant="light" color="gray">
              {space.postsAggregate.aggregate?.count}
            </Badge>
          }
        >
          Posts
        </Tabs.Tab>
        <Tabs.Tab
          value="appointments"
          leftSection={<IconCalendar style={iconStyle} />}
          rightSection={
            <Badge variant="light" color="gray">
              {space.appointmentsAggregate.aggregate?.count}
            </Badge>
          }
        >
          Appointments
        </Tabs.Tab>

        <Tabs.Tab
          value="tasks"
          leftSection={<IconListCheck style={iconStyle} />}
          rightSection={
            <Badge variant="light" color="gray">
              {space.tasksAggregate.aggregate?.count}
            </Badge>
          }
        >
          Tasks
        </Tabs.Tab>

        <Tabs.Tab
          value="linkhub"
          leftSection={<IconTools style={iconStyle} />}
          rightSection={
            <Badge variant="light" color="gray">
              {space.linkhubToolsAggregate.aggregate?.count}
            </Badge>
          }
        >
          Linkhub Tools
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="admins" pt="md">
        <Grid>
          {space.admins.map((admin) => (
            <Grid.Col span={4} key={admin.user.id}>
              <User user={admin.user} />
            </Grid.Col>
          ))}
        </Grid>
      </Tabs.Panel>

      <Tabs.Panel value="posts" pt="md">
        {space.posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </Tabs.Panel>

      <Tabs.Panel value="appointments" pt="md">
        <Grid>
          {space.appointments.map((appointment) => (
            <Grid.Col span={4} key={appointment.id}>
              <SpaceAppointment appointment={appointment} key={appointment.id} />
            </Grid.Col>
          ))}
        </Grid>
      </Tabs.Panel>

      <Tabs.Panel value="tasks" pt="md">
        <Grid>
          {space.tasks.map((task) => (
            <Grid.Col span={4} key={task.id}>
              <SpaceTask task={task} />
            </Grid.Col>
          ))}
        </Grid>
      </Tabs.Panel>

      <Tabs.Panel value="linkhub" pt="md">
        <Grid>
          {space.linkhubTools.map((tool) => (
            <Grid.Col span={4} key={tool.id}>
              <SpaceLinkhubTool tool={tool} />
            </Grid.Col>
          ))}
        </Grid>
      </Tabs.Panel>
    </Tabs>
  )

  return <Space space={space} additionalContent={additionalContent} />
}

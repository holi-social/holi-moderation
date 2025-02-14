import React, { ReactNode } from 'react'
import { Card, Group, Stack, Text, Title } from '@mantine/core'

import { UserDetailsFragment } from '../../graphql/generated/types'
import { UserAvatar } from '../avatar'
import { relativeFormatISOTimestamp } from '../../utils'
import { OpenbookAuthUser } from '../../graphql/generated/schema.types'
import { ImageWithPreview } from '../imageWithPreview'

type UserDetailsProps = {
  user: UserDetailsFragment | OpenbookAuthUser
  additionalContent?: ReactNode
}

export const User: React.FC<UserDetailsProps> = ({ user, additionalContent }) => {
  const userNameHead = `${user.profile?.name ?? ''} ${user.profile?.lastName ?? ''} ${user.profile?.pronouns ? `(${user.profile.pronouns})` : ''}`

  return (
    <Card shadow="xs" padding="lg" radius="md" withBorder>
      <Card.Section p="md">
        <Stack>
          <Group>
            <UserAvatar user={user} />
            <Stack gap={0}>
              <Title order={5}>{userNameHead}</Title>
              {user.profile?.location && (
                <Text c="dimmed" inline>
                  {user.profile.location}
                </Text>
              )}
              <Text c="dimmed" inline>
                joined {relativeFormatISOTimestamp(user.dateJoined)}
              </Text>
            </Stack>
          </Group>

          {user.profile?.aboutMe && (
            <Stack gap={0}>
              <Title order={5} size="sm">
                Bio
              </Title>
              <Text>{user.profile?.aboutMe}</Text>
            </Stack>
          )}
          {user.profile?.url && (
            <Stack gap={0}>
              <Title order={5} size="sm">
                URL
              </Title>
              <Text>{user.profile?.url}</Text>
            </Stack>
          )}
        </Stack>
      </Card.Section>

      {additionalContent && <Card.Section p="md">{additionalContent}</Card.Section>}
    </Card>
  )
}

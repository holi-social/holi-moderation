import type { DefaultMantineColor } from '@mantine/core'
import { Blockquote, Button, Group, Paper, Skeleton, Stack, Text, Tooltip } from '@mantine/core'
import React from 'react'
import { formatDistanceToNow } from 'date-fns'
import { IconMessage, IconUser } from '@tabler/icons-react'

import { okunaAdminUrl, relativeFormatISOTimestamp } from '../../utils'
import type { FeedPostDetailsFragment } from '../../graphql/generated/types'
import { UserAvatar } from '../avatar'

type FeedPostProps = {
  feedPost: FeedPostDetailsFragment
  backgroundColor?: DefaultMantineColor
}

type FeedPostSkeletonProps = Omit<FeedPostProps, 'feedPost'>

export const FeedPost: React.FC<FeedPostProps> = ({ feedPost, backgroundColor }) => {
  console.log(feedPost)
  const authorName = (feedPost.creator?.profile?.name ?? '') + ' ' + (feedPost.creator?.profile?.lastName ?? '')

  const authorAdminUrl = okunaAdminUrl(`openbook_auth/user/${feedPost.creator?.id}`)

  if (!feedPost) return <FeedPostSkeleton />

  return (
    <Paper p="md">
      <Group align="start">
        <UserAvatar user={feedPost.creator} />
        <Stack flex={1}>
          <Blockquote
            color={backgroundColor ?? 'blue'}
            p="sm"
            cite={
              <Tooltip label={relativeFormatISOTimestamp(feedPost.createdAt)}>
                <Text>
                  {authorName} • {formatDistanceToNow(feedPost.createdAt, { addSuffix: true })}
                </Text>
              </Tooltip>
            }
          >
            <Text fw={700}>{feedPost.title}</Text>
            <Text>{feedPost.description}</Text>
          </Blockquote>
          <Group>
            <Text size="sm" fw={600}>
              Open in Okuna Admin:
            </Text>
            <Button
              variant="light"
              color={backgroundColor ?? 'blue'}
              leftSection={<IconMessage size={14} />}
              component="a"
              href={okunaAdminUrl(`feed_posts/feedpost/${feedPost.id}`)}
              target="_blank"
            >
              FeedPost
            </Button>
            <Button
              variant="light"
              color={backgroundColor ?? 'blue'}
              leftSection={<IconUser size={14} />}
              component="a"
              href={authorAdminUrl}
              target="_blank"
            >
              User
            </Button>
          </Group>
        </Stack>
      </Group>
    </Paper>
  )
}

export const FeedPostSkeleton: React.FC<FeedPostSkeletonProps> = ({ backgroundColor }) => (
  <Paper p="md">
    <Group align="start">
      <Skeleton circle height={50} />
      <Stack flex={1}>
        <Blockquote color={backgroundColor ?? 'blue'} p="sm" cite={<Skeleton height={8} width="25%" />}>
          <Skeleton height={16} mb="sm" />
          <Skeleton height={12} mb="sm" />
          <Skeleton height={12} />
        </Blockquote>
        <Group>
          <Text size="sm" fw={600}>
            Open in Okuna Admin:
          </Text>
          <Skeleton height={34} width={96} />
          <Skeleton height={34} width={96} />
          <Skeleton height={34} width={96} />
        </Group>
      </Stack>
    </Group>
  </Paper>
)

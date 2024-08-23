import React from 'react'
import useSWR from 'swr'
import { Blockquote, Button, Grid, Group, Paper, Stack, Text, Tooltip } from '@mantine/core'
import { formatDistanceToNow, parseISO } from 'date-fns'
import { IconMessageReply, IconUser } from '@tabler/icons-react'

import { okunaAdminUrl } from '../../utils'
import { Post, PostSkeleton } from '../post'
import type { CommentDetailsFragment, ViewFeedPostQuery, ViewPostQuery } from '../../graphql/generated/types'
import { UserAvatar } from '../avatar'
import { viewFeedPostQuery } from '../../graphql/queries/viewFeedPost'
import { FeedPost } from '../feedpost'
import { viewPostQuery } from '../../graphql/queries/viewPost.ts'

type CommentProps = {
  comment: CommentDetailsFragment
  withCommentable?: boolean
}

export const Comment: React.FC<CommentProps> = ({ comment, withCommentable = true }) => {
  const commentableIsPost =
    comment.commentableType.appLabel === 'openbook_posts' && comment.commentableType.model === 'post'
  const commentableIsFeedPost =
    comment.commentableType.appLabel === 'feed_posts' && comment.commentableType.model === 'feedpost'

  const { data: postResponse, isLoading: postIsLoading } = useSWR<ViewPostQuery>(() => {
    if (!commentableIsPost) return false
    return [viewPostQuery, { id: comment.commentableId }]
  })

  const { data: feedPostResponse, isLoading: feedPostIsLoading } = useSWR<ViewFeedPostQuery>(() => {
    if (!commentableIsFeedPost) return false
    return [viewFeedPostQuery, { id: comment.commentableId }]
  })

  if (postIsLoading || feedPostIsLoading) return <PostSkeleton backgroundColor="gray" />
  const commentable = postResponse?.openbookPostsPostByPk ?? feedPostResponse?.feedPostsFeedpostByPk

  const authorName = (comment.commenter.profile?.name ?? '') + ' ' + (comment.commenter.profile?.lastName ?? '')
  const authorAdminUrl = okunaAdminUrl(`openbook_auth/user/${comment.commenter.id}`)

  const Comment = (
    <Paper p="md">
      <Group align="start">
        <UserAvatar user={comment.commenter} />
        <Stack flex={1}>
          <Blockquote
            p="sm"
            cite={
              <Tooltip label={parseISO(comment.created).toLocaleString()}>
                <Text>
                  {authorName} •{' '}
                  {formatDistanceToNow(comment.created, {
                    addSuffix: true,
                  })}
                </Text>
              </Tooltip>
            }
          >
            <Text>{comment.text}</Text>
          </Blockquote>
          <Group>
            <Text size="sm" fw={600}>
              Open in Okuna Admin:
            </Text>
            <Button
              variant="light"
              leftSection={<IconMessageReply size={14} />}
              component="a"
              href={okunaAdminUrl(`comments/comment/${comment.id}`)}
              target="_blank"
            >
              Comment
            </Button>
            <Button
              variant="light"
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

  if (!withCommentable) return Comment

  return (
    <Grid>
      <Grid.Col span={12}>
        {!postIsLoading && commentableIsPost && <Post post={commentable} backgroundColor="gray" />}
        {!feedPostIsLoading && commentableIsFeedPost && <FeedPost feedPost={commentable} backgroundColor="gray" />}
      </Grid.Col>
      <Grid.Col span={1} />
      <Grid.Col span={11}>{Comment}</Grid.Col>
    </Grid>
  )
}

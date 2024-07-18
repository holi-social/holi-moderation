import { Badge, Stack, Tabs, rem } from '@mantine/core'
import { IconMessage, IconMessageReply, IconTopologyRing3 } from '@tabler/icons-react'
import React from 'react'

import { ReportedUserDetailsFragment } from '../../graphql/generated/types'
import { okunaAdminUrl } from '../../utils'
import { Comment } from '../comment'
import { Post } from '../post'

import { User } from '.'

export type ReportedUserDetailsProps = {
  user: ReportedUserDetailsFragment
}

export const ReportedUser: React.FC<ReportedUserDetailsProps> = ({ user }) => {
  const iconStyle = { width: rem(12), height: rem(12) }

  const additionalContent = (
    <Tabs defaultValue="posts">
      <Tabs.List>
        <Tabs.Tab
          value="posts"
          leftSection={<IconMessage style={iconStyle} />}
          rightSection={
            <Badge variant="light" color="gray">
              {user.postsAggregate.aggregate?.count}
            </Badge>
          }
        >
          Posts
        </Tabs.Tab>
        <Tabs.Tab
          value="comments"
          leftSection={<IconMessageReply style={iconStyle} />}
          rightSection={
            <Badge variant="light" color="gray">
              {user.commentsAggregate.aggregate?.count}
            </Badge>
          }
        >
          Comments
        </Tabs.Tab>
        <Tabs.Tab
          value="spaces"
          leftSection={<IconTopologyRing3 style={iconStyle} />}
          rightSection={
            <Badge variant="light" color="gray">
              {user.createdSpacesAggregate.aggregate?.count}
            </Badge>
          }
        >
          Spaces
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="posts" pt="md">
        {user.posts.length > 0 && (
          <Stack>
            {user.posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </Stack>
        )}
      </Tabs.Panel>

      <Tabs.Panel value="comments" pt="md">
        {user.comments.length > 0 && (
          <Stack>
            {user.comments.map((comment) => (
              <Comment key={comment.id} comment={comment} withCommentable={false} />
            ))}
          </Stack>
        )}
      </Tabs.Panel>

      <Tabs.Panel value="spaces" pt="md">
        <ul>
          {user.createdSpaces.map((space) => (
            <li>
              <a href={okunaAdminUrl(`openbook_communities/community/${space.id}`)} target="_blank">
                {space.name}
              </a>
            </li>
          ))}
        </ul>
      </Tabs.Panel>
    </Tabs>
  )

  return <User user={user} additionalContent={additionalContent} />
}

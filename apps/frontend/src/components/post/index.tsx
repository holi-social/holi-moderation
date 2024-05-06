import {
  Blockquote,
  Button,
  DefaultMantineColor,
  Group,
  Paper,
  Skeleton,
  Stack,
  Text,
  Tooltip,
} from "@mantine/core";
import { PostDetailsFragment } from "../../graphql/generated/types";
import React from "react";
import { okunaAdminUrl } from "../../utils";
import { formatDistanceToNow, parseISO } from "date-fns";
import { IconMessage, IconTopologyRing3, IconUser } from "@tabler/icons-react";
import { UserAvatar } from "../avatar";

type PostProps = {
  post: PostDetailsFragment;
  backgroundColor?: DefaultMantineColor;
};

type PostSkeletonProps = Omit<PostProps, "post">;

export const Post: React.FC<PostProps> = ({ post, backgroundColor }) => {
  const authorName =
    (post.author.profile?.name ?? "") +
    " " +
    (post.author.profile?.lastName ?? "");

  const authorAdminUrl = okunaAdminUrl(`openbook_auth/user/${post.author.id}`);

  return (
    <Paper p="md">
      <Group align="start">
        <UserAvatar user={post.author} />
        <Stack flex={1}>
          <Blockquote
            color={backgroundColor ?? "blue"}
            p="sm"
            cite={
              <Tooltip label={parseISO(post.created).toLocaleString()}>
                <Text>
                  {authorName} •{" "}
                  {formatDistanceToNow(post.created, { addSuffix: true })}
                  {post.space && ` in space "${post.space.title}"`}
                </Text>
              </Tooltip>
            }
          >
            <Text fw={700}>{post.title}</Text>
            <Text>{post.text}</Text>
          </Blockquote>
          <Group>
            <Text size="sm" fw={600}>
              Open in Okuna Admin:
            </Text>
            <Button
              variant="light"
              color={backgroundColor ?? "blue"}
              leftSection={<IconMessage size={14} />}
              component="a"
              href={okunaAdminUrl(`openbook_posts/post/${post.id}`)}
              target="_blank"
            >
              Post
            </Button>
            <Button
              variant="light"
              color={backgroundColor ?? "blue"}
              leftSection={<IconUser size={14} />}
              component="a"
              href={authorAdminUrl}
              target="_blank"
            >
              User
            </Button>
            {post.space && (
              <Button
                variant="light"
                color={backgroundColor ?? "blue"}
                leftSection={<IconTopologyRing3 size={14} />}
                component="a"
                href={okunaAdminUrl(
                  `openbook_communities/community/${post.space.id}`,
                )}
                target="_blank"
              >
                Space
              </Button>
            )}
          </Group>
        </Stack>
      </Group>
    </Paper>
  );
};

export const PostSkeleton: React.FC<PostSkeletonProps> = ({
  backgroundColor,
}) => (
  <Paper p="md">
    <Group align="start">
      <Skeleton circle height={50} />
      <Stack flex={1}>
        <Blockquote
          color={backgroundColor ?? "blue"}
          p="sm"
          cite={<Skeleton height={8} width="25%" />}
        >
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
);

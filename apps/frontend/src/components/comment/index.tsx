import React from "react";
import {
  CommentDetailsFragment,
  ViewPostQuery as ViewPostQueryResponse,
} from "../../graphql/generated/types";
import useSWR from "swr";
import { fetcher } from "../../fetcher";
import { Post, PostSkeleton } from "../post";
import {
  Blockquote,
  Button,
  Grid,
  Group,
  Paper,
  Stack,
  Text,
  Tooltip,
} from "@mantine/core";
import { okunaAdminUrl } from "../../utils";
import { formatDistanceToNow, parseISO } from "date-fns";
import { IconMessageReply, IconUser } from "@tabler/icons-react";
import { UserAvatar } from "../avatar";
import { ViewPostQuery } from "../../graphql/queries/viewPost";

type CommentProps = {
  comment: CommentDetailsFragment;
  withCommentable?: boolean;
};

export const Comment: React.FC<CommentProps> = ({
  comment,
  withCommentable = true,
}) => {
  const commentableIsPost =
    comment.commentableType.appLabel === "openbook_posts" &&
    comment.commentableType.model === "post";

  const { data: postResponse, isLoading: postIsLoading } =
    useSWR<ViewPostQueryResponse>(() => {
      if (!commentableIsPost) return false;
      return [ViewPostQuery, { id: comment.commentableId }];
    }, fetcher);

  const post = postResponse?.openbookPostsPostByPk;

  const authorName =
    (comment.commenter.profile?.name ?? "") +
    " " +
    (comment.commenter.profile?.lastName ?? "");

  const authorAdminUrl = okunaAdminUrl(
    `openbook_auth/user/${comment.commenter.id}`,
  );

  const commentOnly = (
    <Paper p="md">
      <Group align="start">
        <UserAvatar user={comment.commenter} />
        <Stack flex={1}>
          <Blockquote
            p="sm"
            cite={
              <Tooltip label={parseISO(comment.created).toLocaleString()}>
                <Text>
                  {authorName} •{" "}
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
  );

  if (!withCommentable) return commentOnly;

  return (
    <Grid>
      <Grid.Col span={12}>
        {!postIsLoading && post ? (
          <Post post={post} backgroundColor="gray" />
        ) : (
          <PostSkeleton backgroundColor="gray" />
        )}
      </Grid.Col>
      <Grid.Col span={1} />
      <Grid.Col span={11}>{commentOnly}</Grid.Col>
    </Grid>
  );
};

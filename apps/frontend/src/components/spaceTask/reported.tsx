import React from "react";
import { OpenbookCommunitiesTask } from "../../graphql/generated/schema.types";
import { SpaceTask } from ".";
import { ReportedSpaceTaskDetailsFragment } from "../../graphql/generated/types";
import { Button, Grid, Group, Stack, Text } from "@mantine/core";
import { Space } from "../space";
import {
  IconListCheck,
  IconTopologyRing3,
  IconUser,
} from "@tabler/icons-react";
import { okunaAdminUrl } from "../../utils";

type ReportedSpaceTaskProps = {
  task: ReportedSpaceTaskDetailsFragment | OpenbookCommunitiesTask;
};

export const ReportedSpaceTask: React.FC<ReportedSpaceTaskProps> = ({
  task,
}) => {
  return (
    <Grid>
      <Grid.Col span={9}>
        <Stack>
          <SpaceTask task={task} />
          <Group>
            <Text size="sm" fw={600}>
              Open in Okuna Admin:
            </Text>
            <Button
              variant="light"
              leftSection={<IconListCheck size={14} />}
              component="a"
              href={okunaAdminUrl(`openbook_communities/task/${task.id}`)}
              target="_blank"
            >
              Task
            </Button>
            <Button
              variant="light"
              leftSection={<IconTopologyRing3 size={14} />}
              component="a"
              href={okunaAdminUrl(
                `openbook_communities/community/${task.space.id}`,
              )}
              target="_blank"
            >
              Space
            </Button>
            <Button
              variant="light"
              leftSection={<IconUser size={14} />}
              component="a"
              href={okunaAdminUrl(`openbook_auth/user/${task.creator!.id}`)}
              target="_blank"
            >
              Creator
            </Button>
          </Group>
        </Stack>
      </Grid.Col>
      <Grid.Col span={3}>
        <Space space={task.space} />
      </Grid.Col>
    </Grid>
  );
};

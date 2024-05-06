import React from "react";
import { OpenbookCommunitiesCollaborationtool } from "../../graphql/generated/schema.types";
import { SpaceLinkhubToolDetailsFragment } from "../../graphql/generated/types";
import {
  ActionIcon,
  Avatar,
  Card,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  formatUser,
  getInitials,
  relativeFormatISOTimestamp,
  titleCase,
} from "../../utils";
import {
  IconCategory,
  IconClockPlus,
  IconExternalLink,
  IconLink,
  IconUser,
} from "@tabler/icons-react";

type SpaceLinkhubToolProps = {
  tool: SpaceLinkhubToolDetailsFragment | OpenbookCommunitiesCollaborationtool;
};

export const SpaceLinkhubTool: React.FC<SpaceLinkhubToolProps> = ({ tool }) => {
  return (
    <Card shadow="xs" padding="lg" radius="md" withBorder>
      <Card.Section p="md" withBorder>
        <Group justify="space-between">
          <Group>
            {tool.thumbnail && (
              <Avatar radius="sm" src={tool.thumbnail} size="md">
                {getInitials(tool.title)}
              </Avatar>
            )}
            <Stack gap={0}>
              <Title order={5}>{tool.title}</Title>
              <Text>{tool.description}</Text>
            </Stack>
          </Group>
          <ActionIcon
            variant="transparent"
            color="gray"
            component="a"
            href={tool.url}
            target="_blank"
          >
            <IconExternalLink />
          </ActionIcon>
        </Group>
      </Card.Section>
      <Card.Section p="md" c="dimmed">
        <Stack gap="xs">
          <Group gap="xs">
            <IconCategory size={14} />
            <Text size="sm">{titleCase(tool.collectionType)}</Text>
          </Group>
          <Group gap="xs">
            <IconLink size={14} />
            <Text size="sm">{tool.url}</Text>
          </Group>
          <Group gap="xs">
            <IconClockPlus size={14} />
            <Text size="sm">
              created {relativeFormatISOTimestamp(tool.createdAt)}
            </Text>
          </Group>
          <Group gap="xs">
            <IconUser size={14} />
            <Text size="sm">by {formatUser(tool.creator!)}</Text>
          </Group>
        </Stack>
      </Card.Section>
    </Card>
  );
};

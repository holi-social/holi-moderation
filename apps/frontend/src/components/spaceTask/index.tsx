import React from "react";
import { OpenbookCommunitiesTask } from "../../graphql/generated/schema.types";
import { SpaceTaskDetailsFragment } from "../../graphql/generated/types";
import { Badge, Card, Group, Stack, Text, Title } from "@mantine/core";
import {
  IconAccessible,
  IconClockPlus,
  IconLocationQuestion,
  IconLock,
  IconMail,
  IconMapPin,
  IconPhone,
  IconRepeat,
  IconUser,
  IconUserPlus,
  IconWorld,
} from "@tabler/icons-react";
import { formatUser, relativeFormatISOTimestamp, titleCase } from "../../utils";
import { ImageWithPreview } from "../imageWithPreview";

type SpaceTaskProps = {
  task: SpaceTaskDetailsFragment | OpenbookCommunitiesTask;
};

export const SpaceTask: React.FC<SpaceTaskProps> = ({ task }) => {
  const visibility =
    task.visibility === "PUBLIC"
      ? {
          icon: IconWorld,
          text: "Public",
        }
      : {
          icon: IconLock,
          text: "Members only",
        };

  return (
    <Card shadow="xs" padding="lg" radius="md" withBorder>
      {task.thumbnail && (
        <Card.Section>
          <ImageWithPreview src={task.thumbnail} height={120} />
        </Card.Section>
      )}

      <Card.Section p="md" withBorder>
        <Stack gap={0}>
          <Title order={4}>{task.name}</Title>
          <Text>{task.description}</Text>
        </Stack>
      </Card.Section>

      <Card.Section p="md" withBorder>
        <Stack gap="xs">
          <Group gap="xs">
            <IconLocationQuestion size={14} />
            <Text size="sm">{titleCase(task.locationType)}</Text>
          </Group>
          <Group gap="xs">
            <IconMapPin size={14} />
            <Text size="sm">{task.location}</Text>
          </Group>
          <Group gap="xs">
            <visibility.icon size={14} />
            <Text size="sm">{visibility.text}</Text>
          </Group>
          <Group gap="xs">
            <IconRepeat size={14} />
            <Text size="sm">{titleCase(task.regularity)}</Text>
          </Group>
          <Group gap="xs">
            <IconUserPlus size={14} />
            <Text size="sm">
              {task.slotsTaken} of {task.slotsAvailable} slots taken
            </Text>
          </Group>
          <Group gap="xs">
            <IconAccessible size={14} />
            {task.skills.map((skill) => (
              <Badge color="gray" variant="light" key={skill.skill.id}>
                {skill.skill.title}
              </Badge>
            ))}
          </Group>
        </Stack>
      </Card.Section>

      <Card.Section p="md" withBorder>
        <Stack gap="xs">
          <Group gap="xs">
            <IconMail size={14} />
            <Text size="sm">{task.contactEmail}</Text>
          </Group>
          {task.contactPhone && (
            <Group gap="xs">
              <IconPhone size={14} />
              <Text size="sm">{task.contactPhone}</Text>
            </Group>
          )}
        </Stack>
      </Card.Section>

      <Card.Section p="md" withBorder>
        <Stack c="dimmed" gap="xs">
          <Group gap="xs">
            <IconClockPlus size={14} />
            <Text size="sm">
              created {relativeFormatISOTimestamp(task.created)}
            </Text>
          </Group>
          <Group gap="xs">
            <IconUser size={14} />
            <Text size="sm">by {formatUser(task.creator!)}</Text>
          </Group>
        </Stack>
      </Card.Section>
    </Card>
  );
};

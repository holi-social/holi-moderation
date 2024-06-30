import React from "react";
import { Text, Timeline } from "@mantine/core";
import { IconStatusChange } from "@tabler/icons-react";

import { relativeFormatISOTimestamp, titleCase } from "../../../utils";
import { TimelineItemProps } from "..";

export const StatusChangedTimelineItem: React.FC<TimelineItemProps> = ({
  event,
}) => {
  const payload = event.eventPayload as unknown as {
    oldStatus: string;
    newStatus: string;
  };

  return (
    <Timeline.Item
      title={`Status changed: ${titleCase(payload.oldStatus)} → ${titleCase(payload.newStatus)}`}
      bullet={<IconStatusChange size={12} />}
    >
      <Text c="dimmed">{event.actor?.email}</Text>
      <Text c="dimmed">{relativeFormatISOTimestamp(event.occurredAt)}</Text>
    </Timeline.Item>
  );
};

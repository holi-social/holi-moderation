import React from "react";
import { Text, Timeline } from "@mantine/core";
import { IconFlag } from "@tabler/icons-react";

import { relativeFormatISOTimestamp } from "../../../utils";
import { TimelineItemProps } from "..";

export const ReportCreatedTimelineItem: React.FC<TimelineItemProps> = ({
  event,
}) => {
  return (
    <Timeline.Item title="Report created" bullet={<IconFlag size={12} />}>
      <Text c="dimmed">{relativeFormatISOTimestamp(event.occurredAt)}</Text>
    </Timeline.Item>
  );
};

import React from "react";
import { ReportEventDetailsFragment } from "../../graphql/generated/types";
import { Text, Timeline } from "@mantine/core";
import { IconStatusChange } from "@tabler/icons-react";
import { relativeFormatISOTimestamp, titleCase } from "../../utils";
import { ReportEvent } from "../../graphql/generated/schema.types";

type TimelineItemProps = {
  event: ReportEventDetailsFragment | ReportEvent;
};

export const StatusChangedTimelineItem: React.FC<TimelineItemProps> = ({
  event,
}) => {
  const payload = event.eventPayload as unknown as {
    oldStatus: string;
    newStatus: string;
  };

  return (
    <Timeline.Item
      title="Status changed"
      bullet={<IconStatusChange size={12} />}
    >
      <Text c="dimmed">
        {titleCase(payload.oldStatus)} → {titleCase(payload.newStatus)}
      </Text>
      <Text c="dimmed">{relativeFormatISOTimestamp(event.occurredAt)}</Text>
    </Timeline.Item>
  );
};

type ReportTimelineProps = {
  events: ReportEventDetailsFragment[] | ReportEvent[];
};

const EVENT_TIMELINE_COMPONENTS = {
  STATUS_CHANGED: StatusChangedTimelineItem,
};

export const ReportTimeline: React.FC<ReportTimelineProps> = ({ events }) => {
  return (
    <Timeline>
      {events.map((event) => {
        const TimelineItem = EVENT_TIMELINE_COMPONENTS[event.eventName];
        return <TimelineItem event={event} key={event.id} />;
      })}
    </Timeline>
  );
};

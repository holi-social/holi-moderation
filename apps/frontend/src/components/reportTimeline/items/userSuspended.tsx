import { Text, Timeline } from "@mantine/core";
import { IconStatusChange } from "@tabler/icons-react";
import { TimelineItemProps } from "..";
import { relativeFormatISOTimestamp } from "../../../utils";
import {
  formatDuration,
  intervalToDuration,
  minutesToMilliseconds,
} from "date-fns";

export const UserSuspendedTimelineItem: React.FC<TimelineItemProps> = ({
  event,
}) => {
  const payload = event.eventPayload as unknown as {
    userEmail: string;
    duration?: number;
  };

  const formatMinutesAsDuration = (minutes: number) =>
    formatDuration(
      intervalToDuration({
        start: 0,
        end: minutesToMilliseconds(minutes),
      }),
    );

  const durationString = payload.duration
    ? `for ${formatMinutesAsDuration(payload.duration)}`
    : "indefinitely";

  return (
    <Timeline.Item
      title={`User suspended ${durationString}: "${payload.userEmail}"`}
      bullet={<IconStatusChange size={12} />}
    >
      <Text c="dimmed">{event.actor?.email}</Text>
      <Text c="dimmed">{relativeFormatISOTimestamp(event.occurredAt)}</Text>
    </Timeline.Item>
  );
};

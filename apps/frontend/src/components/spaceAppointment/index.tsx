import React from "react";
import { SpaceAppointmentDetailsFragment } from "../../graphql/generated/types";
import { Card, Group, Stack, Text, Title } from "@mantine/core";
import {
  IconCalendar,
  IconClock,
  IconLock,
  IconMapPin,
  IconPencil,
  IconTrash,
  IconWorld,
} from "@tabler/icons-react";
import {
  localFormatISOTimestamp,
  okunaAdminUrl,
  relativeFormatISOTimestamp,
} from "../../utils";
import { OpenbookAppointmentsAppointment } from "../../graphql/generated/schema.types";
import { ImageWithPreview } from "../imageWithPreview";

type SpaceAppointmentProps = {
  appointment:
    | SpaceAppointmentDetailsFragment
    | OpenbookAppointmentsAppointment;
};

export const SpaceAppointment: React.FC<SpaceAppointmentProps> = ({
  appointment,
}) => {
  const adminUrl = okunaAdminUrl(
    `openbook_appointments/appointment/${appointment.id}`,
  );
  const visibility = appointment.inviteOnly ? (
    <Group gap="xs">
      <IconLock size={12} />
      <Text c="dimmed">Members only</Text>
    </Group>
  ) : (
    <Group gap="xs">
      <IconWorld size={12} />
      <Text c="dimmed">Public</Text>
    </Group>
  );

  return (
    <Card shadow="xs" padding="lg" radius="md" withBorder>
      {appointment.thumbnail && (
        <Card.Section>
          <ImageWithPreview src={appointment.thumbnail} height={120} />
        </Card.Section>
      )}
      <Card.Section p="md" withBorder>
        <Stack gap={0}>
          <Text
            size="md"
            fw="700"
            lh={1.5}
            mb="xs"
            style={
              appointment.isDeleted ? { textDecoration: "line-through" } : {}
            }
            component="a"
            href={adminUrl}
            target="_blank"
          >
            {appointment.title}
          </Text>
          {visibility}
          <Group gap="xs">
            <IconCalendar size={12} />
            <Text c="dimmed">
              {localFormatISOTimestamp(appointment.startDateTime)} —{" "}
              {localFormatISOTimestamp(appointment.endDateTime)}
            </Text>
          </Group>
          {appointment.locationDetails && (
            <Group gap="xs">
              <IconMapPin size={12} />
              <Text c="dimmed">
                {appointment.locationDetails.completeAddress}
              </Text>
            </Group>
          )}
        </Stack>
      </Card.Section>

      {(appointment.description || appointment.videoCallLink) && (
        <Card.Section p="md" withBorder>
          <Stack>
            {appointment.description && (
              <Stack gap={0}>
                <Title order={5}>Description</Title>
                <Text>{appointment.description}</Text>
              </Stack>
            )}

            {appointment.videoCallLink && (
              <Stack gap={0}>
                <Title order={5}>Video Call</Title>
                <Text>{appointment.videoCallLink?.url}</Text>
                {appointment.videoCallLink.additionalInfo && (
                  <Text>{appointment.videoCallLink.additionalInfo}</Text>
                )}
              </Stack>
            )}
          </Stack>
        </Card.Section>
      )}

      <Card.Section p="md" withBorder>
        <Stack gap={0} c="dimmed">
          <Group gap="xs">
            <IconClock size={12} />
            <Text size="sm">
              created {relativeFormatISOTimestamp(appointment.created)} by{" "}
              {appointment.creator?.profile?.name ?? ""}{" "}
              {appointment.creator?.profile?.lastName ?? ""}
            </Text>
          </Group>
          {appointment.modified &&
            appointment.modified !== appointment.created && (
              <Group gap="xs">
                <IconPencil size={12} />
                <Text size="sm">
                  edited {relativeFormatISOTimestamp(appointment.modified)}
                </Text>
              </Group>
            )}
          {appointment.isDeleted && appointment.deletedAt && (
            <Group gap="xs">
              <IconTrash size={12} />
              <Text size="sm">
                deleted {relativeFormatISOTimestamp(appointment.deletedAt)}
              </Text>
            </Group>
          )}
        </Stack>
      </Card.Section>
    </Card>
  );
};

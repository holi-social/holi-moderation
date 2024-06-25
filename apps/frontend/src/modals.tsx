import { Group, Text } from "@mantine/core";
import { modals } from "@mantine/modals";
import { UserAvatar } from "./components/avatar";
import {
  SuspendUserModal,
  SuspendUserModalProps,
} from "./components/user/suspensionModal";

export enum Modals {
  SuspendUser = "suspendUser",
}

export const showSuspendUser = (props: SuspendUserModalProps) =>
  modals.openContextModal({
    modal: Modals.SuspendUser,
    innerProps: props,
    title: (
      <Group>
        <UserAvatar user={props.user} />
        <Text fw={600}>Suspend {props.user.email}</Text>
      </Group>
    ),
    size: "xl",
  });

export const AVAILABLE_MODALS = {
  [Modals.SuspendUser]: SuspendUserModal,
};

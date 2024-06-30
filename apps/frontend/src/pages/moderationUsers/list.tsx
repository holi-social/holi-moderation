import {
  ActionIcon,
  Badge,
  Button,
  Group,
  Loader,
  Stack,
  Table,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";
import React from "react";
import useSWR from "swr";
import { IconPlus, IconShieldLock, IconTrash } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
import { modals } from "@mantine/modals";
import { useDisclosure } from "@mantine/hooks";

import { ListModerationUsersQuery } from "../../graphql/queries/listModerationUsers";
import {
  ChangeModerationUserRoleMutation as ChangeModerationUserRoleMutationResponse,
  ChangeModerationUserRoleMutationVariables,
  DeleteModerationUserMutation as DeleteModerationUserMutationResponse,
  DeleteModerationUserMutationVariables,
  ListModeratorsQuery as ListModeratorsQueryResponse,
} from "../../graphql/generated/types";
import {
  localFormatISOTimestamp,
  relativeFormatISOTimestamp,
  titleCase,
} from "../../utils";
import { UserRole } from "../../graphql/generated/schema.types";
import { gqlClient } from "../../fetcher";
import { ChangeModerationUserRoleMutation } from "../../graphql/mutations/changeModerationUserRole";
import { DeleteModerationUserMutation } from "../../graphql/mutations/deleteModerationUser";
import { useAuthState } from "../../state";

import { CreateModerationUser } from "./create";

export const ListUsers: React.FC = () => {
  const currentUserId = useAuthState(
    (state) => state.loggedIn && state.user.id,
  );

  const { data, isLoading, mutate } = useSWR<ListModeratorsQueryResponse>([
    ListModerationUsersQuery,
  ]);

  const iconStyle = { size: "70%", stroke: 1.5 };
  const users = data?.users;

  const deleteUser = async (userId: string) => {
    const runDelete = async () => {
      const response = await gqlClient().request<
        DeleteModerationUserMutationResponse,
        DeleteModerationUserMutationVariables
      >(DeleteModerationUserMutation, { userId });

      if (!response?.deleteUser?.success) {
        notifications.show({
          message: "User deletion failed",
          color: "red",
          withBorder: true,
        });
        return;
      }

      const newData = {
        ...data,
        users: users!.filter((user) => user.id !== userId),
      };

      mutate(newData);
      notifications.show({
        message: "User deleted",
        color: "green",
        withBorder: true,
      });
    };

    modals.openConfirmModal({
      title: <Text fw={700}>Delete moderation user?</Text>,
      centered: true,
      labels: { confirm: "Delete user", cancel: "Cancel" },
      confirmProps: { color: "red" },
      onConfirm: runDelete,
      withCloseButton: false,
    });
  };

  const changeRole = async (userId: string, newRole: UserRole) => {
    const response = await gqlClient().request<
      ChangeModerationUserRoleMutationResponse,
      ChangeModerationUserRoleMutationVariables
    >(ChangeModerationUserRoleMutation, { userId, newRole });

    if (!response?.changeRole?.id) {
      notifications.show({
        message: "Role change failed",
        color: "red",
        withBorder: true,
      });
      return;
    }

    const user = users!.find((user) => user.id === userId);
    user!.role = newRole;

    mutate({
      ...data,
      users: [...users!.filter((user) => user.id !== userId), user!],
    });
    notifications.show({
      message: "Role changed!",
      color: "green",
      withBorder: true,
    });
  };

  const [createUserOpened, { open: openCreateUser, close: closeCreateUser }] =
    useDisclosure(false);

  return (
    <Stack>
      <Title>Users</Title>
      {isLoading && <Loader />}
      {users && (
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Email</Table.Th>
              <Table.Th>Role</Table.Th>
              <Table.Th>Created at</Table.Th>
              <Table.Th>Updated at</Table.Th>
              <Table.Th>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {users.map((user) => (
              <Table.Tr key={user.id}>
                <Table.Td fw={600}>
                  {user.email} {user.id === currentUserId && <Badge>You</Badge>}
                </Table.Td>
                <Table.Td>{titleCase(user.role)}</Table.Td>
                <Table.Td>
                  {localFormatISOTimestamp(user.createdAt)} (
                  {relativeFormatISOTimestamp(user.createdAt)})
                </Table.Td>
                <Table.Td>
                  {user.updatedAt !== user.createdAt
                    ? `${localFormatISOTimestamp(user.updatedAt)} (${relativeFormatISOTimestamp(user.updatedAt)})`
                    : "—"}
                </Table.Td>
                <Table.Td>
                  <Group>
                    {user.id !== currentUserId && (
                      <>
                        {user.role === "ADMIN" ? (
                          <Tooltip label="Demote to moderator">
                            <ActionIcon
                              onClick={async () =>
                                await changeRole(user.id, "MODERATOR")
                              }
                            >
                              <IconShieldLock {...iconStyle} />
                            </ActionIcon>
                          </Tooltip>
                        ) : (
                          <Tooltip label="Promote to admin">
                            <ActionIcon
                              onClick={async () =>
                                await changeRole(user.id, "ADMIN")
                              }
                            >
                              <IconShieldLock {...iconStyle} />
                            </ActionIcon>
                          </Tooltip>
                        )}
                        <Tooltip label="Delete user">
                          <ActionIcon
                            color="red"
                            onClick={async () => await deleteUser(user.id)}
                          >
                            <IconTrash {...iconStyle} />
                          </ActionIcon>
                        </Tooltip>
                      </>
                    )}
                  </Group>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      )}

      <CreateModerationUser
        opened={createUserOpened}
        onClose={closeCreateUser}
      />
      <Group>
        <Button leftSection={<IconPlus />} onClick={openCreateUser}>
          Add user
        </Button>
      </Group>
    </Stack>
  );
};

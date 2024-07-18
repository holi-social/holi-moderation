import {
  Button,
  Group,
  LoadingOverlay,
  Modal,
  ModalProps,
  PasswordInput,
  SegmentedControl,
  Stack,
  Text,
  TextInput,
} from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form'
import { IconUserPlus } from '@tabler/icons-react'
import React, { useState } from 'react'
import { z } from 'zod'
import { notifications } from '@mantine/notifications'
import { useSWRConfig } from 'swr'

import { UserRole } from '../../graphql/generated/schema.types'
import { gqlClient } from '../../fetcher'
import {
  CreateModerationUserMutation as CreateModerationUserMutationResponse,
  CreateModerationUserMutationVariables,
} from '../../graphql/generated/types'
import { CreateModerationUserMutation } from '../../graphql/mutations/createModerationUser'
import { ListModerationUsersQuery } from '../../graphql/queries/listModerationUsers'

interface CreateModerationUserProps extends ModalProps {}

export const CreateModerationUser: React.FC<CreateModerationUserProps> = (props) => {
  const formSchema = z
    .object({
      email: z.string().email(),
      password: z.string().min(12, { message: 'Password must be at least 12 characters long.' }),
      confirmPassword: z.string(),
      role: z.enum(['ADMIN', 'MODERATOR']),
    })
    .refine((values) => values.password === values.confirmPassword, {
      message: "Passwords don't match",
      path: ['confirmPassword'],
    })

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      role: 'MODERATOR' as UserRole,
    },
    validate: zodResolver(formSchema),
  })

  const [isLoading, setLoading] = useState<boolean>(false)
  const { mutate } = useSWRConfig()

  type FormValues = z.infer<typeof formSchema>
  const createUser = async ({ email, password, role }: FormValues) => {
    setLoading(true)

    const response = await gqlClient().request<
      CreateModerationUserMutationResponse,
      CreateModerationUserMutationVariables
    >(CreateModerationUserMutation, { user: { email, password, role } })

    if (!response?.registerUser?.id) {
      notifications.show({
        message: 'User creation failed',
        color: 'red',
        withBorder: true,
      })

      setLoading(false)
    }

    notifications.show({
      message: 'User created!',
      color: 'green',
      withBorder: true,
    })

    mutate([ListModerationUsersQuery])
    form.reset()
    setLoading(false)
    props.onClose()
  }

  return (
    <Modal size="lg" title={<Text fw={600}>Create Moderation User</Text>} {...props}>
      <form style={{ position: 'relative' }} onSubmit={form.onSubmit((values) => createUser(values))}>
        <LoadingOverlay visible={isLoading} />

        <Stack gap="md">
          <TextInput
            label="Email"
            placeholder="moderator@holi.social"
            required
            key={form.key('email')}
            {...form.getInputProps('email')}
          />
          <Group grow>
            <PasswordInput
              label="Password"
              placeholder="Password"
              required
              key={form.key('password')}
              {...form.getInputProps('password')}
            />
            <PasswordInput
              label="Confirm Password"
              placeholder="Password"
              required
              key={form.key('confirmPassword')}
              {...form.getInputProps('confirmPassword')}
            />
          </Group>
          <Stack gap={0}>
            <Text size="sm" fw={500}>
              Role
            </Text>
            <SegmentedControl
              data={[
                {
                  label: 'Moderator',
                  value: 'MODERATOR',
                },
                {
                  label: 'Admin',
                  value: 'ADMIN',
                },
              ]}
            />
          </Stack>
          <Button leftSection={<IconUserPlus />} type="submit">
            Create User
          </Button>
        </Stack>
      </form>
    </Modal>
  )
}

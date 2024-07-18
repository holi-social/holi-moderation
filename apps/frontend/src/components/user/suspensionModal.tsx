import React, { useState } from 'react'
import { ContextModalProps } from '@mantine/modals'
import { Button, Code, InputLabel, Stack, Switch, TextInput } from '@mantine/core'
import DurationParser, { DurationValidator } from 'js-duration-parser'
import { useForm } from '@mantine/form'
import { notifications } from '@mantine/notifications'
import { useSWRConfig } from 'swr'

import { gqlClient } from '../../fetcher'
import { SuspendUserMutation } from '../../graphql/mutations/suspendUser'
import {
  SuspendUserMutation as SuspendUserMutationResponse,
  SuspendUserMutationVariables,
  UserDetailsFragment,
} from '../../graphql/generated/types'
import { OpenbookAuthUser } from '../../graphql/generated/schema.types'
import { ViewReportQuery } from '../../graphql/queries/viewReport'

const durationParser = new DurationParser()
const durationValidator = new DurationValidator()

export type SuspendUserModalProps = {
  reportId: string
  user: UserDetailsFragment | OpenbookAuthUser
}

export const SuspendUserModal: React.FC<ContextModalProps<SuspendUserModalProps>> = ({
  context,
  id,
  innerProps: { user, reportId },
}) => {
  const [isIndefinite, setIndefinite] = useState<boolean>(false)
  const { mutate } = useSWRConfig()

  const form = useForm({
    mode: 'uncontrolled',
    validateInputOnChange: true,

    validate: {
      duration: (value) =>
        value !== '' && !durationValidator.validate(value) ? 'Input must be a valid duration' : null,
    },

    initialValues: {
      duration: '',
    },

    transformValues: (values) => ({
      duration: durationParser.parse(values.duration), // gives the duration in minutes
    }),
  })

  const suspendUser = async (duration?: number) => {
    const response = await gqlClient().request<SuspendUserMutationResponse, SuspendUserMutationVariables>(
      SuspendUserMutation,
      {
        reportId,
        email: user.email,
        duration: isIndefinite ? undefined : duration,
      },
    )

    if (response.suspendUser.success) {
      notifications.show({
        message: 'User suspended successfully',
        color: 'green',
        withBorder: true,
      })
    } else {
      notifications.show({
        message: 'Suspending user failed',
        color: 'red',
        withBorder: true,
      })
    }

    mutate([ViewReportQuery, { id: reportId }])
  }

  return (
    <form
      onSubmit={form.onSubmit(async (values) => {
        suspendUser(values.duration ?? undefined)
        context.closeModal(id)
      })}
    >
      <Stack>
        <Stack>
          <TextInput
            label="Duration"
            description={
              <InputLabel>
                How long do you want to suspend this user? Enter a duration like: <Code>30m</Code> (30 minutes),{' '}
                <Code>30d</Code> (30 days), <Code>4w</Code> (4 weeks) etc.
              </InputLabel>
            }
            required
            disabled={isIndefinite}
            {...form.getInputProps('duration')}
          />
          <Switch label="indefinitely" checked={isIndefinite} onChange={() => setIndefinite((current) => !current)} />
        </Stack>

        <Button color="red" type="submit">
          Suspend User
        </Button>
      </Stack>
    </form>
  )
}

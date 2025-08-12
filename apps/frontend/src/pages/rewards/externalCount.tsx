import { Button, Card, LoadingOverlay, NumberInput, Stack, Table, Text, Title } from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form'
import type React from 'react'
import { useState } from 'react'
import useSWR from 'swr'
import { z } from 'zod'
import { notifications } from '@mantine/notifications'
import { IconCheck } from '@tabler/icons-react'

import { gqlClient } from '../../fetcher'
import { UpdateExternalGoodDeedsCountMutation } from '../../graphql/mutations/rewards/updateGoodDeedsCounter'
import type {
  UpdateExternalGoodDeedsCountMutation as UpdateExternalGoodDeedsCountMutationResponse,
  UpdateExternalGoodDeedsCountMutationVariables,
  ListExternalGoodDeedsCountsQuery as ListExternalGoodDeedsCountsQueryResponse,
} from '../../graphql/generated/types'
import { ListExternalGoodDeedsCountsQuery } from '../../graphql/queries/rewards/listExternalGoodDeedsCounts'
import { localFormatISOTimestamp } from '../../utils'

export const ExternalCount: React.FC = () => {
  const formSchema = z.object({
    count: z.number().int(),
  })

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      count: 1,
    },
    validate: zodResolver(formSchema),
  })

  const [isLoading, setLoading] = useState<boolean>(false)
  const {
    data,
    isLoading: listIsLoading,
    mutate,
  } = useSWR<ListExternalGoodDeedsCountsQueryResponse>([ListExternalGoodDeedsCountsQuery])

  type FormValues = z.infer<typeof formSchema>
  const updateCount = async ({ count }: FormValues) => {
    setLoading(true)

    await gqlClient().request<
      UpdateExternalGoodDeedsCountMutationResponse,
      UpdateExternalGoodDeedsCountMutationVariables
    >(UpdateExternalGoodDeedsCountMutation, {
      count,
    })

    notifications.show({
      message: 'Count updated!',
      color: 'green',
      withBorder: true,
    })

    form.reset()
    await mutate()
    setLoading(false)
  }

  return (
    <Stack>
      <Title>External Good Deeds Count</Title>
      <Card withBorder shadow="sm" radius="md">
        <Card.Section withBorder inheritPadding py="xs">
          <Text fw={500}>Update Count</Text>
        </Card.Section>

        <form onSubmit={form.onSubmit((values) => updateCount(values))}>
          <LoadingOverlay visible={isLoading} />
          <Stack gap="md" mt="sm">
            <NumberInput
              label="Count"
              required
              allowDecimal={false}
              key={form.key('count')}
              {...form.getInputProps('count')}
            />
            <Button leftSection={<IconCheck />} type="submit" color="green">
              Save
            </Button>
          </Stack>
        </form>
      </Card>

      <Table>
        <LoadingOverlay visible={listIsLoading} />
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Timestamp</Table.Th>
            <Table.Th>Count</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data?.rewards?.externalCounterValue?.map((entry) => (
            <Table.Tr key={entry.createdAt}>
              <Table.Td>{localFormatISOTimestamp(entry.createdAt)}</Table.Td>
              <Table.Td>{entry.externalCount}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Stack>
  )
}

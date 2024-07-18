import { randomUUID } from 'crypto'

import { CloudEvent } from 'cloudevents'

import { handleUserSuspended } from './handlers/userSuspended'
import { handleUserSuspensionExpired } from './handlers/userSuspensionExpired'
import { UserSuspendedEvent, UserSuspensionExpiredEvent } from './types'

import { handleEvent } from '.'

jest.mock('./handlers/userSuspended')
jest.mock('./handlers/userSuspensionExpired')

const mockHandleUserSuspended = jest.mocked(handleUserSuspended)
const mockHandleUserSuspensionExpired = jest.mocked(handleUserSuspensionExpired)

describe('Cloud Function handler', () => {
  it('calls right handler for UserSuspended', async () => {
    mockHandleUserSuspended.mockImplementation(async () => {})

    const cloudEvent = new CloudEvent<UserSuspendedEvent>({
      type: 'google.cloud.pubsub.topic.v1.messagePublished',
      source: randomUUID(),
      data: {
        attributes: {
          eventType: 'UserSuspended',
          eventVersion: 1,
        },
        message: {
          messageId: randomUUID(),
          publishTime: new Date().toISOString(),
        },
        data: {
          email: 'test@holi.social',
        },
        subscription: randomUUID(),
      },
    })

    await handleEvent(cloudEvent)

    expect(mockHandleUserSuspended).toHaveBeenCalledWith(cloudEvent.data?.data)
  })

  it('calls right handler for UserSuspensionExpired', async () => {
    mockHandleUserSuspensionExpired.mockImplementation(async () => {})

    const cloudEvent = new CloudEvent<UserSuspensionExpiredEvent>({
      type: 'google.cloud.pubsub.topic.v1.messagePublished',
      source: randomUUID(),
      data: {
        attributes: {
          eventType: 'UserSuspensionExpired',
          eventVersion: 1,
        },
        message: {
          messageId: randomUUID(),
          publishTime: new Date().toISOString(),
        },
        data: {
          email: 'test@holi.social',
        },
        subscription: randomUUID(),
      },
    })

    await handleEvent(cloudEvent)

    expect(mockHandleUserSuspended).toHaveBeenCalledWith(cloudEvent.data?.data)
  })
})

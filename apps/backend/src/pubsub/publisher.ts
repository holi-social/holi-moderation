import { Topic } from '@google-cloud/pubsub'
import { Injectable, Logger } from '@nestjs/common'

import { Event, EventType } from './events'

@Injectable()
export class Publisher {
  private readonly logger = new Logger(Publisher.name)

  constructor(private readonly topic: Topic) {}

  /** @returns the Pub/Sub message ID  */
  async publish<TEvent extends Event<EventType, object>>(event: TEvent): Promise<string> {
    this.logger.debug(`Publishing event "${event.eventType}" with payload ${JSON.stringify(event.data)}`)

    return this.topic.publishMessage({
      json: event.data,
      attributes: {
        eventType: event.eventType,
        eventVersion: event.version,
      },
    })
  }
}

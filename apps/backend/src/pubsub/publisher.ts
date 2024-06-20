import { Topic } from '@google-cloud/pubsub';
import { Injectable } from '@nestjs/common';
import { Event, EventType } from './events';

@Injectable()
export class Publisher {
  constructor(private readonly topic: Topic) {}

  /** @returns the Pub/Sub message ID  */
  async publish<TEvent extends Event<EventType, object>>(
    event: TEvent,
  ): Promise<string> {
    return this.topic.publishMessage({
      json: event.data,
      attributes: {
        eventType: event.eventType,
        eventVersion: event.version,
      },
    });
  }
}

import { PubSub, Topic } from '@google-cloud/pubsub';
import { FactoryProvider, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Event, EventType } from './events';

export const PubsubProvider: FactoryProvider = {
  provide: PubSub,
  inject: [ConfigService],
  useFactory: (config: ConfigService) =>
    new PubSub({ projectId: config.get('PUBSUB_PROJECT_ID') }),
};

export const PubsubTopicProvider: FactoryProvider = {
  provide: Topic,
  inject: [PubSub, ConfigService],
  useFactory: (pubsub: PubSub, config: ConfigService) =>
    pubsub.topic(config.get('PUBSUB_TOPIC_NAME')),
};

@Injectable()
export class Publisher {
  constructor(private readonly topic: Topic) {}

  /** @returns the Pub/Sub message ID  */
  async publish<TEvent extends Event<EventType, object>>(
    event: TEvent,
  ): Promise<string> {
    return this.topic.publishMessage({
      data: Buffer.from(JSON.stringify(event.data)),
      attributes: {
        eventType: event.eventType,
        eventVersion: event.version,
      },
    });
  }
}

import { PubSub, Topic } from '@google-cloud/pubsub';
import { FactoryProvider, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Publisher } from './publisher';
import { EnsurePubsubTopic } from './ensurePubsubTopic';

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

@Module({
  providers: [
    PubsubProvider,
    PubsubTopicProvider,
    Publisher,
    EnsurePubsubTopic,
  ],
  exports: [Publisher, EnsurePubsubTopic],
})
export class PubsubModule {}

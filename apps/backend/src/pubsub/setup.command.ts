import { PubSub } from '@google-cloud/pubsub';
import { ConfigService } from '@nestjs/config';
import { Command, CommandRunner } from 'nest-commander';

@Command({
  name: 'pubsub:setup',
  description: 'setup pubsub topic and subscriptions',
})
export class SetupPubsub extends CommandRunner {
  constructor(
    private readonly pubsub: PubSub,
    private readonly config: ConfigService,
  ) {
    super();
  }

  async run(): Promise<void> {
    await this.pubsub.createTopic(this.config.get('PUBSUB_TOPIC_NAME'));
  }
}

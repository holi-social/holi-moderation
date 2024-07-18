import { PubSub } from '@google-cloud/pubsub'
import { Injectable, OnApplicationBootstrap } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class EnsurePubsubTopic implements OnApplicationBootstrap {
  constructor(
    private readonly pubsub: PubSub,
    private readonly config: ConfigService,
  ) {}

  async onApplicationBootstrap() {
    try {
      if (process.env.NODE_ENV !== 'development') {
        return
      }

      const topicName = this.config.get('PUBSUB_TOPIC_NAME')
      const topic = this.pubsub.topic(topicName)

      const [topicExists] = await topic.exists()
      if (topicExists) {
        return
      }

      await topic.create()
    } catch {}
  }
}

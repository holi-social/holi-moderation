import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });
  await app.listen(
    process.env.PORT || 3000,
    process.env.LISTEN_ADDR || '127.0.0.1',
  );
}
bootstrap();

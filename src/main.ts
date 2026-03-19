import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Server-side rendered HTML templates (Nest "views")
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  // Static client assets (Nest "frontend")
  app.use('/static', express.static(join(__dirname, '..', 'frontend')));

  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();

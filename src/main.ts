import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.setBaseViewsDir(join(__dirname, 'frontened', 'views'));
  app.setViewEngine('hbs');

  app.use('/static', express.static(join(__dirname, 'frontened', 'static')));

  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();

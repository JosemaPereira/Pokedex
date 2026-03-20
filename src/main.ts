import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as express from 'express';
import hbs = require('hbs');
import { join } from 'path';

function registerPartials(partialsDir: string): Promise<void> {
  return new Promise((resolve, reject) => {
    hbs.registerPartials(partialsDir, (error) => {
      if (error) {
        reject(error);
        return;
      }

      resolve();
    });
  });
}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.setBaseViewsDir(join(process.cwd(), 'views'));
  app.setViewEngine('hbs');
  await registerPartials(join(process.cwd(), 'views', 'layouts'));
  await registerPartials(join(process.cwd(), 'views', 'partials'));

  app.use('/static', express.static(join(process.cwd(), 'static')));

  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();

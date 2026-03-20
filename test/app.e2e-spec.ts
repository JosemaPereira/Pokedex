import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';
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

describe('PagesController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication<NestExpressApplication>();

    // Mirror `src/main.ts` configuration so `@Render('index')` works in e2e.
    (app as NestExpressApplication).setBaseViewsDir(
      join(process.cwd(), 'views'),
    );
    (app as NestExpressApplication).setViewEngine('hbs');
    await registerPartials(join(process.cwd(), 'views', 'layouts'));
    await registerPartials(join(process.cwd(), 'views', 'partials'));
    (app as NestExpressApplication).use(
      '/static',
      express.static(join(process.cwd(), 'static')),
    );

    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect(/Pokédex/);
  });
});

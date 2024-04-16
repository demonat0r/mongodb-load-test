import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';

import { UsersModule } from '../src/user/users.module';
import { UsersService } from '../src/user/services';

describe('Users', () => {
  let app: INestApplication;
  let usersService = { findByName: () => ['test'] };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [UsersModule],
    })
      .overrideProvider(UsersService)
      .useValue(usersService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET findByName`, () => {
    return request(app.getHttpServer())
      .get('/users')
      .expect(200)
      .expect({
        data: usersService.findByName(),
      });
  });
  
  afterAll(async () => {
    await app.close();
  });
});

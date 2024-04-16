import { Module } from '@nestjs/common';

import { UsersController } from './controllers';
import { UsersService } from './services';
import { DatabaseModule } from '../common/database';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}

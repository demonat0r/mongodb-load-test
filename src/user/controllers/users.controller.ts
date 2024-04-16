import { Controller, Get, Param } from '@nestjs/common';

import { User } from '../schemas';
import { UsersService } from '../services';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('')
  findByName(@Param('name') name: string): Promise<User[]> {
    return this.usersService.findByName(name);
  }
}

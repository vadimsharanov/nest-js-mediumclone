import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './createUser.dto';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('users')
  async createUser(@Body('user') createUserDto: CreateUserDto): Promise<any> {
    console.log(createUserDto);
    return this.userService.createUser(createUserDto);
  }
}

import { Body, Controller, Get, Request, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { Roles } from '../auth/decorators/role.decorator';
import { Role } from '@prisma/client';
import { SettingUserDto } from './dto/setting-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('updateProfile')
  async update(@Request() req, @Body() settingUser: SettingUserDto) {
    return this.userService.settingUser(req.user.id, settingUser);
  }

  @Get()
  async getCurrentUser(@Request() req) {
    return this.userService.findById(req.user.id);
  }

  @Roles(Role.USER)
  @Get('protected')
  async getAll(@Request() req) {
    return {
      message: `Now you can access this protected API. This is your userID: ${req.user.id}`,
    };
  }
}

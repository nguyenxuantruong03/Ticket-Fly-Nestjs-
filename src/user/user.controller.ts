import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { SettingUserDto } from './dto/setting-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from './decorators/current-user.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Patch()
  @UseGuards(AuthGuard('jwt'))
  update(@CurrentUser() user: any, @Body() dto: SettingUserDto) {
    return this.userService.settingUser(user.id, dto);
  }

  @Get('me')
  @UseGuards(AuthGuard('jwt'))
  getMe(@CurrentUser() user: any) {
    return this.userService.findById(user.id);
  }

  @Get()
  async findAll() {
    console.log('active');
    return this.userService.findAll();
  }

  // @Roles(Role.USER)
  // @Get('protected')
  // async getAll(@Request() req) {
  //   return {
  //     message: `Now you can access this protected API. This is your userID: ${req.user.id}`,
  //   };
  // }
}

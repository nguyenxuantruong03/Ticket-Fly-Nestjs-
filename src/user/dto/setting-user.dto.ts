import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class SettingUserDto {
  @IsOptional()
  @IsString()
  newPassword: string;

  @IsOptional()
  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  email: string;

  @IsOptional()
  @IsBoolean()
  isTwoFactorEnabled: boolean;

  @IsOptional()
  @IsString()
  image: string;
}

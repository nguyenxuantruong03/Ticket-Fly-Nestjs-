import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEmail,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateAccountDto } from './create-account.dto';

export class CreateUserGoogleDto {
  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  image?: string;

  @IsOptional()
  @IsBoolean()
  isTwoFactorEnabled?: boolean;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateAccountDto)
  account?: CreateAccountDto;
}

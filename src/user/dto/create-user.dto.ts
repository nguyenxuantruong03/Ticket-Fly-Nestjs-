import { Type } from 'class-transformer';
import { IsEmail, IsOptional, IsString, ValidateNested } from 'class-validator';
import { CreateAccountDto } from './create-account.dto';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateAccountDto)
  account?: CreateAccountDto;
}

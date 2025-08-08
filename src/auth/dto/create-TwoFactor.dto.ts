import { IsEmail, IsString } from 'class-validator';

export class CreateTwoFactorDto {
  @IsEmail()
  email: string;

  @IsString()
  code: string;

  @IsString()
  turnstileToken: string;
}

import { IsEmail, IsString } from 'class-validator';

export class CreateForgotPasswordDto {
  @IsEmail()
  @IsString()
  email: string;

  @IsString()
  turnstileToken: string;
}

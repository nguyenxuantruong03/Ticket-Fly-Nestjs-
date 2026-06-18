import { IsEmail, IsString } from 'class-validator';

export class CreateResendVerificationDto {
  @IsEmail()
  @IsString()
  email: string;
}

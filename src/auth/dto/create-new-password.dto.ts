import { IsString } from 'class-validator';

export class CreateNewPasswordDto {
  @IsString()
  token: string;

  @IsString()
  password: string;
}

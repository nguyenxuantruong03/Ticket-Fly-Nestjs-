import { IsString } from 'class-validator';

export class CreateVerificationAccountDto {
  @IsString()
  token: string;
}

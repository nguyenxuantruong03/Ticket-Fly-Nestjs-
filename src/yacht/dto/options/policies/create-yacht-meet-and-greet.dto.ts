import { IsArray, IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateYachtMeetAndGreetDto {
  @IsBoolean()
  available: boolean;

  @IsOptional()
  @IsBoolean()
  pickupSign?: boolean;

  @IsArray()
  @IsString({ each: true })
  staffLanguage: string[];

  @IsOptional()
  @IsString()
  meetingPoint?: string;
}

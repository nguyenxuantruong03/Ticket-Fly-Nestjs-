import { IsDateString, IsOptional } from 'class-validator';

export class CreateFlyAllianceMemberDto {
  @IsOptional()
  @IsDateString()
  joinedAt?: string;
}

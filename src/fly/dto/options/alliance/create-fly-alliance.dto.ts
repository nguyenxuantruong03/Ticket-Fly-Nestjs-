import { IsArray, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateFlyAllianceMemberDto } from './create-fly-alliance-member.dto';

export class CreateFlyAllianceDto {
  @IsString()
  name: string;

  @IsString()
  code: string;

  @IsOptional()
  @IsString()
  logo?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFlyAllianceMemberDto)
  airlines?: CreateFlyAllianceMemberDto[];
}

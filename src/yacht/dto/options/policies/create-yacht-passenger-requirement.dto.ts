import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateYachtPassengerRequirementDto {
  @IsOptional()
  @IsNumber()
  minimumAge?: number;

  @IsBoolean()
  passportRequired: boolean;

  @IsBoolean()
  identityRequired: boolean;

  @IsArray()
  @IsString({ each: true })
  nationalityRestriction: string[];

  @IsBoolean()
  childAllowed: boolean;

  @IsBoolean()
  infantAllowed: boolean;

  @IsOptional()
  @IsBoolean()
  pregnantPassengerAllowed?: boolean;
}

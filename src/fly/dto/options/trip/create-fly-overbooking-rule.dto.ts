import { IsEnum, IsNumber } from 'class-validator';
import { FlyCabinClass } from '@prisma/client';

export class CreateFlyOverbookingRuleDto {
  @IsEnum(FlyCabinClass)
  cabinClass: FlyCabinClass;

  @IsNumber()
  percentage: number;
}

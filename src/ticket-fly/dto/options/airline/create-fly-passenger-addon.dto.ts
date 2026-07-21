import {
  IsInt,
  IsNumber,
  IsObject,
  IsOptional,
  Min,
} from 'class-validator';

export class CreateFlyPassengerAddonDto {
  @IsOptional()
  @IsInt()
  @Min(1)
  quantity?: number;

  @IsNumber()
  unitPrice: number;

  @IsNumber()
  totalPrice: number;

  @IsOptional()
  @IsObject()
  metadata?: Record<string, any>;
}

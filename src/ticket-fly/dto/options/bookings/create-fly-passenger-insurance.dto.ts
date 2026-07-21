import {
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';


export class CreateFlyPassengerInsuranceDto {
  @IsString()
  insuranceId: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  quantity?: number;

  @IsNumber()
  @Min(0)
  unitPrice: number;

  @IsNumber()
  @Min(0)
  totalPrice: number;

}

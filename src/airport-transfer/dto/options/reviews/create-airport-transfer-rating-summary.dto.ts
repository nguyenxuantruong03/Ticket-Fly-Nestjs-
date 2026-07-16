import { IsInt, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateAirportTransferRatingSummaryDto {
  @IsString()
  transferId: string;

  @IsOptional()
  @IsNumber()
  averageRating?: number;

  @IsOptional()
  @IsInt()
  totalReviews?: number;

  @IsOptional()
  @IsNumber()
  driverRating?: number;

  @IsOptional()
  @IsNumber()
  vehicleRating?: number;

  @IsOptional()
  @IsNumber()
  punctuality?: number;

  @IsOptional()
  @IsNumber()
  cleanliness?: number;

  @IsOptional()
  @IsNumber()
  communication?: number;

  @IsOptional()
  @IsNumber()
  pickupExperience?: number;

  @IsOptional()
  @IsNumber()
  valueForMoney?: number;

  @IsOptional()
  @IsNumber()
  safety?: number;

  @IsOptional()
  @IsNumber()
  comfort?: number;

  @IsOptional()
  @IsInt()
  fiveStar?: number;

  @IsOptional()
  @IsInt()
  fourStar?: number;

  @IsOptional()
  @IsInt()
  threeStar?: number;

  @IsOptional()
  @IsInt()
  twoStar?: number;

  @IsOptional()
  @IsInt()
  oneStar?: number;
}

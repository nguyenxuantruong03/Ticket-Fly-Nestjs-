// dto/create-yacht-rating-summary.dto.ts

import { IsNumber, IsOptional, Min, Max } from 'class-validator';

export class CreateYachtRatingSummaryDto {
  @IsOptional()
  @IsNumber()
  @Min(0)
  totalReviews?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(5)
  averageRating?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(5)
  captain?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(5)
  crew?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(5)
  safety?: number;
}

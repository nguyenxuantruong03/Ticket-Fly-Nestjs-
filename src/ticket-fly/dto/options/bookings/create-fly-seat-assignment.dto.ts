import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class CreateFlySeatAssignmentDto {
  @IsString()
  seatId: string;

  @IsOptional()
  @IsBoolean()
  paid?: boolean;

  @IsOptional()
  @IsNumber()
  @Min(0)
  amount?: number;
}

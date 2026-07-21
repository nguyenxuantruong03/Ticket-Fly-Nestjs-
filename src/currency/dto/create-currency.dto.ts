import {
  IsBoolean,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';

export class CreateCurrencyDto {
  @IsString()
  @Length(3, 3)
  code: string;

  @IsOptional()
  @IsString()
  @Length(3, 3)
  numericCode?: string;

  @IsOptional()
  @IsString()
  symbol?: string;

  @IsOptional()
  @IsString()
  symbolNative?: string;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  nativeName?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(6)
  decimalDigits?: number;

  @IsOptional()
  @IsNumber()
  rounding?: number;

  @IsOptional()
  @IsString()
  flagEmoji?: string;

  @IsOptional()
  @IsString()
  locale?: string;

  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @IsOptional()
  @IsBoolean()
  isDefault?: boolean;
}

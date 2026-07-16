import { IsString } from 'class-validator';

export class CreateYachtPackageExtraDto {
  @IsString()
  packageId: string;

  @IsString()
  extraId: string;
}

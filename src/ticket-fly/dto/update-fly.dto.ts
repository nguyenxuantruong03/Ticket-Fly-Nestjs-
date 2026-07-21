import { PartialType } from '@nestjs/mapped-types';
import { CreateFlyDto } from './create-fly.dto';

export class UpdateFlyDto extends PartialType(CreateFlyDto) {}

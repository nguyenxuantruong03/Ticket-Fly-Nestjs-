import { PartialType } from '@nestjs/mapped-types';
import { CreateYachtDto } from './create-yacht.dto';

export class UpdateYachtDto extends PartialType(CreateYachtDto) {}

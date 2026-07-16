import { IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateFlyItinerarySegmentDto } from './create-fly-itinerary-segment.dto';

export class CreateFlyItineraryDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFlyItinerarySegmentDto)
  segments: CreateFlyItinerarySegmentDto[];
}

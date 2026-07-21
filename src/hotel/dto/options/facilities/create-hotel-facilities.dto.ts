import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { RetaurentCategory } from '@prisma/client';

//
// ======================================================
// ROOM FACILITIES
// ======================================================
//

export class CreateHotelRoomFacilitiesDto {
  @IsOptional() @IsBoolean() tv?: boolean;
  @IsOptional() @IsBoolean() minibar?: boolean;
  @IsOptional() @IsBoolean() refrigerator?: boolean;
  @IsOptional() @IsBoolean() microwave?: boolean;
  @IsOptional() @IsBoolean() coffeeMachine?: boolean;
  @IsOptional() @IsBoolean() kettle?: boolean;
  @IsOptional() @IsBoolean() safe?: boolean;
  @IsOptional() @IsBoolean() wardrobe?: boolean;
  @IsOptional() @IsBoolean() hairDryer?: boolean;
  @IsOptional() @IsBoolean() ironingFacilities?: boolean;
  @IsOptional() @IsBoolean() slippers?: boolean;
  @IsOptional() @IsBoolean() bathrobe?: boolean;
  @IsOptional() @IsBoolean() telephone?: boolean;
  @IsOptional() @IsBoolean() desk?: boolean;
  @IsOptional() @IsBoolean() sofa?: boolean;
  @IsOptional() @IsBoolean() balcony?: boolean;
  @IsOptional() @IsBoolean() bathtub?: boolean;
  @IsOptional() @IsBoolean() shower?: boolean;
  @IsOptional() @IsBoolean() streamingService?: boolean;
}

//
// ======================================================
// WIFI
// ======================================================
//

export class CreateHotelWifiDto {
  @IsBoolean()
  available: boolean;

  @IsOptional()
  @IsBoolean()
  free?: boolean;

  @IsOptional()
  @IsNumber()
  speedMbps?: number;

  @IsOptional()
  @IsBoolean()
  availableInRooms?: boolean;

  @IsOptional()
  @IsBoolean()
  availableInPublicAreas?: boolean;
}

//
// ======================================================
// PARKING
// ======================================================
//

export class CreateHotelParkingDto {
  @IsBoolean()
  available: boolean;

  @IsOptional()
  @IsBoolean()
  free?: boolean;

  @IsOptional()
  @IsBoolean()
  valet?: boolean;

  @IsOptional()
  @IsBoolean()
  covered?: boolean;

  @IsOptional()
  @IsBoolean()
  evCharging?: boolean;

  @IsOptional()
  @IsBoolean()
  reservationRequired?: boolean;
}

//
// ======================================================
// POOL
// ======================================================
//

export class CreateHotelPoolDto {
  @IsBoolean()
  available: boolean;

  @IsOptional()
  @IsBoolean()
  indoor?: boolean;

  @IsOptional()
  @IsBoolean()
  outdoor?: boolean;

  @IsOptional()
  @IsBoolean()
  infinity?: boolean;

  @IsOptional()
  @IsBoolean()
  heated?: boolean;

  @IsOptional()
  @IsBoolean()
  kidsPool?: boolean;
}

//
// ======================================================
// GYM
// ======================================================
//

export class CreateHotelGymDto {
  @IsBoolean()
  available: boolean;

  @IsOptional()
  @IsBoolean()
  open24Hours?: boolean;

  @IsOptional()
  @IsBoolean()
  personalTrainer?: boolean;
}

//
// ======================================================
// SPA
// ======================================================
//

export class CreateHotelSpaDto {
  @IsBoolean()
  available: boolean;

  @IsOptional()
  @IsBoolean()
  massage?: boolean;

  @IsOptional()
  @IsBoolean()
  sauna?: boolean;

  @IsOptional()
  @IsBoolean()
  steamRoom?: boolean;

  @IsOptional()
  @IsBoolean()
  hotTub?: boolean;
}

//
// ======================================================
// RESTAURANT IMAGE
// ======================================================
//

export class CreateHotelRestaurantImageDto {
  @IsString()
  url: string;

  @IsEnum(RetaurentCategory)
  category: RetaurentCategory;

  @IsOptional()
  @IsBoolean()
  isPrimary?: boolean;

  @IsOptional()
  @IsInt()
  @Min(0)
  sortOrder?: number;
}

//
// ======================================================
// RESTAURANT
// ======================================================
//

export class CreateHotelRestaurantDto {
  @IsString()
  name: string;

  @IsArray()
  @IsString({ each: true })
  cuisineTypes: string[];

  @IsOptional()
  @IsBoolean()
  breakfast?: boolean;

  @IsOptional()
  @IsBoolean()
  lunch?: boolean;

  @IsOptional()
  @IsBoolean()
  dinner?: boolean;

  @IsOptional()
  @IsBoolean()
  buffet?: boolean;

  @IsOptional()
  @IsBoolean()
  reservation?: boolean;

  @IsOptional()
  @IsInt()
  capacity?: number;

  @IsOptional()
  @IsString()
  opening?: string;

  @IsNumber()
  price: number;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateHotelRestaurantImageDto)
  images?: CreateHotelRestaurantImageDto[];
}

//
// ======================================================
// TRANSPORTATION
// ======================================================
//

export class CreateHotelTransportationDto {
  @IsOptional()
  @IsBoolean()
  airportShuttle?: boolean;

  @IsOptional()
  @IsNumber()
  shuttleFee?: number;

  @IsOptional()
  @IsBoolean()
  taxiService?: boolean;

  @IsOptional()
  @IsBoolean()
  carRental?: boolean;

  @IsOptional()
  @IsBoolean()
  bicycleRental?: boolean;

  @IsOptional()
  @IsBoolean()
  trainStationTransfer?: boolean;
}

//
// ======================================================
// ACCESSIBILITY
// ======================================================
//

export class CreateHotelAccessibilityDto {
  @IsOptional()
  @IsBoolean()
  wheelchairAccessible?: boolean;

  @IsOptional()
  @IsBoolean()
  accessibleRoom?: boolean;

  @IsOptional()
  @IsBoolean()
  elevator?: boolean;

  @IsOptional()
  @IsBoolean()
  brailleSignage?: boolean;

  @IsOptional()
  @IsBoolean()
  accessibleBathroom?: boolean;

  @IsOptional()
  @IsBoolean()
  hearingAccessible?: boolean;

  @IsOptional()
  @IsBoolean()
  visualAccessible?: boolean;

  @IsOptional()
  @IsBoolean()
  ramp?: boolean;
}

//
// ======================================================
// SAFETY
// ======================================================
//

export class CreateHotelSafetyDto {
  @IsOptional()
  @IsBoolean()
  security24Hours?: boolean;

  @IsOptional()
  @IsBoolean()
  cctv?: boolean;

  @IsOptional()
  @IsBoolean()
  smokeDetector?: boolean;

  @IsOptional()
  @IsBoolean()
  fireAlarm?: boolean;

  @IsOptional()
  @IsBoolean()
  fireExtinguisher?: boolean;

  @IsOptional()
  @IsBoolean()
  firstAidKit?: boolean;

  @IsOptional()
  @IsBoolean()
  emergencyExit?: boolean;

  @IsOptional()
  @IsBoolean()
  securityBox?: boolean;

  @IsOptional()
  @IsBoolean()
  inRoomSafe?: boolean;
}

//
// ======================================================
// HOTEL FACILITIES
// ======================================================
//

export class CreateHotelFacilitiesDto {
  @IsOptional()
  @ValidateNested()
  @Type(() => CreateHotelWifiDto)
  wifi?: CreateHotelWifiDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateHotelParkingDto)
  parking?: CreateHotelParkingDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateHotelPoolDto)
  swimmingPool?: CreateHotelPoolDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateHotelGymDto)
  gym?: CreateHotelGymDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateHotelSpaDto)
  spa?: CreateHotelSpaDto;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateHotelRestaurantDto)
  restaurants?: CreateHotelRestaurantDto[];

  @IsOptional() @IsBoolean() bar?: boolean;
  @IsOptional() @IsBoolean() roomService?: boolean;
  @IsOptional() @IsBoolean() laundry?: boolean;
  @IsOptional() @IsBoolean() meetingRoom?: boolean;
  @IsOptional() @IsBoolean() businessCenter?: boolean;
  @IsOptional() @IsBoolean() familyRoom?: boolean;
  @IsOptional() @IsBoolean() kidsClub?: boolean;
  @IsOptional() @IsBoolean() playground?: boolean;
  @IsOptional() @IsBoolean() atm?: boolean;
  @IsOptional() @IsBoolean() giftShop?: boolean;
  @IsOptional() @IsBoolean() currencyExchange?: boolean;
  @IsOptional() @IsBoolean() concierge?: boolean;
  @IsOptional() @IsBoolean() luggageStorage?: boolean;
  @IsOptional() @IsBoolean() sharedKitchen?: boolean;
  @IsOptional() @IsBoolean() vendingMachine?: boolean;
  @IsOptional() @IsBoolean() library?: boolean;
  @IsOptional() @IsBoolean() casino?: boolean;
  @IsOptional() @IsBoolean() nightClub?: boolean;
  @IsOptional() @IsBoolean() beachAccess?: boolean;
  @IsOptional() @IsBoolean() privateBeach?: boolean;
  @IsOptional() @IsBoolean() waterPark?: boolean;
  @IsOptional() @IsBoolean() golfCourse?: boolean;
  @IsOptional() @IsBoolean() tennisCourt?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateHotelTransportationDto)
  transportation?: CreateHotelTransportationDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateHotelAccessibilityDto)
  accessibility?: CreateHotelAccessibilityDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateHotelSafetyDto)
  safety?: CreateHotelSafetyDto;
}

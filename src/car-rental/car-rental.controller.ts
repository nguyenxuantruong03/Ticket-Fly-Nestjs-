import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CarRentalService } from './car-rental.service';
import { CreateCarRentalDto } from './dto/create-car-rental.dto';
import { UpdateCarRentalDto } from './dto/update-car-rental.dto';

@Controller('car-rental')
export class CarRentalController {
  constructor(private readonly carRentalService: CarRentalService) {}

  @Post()
  create(@Body() createCarRentalDto: CreateCarRentalDto) {
    return this.carRentalService.create(createCarRentalDto);
  }

  @Get()
  findAll() {
    return this.carRentalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carRentalService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCarRentalDto: UpdateCarRentalDto) {
  //   return this.carRentalService.update(+id, updateCarRentalDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carRentalService.remove(id);
  }
}

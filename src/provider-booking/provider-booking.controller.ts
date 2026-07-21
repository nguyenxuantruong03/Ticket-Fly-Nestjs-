import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ProviderBookingService } from './provider-booking.service';
import { CreateProviderBookingDto } from './dto/create-provider-booking.dto';

@Controller('provider-booking')
export class ProviderBookingController {
  constructor(
    private readonly providerBookingService: ProviderBookingService,
  ) {}

  @Post()
  create(@Body() createProviderBookingDto: CreateProviderBookingDto) {
    return this.providerBookingService.create(createProviderBookingDto);
  }

  @Get()
  findAll() {
    return this.providerBookingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.providerBookingService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProviderBookingDto: UpdateProviderBookingDto) {
  //   return this.providerBookingService.update(+id, updateProviderBookingDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.providerBookingService.remove(id);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AirportTransferService } from './airport-transfer.service';
import { CreateAirportTransferDto } from './dto/create-airport-transfer.dto';
import { UpdateAirportTransferDto } from './dto/update-airport-transfer.dto';

@Controller('airport-transfer')
export class AirportTransferController {
  constructor(
    private readonly airportTransferService: AirportTransferService,
  ) {}

  @Post()
  create(@Body() createAirportTransferDto: CreateAirportTransferDto) {
    return this.airportTransferService.create(createAirportTransferDto);
  }

  @Get()
  findAll() {
    return this.airportTransferService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.airportTransferService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAirportTransferDto: UpdateAirportTransferDto,
  ) {
    return this.airportTransferService.update(+id, updateAirportTransferDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.airportTransferService.remove(id);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FlyService } from './fly.service';
import { CreateFlyDto } from './dto/create-fly.dto';
import { UpdateFlyDto } from './dto/update-fly.dto';

@Controller('fly')
export class FlyController {
  constructor(private readonly flyService: FlyService) {}

  @Post()
  create(@Body() createFlyDto: CreateFlyDto) {
    return this.flyService.create(createFlyDto);
  }

  @Get()
  findAll() {
    return this.flyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.flyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFlyDto: UpdateFlyDto) {
    return this.flyService.update(+id, updateFlyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.flyService.remove(+id);
  }
}

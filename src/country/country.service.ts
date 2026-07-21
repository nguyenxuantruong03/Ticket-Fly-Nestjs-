import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CountryService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCountryDto: CreateCountryDto) {
    return this.prisma.country.create({
      data: createCountryDto,
    });
  }

  findAll() {
    return this.prisma.country.findMany({
      include: {
        cities: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} country`;
  }

  update(id: number, updateCountryDto: UpdateCountryDto) {
    return `This action updates a #${id} country`;
  }

   async remove(id: string) {
    return this.prisma.country.delete({
      where: {
        id,
      },
    });
  }
}

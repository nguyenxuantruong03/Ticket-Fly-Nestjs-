import { Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CityService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createCityDto: CreateCityDto) {
    const { countryId, ...data } = createCityDto;

    return this.prisma.city.create({
      data: {
        ...data,
        country: {
          connect: {
            id: countryId,
          },
        },
      },
    });
  }

  findAll() {
    return this.prisma.city.findMany({
      include: {
        country: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} city`;
  }

  update(id: number, updateCityDto: UpdateCityDto) {
    return `This action updates a #${id} city`;
  }

  async remove(id: string) {
    return this.prisma.city.delete({
      where: {
        id,
      },
    });
  }
}

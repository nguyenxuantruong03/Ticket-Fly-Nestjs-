import { Injectable } from '@nestjs/common';
import { CreateFlyDto } from './dto/create-fly.dto';
import { UpdateFlyDto } from './dto/update-fly.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { FlyCreateMapper } from './mapper/fly-create.mapper';

@Injectable()
export class FlyService {
  constructor(private readonly prisma: PrismaService) {}
  async create(dto: CreateFlyDto) {
    const data = FlyCreateMapper.toPrisma(dto);
    return this.prisma.fly.create({
      data,

      include: {
        airline: true,
        routes: {
          include: {
            segments: true,
          },
        },
        policies: true,
        price: {
          include: {
            fares: true,
          },
        },
        images: true,
        schedule: true,
      },
    });
  }

  async findAll() {
    return this.prisma.fly.findMany({
      include: {
        airline: true,

        routes: {
          include: {
            segments: true,
          },
        },

        policies: true,

        price: {
          include: {
            fares: true,
          },
        },

        images: true,

        schedule: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} fly`;
  }

  update(id: number, updateFlyDto: UpdateFlyDto) {
    return `This action updates a #${id} fly`;
  }

  remove(id: number) {
    return `This action removes a #${id} fly`;
  }
}

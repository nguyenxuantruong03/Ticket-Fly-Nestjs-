import { Injectable } from '@nestjs/common';
import { CreateBusDto } from './dto/create-bus.dto';
import { UpdateBusDto } from './dto/update-bus.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { BusMapper } from './mapper/bus.mapper';

@Injectable()
export class BusService {
  constructor(private readonly prisma: PrismaService) {}
  async create(dto: CreateBusDto) {
    return this.prisma.bus.create({
      data: BusMapper.toCreateInput(dto),

      include: {
        vehicle: {
          include: {
            capacity: true,
            specification: true,
            features: true,
            images: true,
            seats: true,
            seatLayout: true,
            seatMap: true,
          },
        },

        routes: {
          include: {
            boardingPoints: true,
            dropoffPoints: true,
            trips: {
              include: {
                price: {
                  include: {
                    seatPrices: true,
                  },
                },
                stops: true,
                seatAvailability: true,
              },
            },
          },
        },

        policies: {
          include: {
            cancellation: true,
            luggage: true,
            child: true,
            boarding: true,
            change: true,
            passenger: true,
          },
        },

        images: true,

        price: {
          include: {
            breakdowns: true,
            rules: true,
          },
        },
      },
    });
  }

  async findAll() {
    return this.prisma.bus.findMany({
      orderBy: {
        createdAt: 'desc',
      },

      include: {
        vehicle: {
          include: {
            capacity: true,
            specification: true,
            features: true,
            images: true,
            seats: true,
            seatLayout: true,
            seatMap: true,
          },
        },

        routes: {
          include: {
            boardingPoints: true,
            dropoffPoints: true,
            trips: {
              include: {
                price: {
                  include: {
                    seatPrices: true,
                  },
                },
                stops: true,
                seatAvailability: true,
              },
            },
          },
        },

        policies: {
          include: {
            cancellation: true,
            luggage: true,
            child: true,
            boarding: true,
            change: true,
            passenger: true,
          },
        },

        images: true,

        price: {
          include: {
            breakdowns: true,
            rules: true,
          },
        },
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} bus`;
  }

  update(id: number, updateBusDto: UpdateBusDto) {
    return `This action updates a #${id} bus`;
  }

  remove(id: number) {
    return `This action removes a #${id} bus`;
  }
}

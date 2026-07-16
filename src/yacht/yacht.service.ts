import { Injectable } from '@nestjs/common';
import { CreateYachtDto } from './dto/create-yacht.dto';
import { UpdateYachtDto } from './dto/update-yacht.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { YachtMapper } from './mapper/yacht.mapper';

@Injectable()
export class YachtService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createYachtDto: CreateYachtDto) {
    return this.prisma.yacht.create({
      data: YachtMapper.toCreateInput(createYachtDto),
      include: {
        providerBooking: true,

        marina: true,

        image: true,

        vehicle: {
          include: {
            capacity: true,
            specification: true,
            images: true,
            facilities: true,
            safetyEquipment: true,
          },
        },

        availability: {
          include: {
            calendar: true,
          },
        },

        routes: {
          include: {
            departureMarina: true,
            destinationMarina: true,
            stops: {
              include: {
                address: true,
              },
            },
          },
        },

        trips: {
          include: {
            route: true,
            schedule: true,
          },
        },

        price: {
          include: {
            basePrices: true,
            fees: true,
            discounts: true,
          },
        },

        packages: {
          include: {
            images: true,
            extras: true,
          },
        },

        extras: {
          include: {
            images: true,
          },
        },

        policies: {
          include: {
            cancellation: true,
            passenger: true,
            luggage: true,
            waiting: true,
            meetAndGreet: true,
            flightSupport: true,
            booking: true,
          },
        },

        notice: true,

        crew: true,

        ratingSummary: true,
      },
    });
  }

  async findAll() {
    return this.prisma.yacht.findMany({
      include: {
        providerBooking: true,

        marina: true,

        image: true,

        vehicle: {
          include: {
            capacity: true,
            specification: true,
            images: true,
            facilities: true,
            safetyEquipment: true,
          },
        },

        availability: {
          include: {
            calendar: true,
          },
        },

        routes: {
          include: {
            departureMarina: true,
            destinationMarina: true,
            stops: {
              include: {
                address: true,
              },
            },
          },
        },

        trips: {
          include: {
            route: true,
            schedule: true,
          },
        },

        price: {
          include: {
            basePrices: true,
            fees: true,
            discounts: true,
          },
        },

        packages: {
          include: {
            images: true,
            extras: {
              include: {
                extra: true,
              },
            },
          },
        },

        extras: {
          include: {
            images: true,
          },
        },

        policies: {
          include: {
            cancellation: true,
            passenger: true,
            luggage: true,
            waiting: true,
            meetAndGreet: true,
            flightSupport: true,
            booking: true,
          },
        },

        notice: true,

        crew: true,

        ratingSummary: true,

        reviews: {
          include: {
            images: true,
          },
        },

        bookings: {
          include: {
            passengers: true,
            extras: {
              include: {
                extra: true,
              },
            },
            contact: true,
            pickup: {
              include: {
                address: true,
              },
            },
          },
        },

        inventoryLocks: true,

        favorites: true,
      },

      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} yacht`;
  }

  update(id: number, updateYachtDto: UpdateYachtDto) {
    return `This action updates a #${id} yacht`;
  }

  remove(id: number) {
    return `This action removes a #${id} yacht`;
  }
}

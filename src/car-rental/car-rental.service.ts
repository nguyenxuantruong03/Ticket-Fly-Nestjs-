import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCarRentalDto } from './dto/create-car-rental.dto';

@Injectable()
export class CarRentalService {
  constructor(private readonly prisma: PrismaService) {}
  async create(dto: CreateCarRentalDto) {}

  async findAll() {
    return this.prisma.carRental.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        trip: {
          include: {
            locations: true,
            schedule: true,
            tripFee: true,
          },
        },

        policies: {
          include: {
            mileage: true,
            cancellation: true,
            rules: true,
            requiredDocuments: true,
            damagePolicy: true,
          },
        },

        vehicle: {
          include: {
            capacity: true,

            features: true,

            specification: true,

            locationCurrent: true,

            price: {
              include: {
                breakdown: true,
                priceRules: true,
              },
            },

            images: true,

            maintenance: true,

            document: true,
          },
        },

        images: true,

        reviews: {
          include: {
            images: true,
          },
        },

        extras: {
          include: {
            prices: true,
          },
        },

        insurances: {
          include: {
            benefits: true,
          },
        },

        businessHours: true,

        pickupInstructions: true,

        drivers: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} carRental`;
  }

  // update(id: number, updateCarRentalDto: UpdateCarRentalDto) {
  //   return `This action updates a #${id} carRental`;
  // }

  async remove(id: string) {
    return this.prisma.carRental.delete({
      where: {
        id,
      },
    });
  }
}

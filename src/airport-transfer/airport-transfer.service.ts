import { Injectable } from '@nestjs/common';
import { CreateAirportTransferDto } from './dto/create-airport-transfer.dto';
import { UpdateAirportTransferDto } from './dto/update-airport-transfer.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { AirportTransferCreateMapper } from './mapper/airport-transfer.mapper';

@Injectable()
export class AirportTransferService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateAirportTransferDto) {
    return this.prisma.airportTransfer.create({
      data: AirportTransferCreateMapper.map(dto),
      include: {
        availability: true,
        capacity: true,
        routes: {
          include: {
            stops: true,
          },
        },
        schedules: true,
        trips: true,
        vehicle: {
          include: {
            capacity: true,
            features: true,
            images: true,
            drivers: true,
          },
        },
        price: {
          include: {
            routePrices: true,
            tripPrices: true,
            rules: true,
          },
        },
        flightSupport: true,
        meetAndGreet: true,
        waitingPolicy: true,
        luggagePolicy: true,
        passengerRequirement: true,
        contactInformation: true,
        specialRequest: true,
        notice: true,
      },
    });
  }

  async findAll() {
    return this.prisma.airportTransfer.findMany({
      orderBy: {
        createdAt: 'desc',
      },

      include: {
        availability: true,

        capacity: true,

        routes: {
          include: {
            stops: true,
          },
        },

        schedules: true,

        trips: true,

        vehicle: {
          include: {
            capacity: true,
            features: true,
            images: true,
            drivers: true,
          },
        },

        price: {
          include: {
            routePrices: true,
            tripPrices: true,
            rules: true,
          },
        },

        flightSupport: true,

        meetAndGreet: true,

        waitingPolicy: true,

        luggagePolicy: true,

        passengerRequirement: true,

        contactInformation: true,

        specialRequest: true,

        notice: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} airportTransfer`;
  }

  update(id: number, updateAirportTransferDto: UpdateAirportTransferDto) {
    return `This action updates a #${id} airportTransfer`;
  }

  remove(id: number) {
    return `This action removes a #${id} airportTransfer`;
  }
}

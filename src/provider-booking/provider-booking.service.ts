import { Injectable } from '@nestjs/common';
import { CreateProviderBookingDto } from './dto/create-provider-booking.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { typeServiceBooking } from '@prisma/client';
import { mapCreateProviderBooking } from './mapper/provider-booking';

@Injectable()
export class ProviderBookingService {
  constructor(private readonly prisma: PrismaService) {}

  create(createProviderBookingDto: CreateProviderBookingDto) {
    const data = mapCreateProviderBooking(createProviderBookingDto);
    return this.prisma.providerBooking.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.providerBooking.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
          },
        },
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} providerBooking`;
  }

  // update(id: number, updateProviderBookingDto: UpdateProviderBookingDto) {
  //   return `This action updates a #${id} providerBooking`;
  // }

 async remove(id: string) {
    return this.prisma.providerBooking.delete({
      where: {
        id,
      },
    });
  }
}

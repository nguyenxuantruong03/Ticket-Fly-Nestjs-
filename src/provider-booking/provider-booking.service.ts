import { Injectable } from '@nestjs/common';
import { CreateProviderBookingDto } from './dto/create-provider-booking.dto';
import { UpdateProviderBookingDto } from './dto/update-provider-booking.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { typeServiceBooking } from '@prisma/client';

@Injectable()
export class ProviderBookingService {
  constructor(private readonly prisma: PrismaService) {}

  create(createProviderBookingDto: CreateProviderBookingDto) {
    const { userId, ...data } = createProviderBookingDto;

    return this.prisma.providerBooking.create({
      data: {
        ...data,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }

  findAll(serviceType?: string) {
    return this.prisma.providerBooking.findMany({
      where: {
        // Sử dụng toán tử 'has' để kiểm tra xem mảng có chứa giá trị đó không
        // Nếu không có serviceType, thì điều kiện là undefined (lấy tất cả)
        service: serviceType
          ? { has: serviceType as typeServiceBooking } // Ép kiểu string về Enum
          : undefined,
      },
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

  remove(id: number) {
    return `This action removes a #${id} providerBooking`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HotelService {
  constructor(private readonly prisma: PrismaService) {}
  async create(dto: CreateHotelDto) {}

  async findAll() {
    return this.prisma.hotel.findMany({
      include: {
        information: true,

        hotelImage: true,

        facilitiesHotel: {
          include: {
            wifi: true,
            parking: true,
            swimmingPool: true,
            gym: true,
            spa: true,
            restaurants: {
              include: {
                images: true,
              },
            },
            transportation: true,
            accessibility: true,
            safety: true,
          },
        },

        favorites: true,

        areaGuides: true,

        roomTypes: {
          include: {
            rooms: {
              include: {
                roomImage: true,
              },
            },
          },
        },

        inventory: true,

        reviews: true,

        bookings: true,

        extras: true,

        mealOptions: true,

        nearbyPlaces: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} hotel`;
  }

  // update(id: number, updateHotelDto: UpdateHotelDto) {
  //   return `This action updates a #${id} hotel`;
  // }

  async remove(id: string) {
    return this.prisma.hotel.delete({
      where: {
        id,
      },
    });
  }
}

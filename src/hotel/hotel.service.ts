import { Injectable } from '@nestjs/common';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { HotelMapper } from './mapper/hotel.mapper';

@Injectable()
export class HotelService {
  constructor(private readonly prisma: PrismaService) {}
  async create(dto: CreateHotelDto) {
    const data = HotelMapper.toCreateInput(dto);

    return this.prisma.hotel.create({
      data,

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

        roomTypes: true,

        inventory: true,

        reviews: true,

        bookings: true,

        extras: true,

        mealOptions: true,

        nearbyPlaces: true,
      },
    });
  }

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

  remove(id: number) {
    return `This action removes a #${id} hotel`;
  }
}

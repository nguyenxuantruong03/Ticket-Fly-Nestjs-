import { Prisma } from '@prisma/client';

import { CreateHotelDto } from '../dto/create-hotel.dto';

export class HotelMapper {
  static toCreateInput(dto: CreateHotelDto): Prisma.HotelCreateInput {
    return {
      // =========================
      // BASIC
      // =========================

      name: dto.name,

      slug: dto.slug,

      aliases: dto.aliases ?? [],

      keywords: dto.keywords ?? [],

      tags: dto.tags ?? [],

      searchText:
        dto.searchText ??
        [
          dto.name,
          ...(dto.aliases ?? []),
          ...(dto.keywords ?? []),
          ...(dto.tags ?? []),
        ]
          .join(' ')
          .toLowerCase(),

      // =========================
      // STATUS
      // =========================

      active: dto.active ?? true,

      featured: dto.featured ?? false,

      searchable: dto.searchable ?? true,

      searchPriority: dto.searchPriority ?? 0,

      // =========================
      // INFORMATION
      // =========================

      ...(dto.informationId && {
        information: {
          connect: {
            id: dto.informationId,
          },
        },
      }),

      // =========================
      // HOTEL IMAGES
      // =========================

      ...(dto.hotelImage &&
        dto.hotelImage.length > 0 && {
          hotelImage: {
            create: dto.hotelImage.map((image) => ({
              url: image.url,
              category: image.category,
              sortOrder: image.sortOrder,
              isPrimary: image.isPrimary ?? false,
            })),
          },
        }),

      // =========================
      // FACILITIES
      // =========================

      ...(dto.facilitiesHotel && {
        facilitiesHotel: {
          create: HotelMapper.mapFacilities(dto.facilitiesHotel),
        },
      }),

      // =========================
      // FAVORITES
      // =========================

      ...(dto.favorites && {
        favorites: {
          create: dto.favorites.map((fav) => ({
            userId: fav.hotelId,
          })),
        },
      }),

      // =========================
      // AREA GUIDE
      // =========================

      ...(dto.areaGuides && {
        areaGuides: {
          create: dto.areaGuides.map((item) => ({
            title: item.title,

            description: item.description,

            images: item.images ?? [],
          })),
        },
      }),

      // =========================
      // EXISTING RELATIONS
      // =========================

      ...(dto.roomTypes && {
        roomTypes: {
          create: dto.roomTypes.map((roomType) => ({
            name: roomType.name,
            description: roomType.description,
            active: roomType.active ?? false,
            sortOrder: roomType.sortOrder ?? 0,
          })),
        },
      }),

      ...(dto.inventoryIds && {
        inventory: {
          connect: dto.inventoryIds.map((id) => ({ id })),
        },
      }),

      ...(dto.reviewIds && {
        reviews: {
          connect: dto.reviewIds.map((id) => ({ id })),
        },
      }),

      ...(dto.bookingIds && {
        bookings: {
          connect: dto.bookingIds.map((id) => ({ id })),
        },
      }),

      ...(dto.extraIds && {
        extras: {
          connect: dto.extraIds.map((id) => ({ id })),
        },
      }),

      ...(dto.mealOptionIds && {
        mealOptions: {
          connect: dto.mealOptionIds.map((id) => ({ id })),
        },
      }),

      ...(dto.nearbyPlaceIds && {
        nearbyPlaces: {
          connect: dto.nearbyPlaceIds.map((id) => ({ id })),
        },
      }),
    };
  }

  // =====================================================
  // FACILITIES MAPPER
  // =====================================================

  static mapFacilities(dto: any) {
    return {
      wifi: dto.wifi
        ? {
            create: dto.wifi,
          }
        : undefined,

      parking: dto.parking
        ? {
            create: dto.parking,
          }
        : undefined,

      swimmingPool: dto.swimmingPool
        ? {
            create: dto.swimmingPool,
          }
        : undefined,

      gym: dto.gym
        ? {
            create: dto.gym,
          }
        : undefined,

      spa: dto.spa
        ? {
            create: dto.spa,
          }
        : undefined,

      transportation: dto.transportation
        ? {
            create: dto.transportation,
          }
        : undefined,

      accessibility: dto.accessibility
        ? {
            create: dto.accessibility,
          }
        : undefined,

      safety: dto.safety
        ? {
            create: dto.safety,
          }
        : undefined,

      restaurants: dto.restaurants
        ? {
            create: dto.restaurants.map((restaurant) => ({
              name: restaurant.name,

              cuisineTypes: restaurant.cuisineTypes,

              breakfast: restaurant.breakfast,

              lunch: restaurant.lunch,

              dinner: restaurant.dinner,

              buffet: restaurant.buffet,

              reservation: restaurant.reservation,

              capacity: restaurant.capacity,

              opening: restaurant.opening,

              price: restaurant.price,

              currency: restaurant.currency,

              images: restaurant.images
                ? {
                    create: restaurant.images,
                  }
                : undefined,
            })),
          }
        : undefined,
    };
  }
}

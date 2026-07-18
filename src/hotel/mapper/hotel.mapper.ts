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

      status: dto.status,

      featured: dto.featured ?? false,

      searchable: dto.searchable ?? true,

      searchPriority: dto.searchPriority ?? 0,

      // =========================
      // INFORMATION
      // =========================

      ...(dto.information && {
        information: {
          create: {
            address: {
              connect: {
                id: dto.information.addressId,
              },
            },
            providerBooking: {
              connect: {
                id: dto.information.providerBookingId,
              },
            },
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
            userId: fav.userId,
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
            active: roomType.active,
            sortOrder: roomType.sortOrder,

            rooms: roomType.rooms
              ? {
                  create: roomType.rooms.map((room) => ({
                    name: room.name,
                    description: room.description,
                    roomSize: room.roomSize,
                    bedTypes: room.bedTypes ?? [],
                    maxGuests: room.maxGuests,
                    maxAdults: room.maxAdults,
                    maxChildren: room.maxChildren,
                    totalRooms: room.totalRooms,
                    breakfastIncluded: room.breakfastIncluded,
                    smokingPolicy: room.smokingPolicy,
                    mealPlan: room.mealPlan,
                    bedCount: room.bedCount,
                    bathroomCount: room.bathroomCount,
                    viewType: room.viewType,
                    bathRoomType: room.bathRoomType,
                    floor: room.floor,
                    active: room.active,
                    soundproof: room.soundproof,
                    nonSmoking: room.nonSmoking,
                    airConditioning: room.airConditioning,
                    kitchenette: room.kitchenette,
                    privateBathroom: room.privateBathroom,
                  })),
                }
              : undefined,
          })),
        },
      }),

      ...(dto.inventory && {
        inventory: {
          create: dto.inventory.map((item) => ({
            roomType: {
              connect: {
                id: item.roomTypeId,
              },
            },
          })),
        },
      }),

      ...(dto.reviews &&
        dto.reviews.length > 0 && {
          reviews: {
            create: dto.reviews.map((review) => ({
              bookingId: review.bookingId,
              roomTypeId: review.roomTypeId,
              userId: review.userId,
              tripType: review.tripType,
              wouldRecommend: review.wouldRecommend,
              language: review.language,
              anonymous: review.anonymous,
              overallRating: review.overallRating,
              cleanliness: review.cleanliness,
              service: review.service,
              location: review.location,
              facilities: review.facilities,
              valueForMoney: review.valueForMoney,
              comfort: review.comfort,
              sleepQuality: review.sleepQuality,
              food: review.food,
              wifi: review.wifi,
              title: review.title,
              comment: review.comment,
              pros: review.pros,
              cons: review.cons,
              reviewerName: review.reviewerName,
              reviewerCountry: review.reviewerCountry,
              stayDate: review.stayDate,
              verified: review.verified,
              status: review.status,
              response: review.response,
              responseAt: review.responseAt,
              helpfulCount: review.helpfulCount,

              images: review.images
                ? {
                    create: review.images.map((image) => ({
                      url: image.url,
                      sortOrder: image.sortOrder,
                    })),
                  }
                : undefined,
            })),
          },
        }),

      ...(dto.bookings &&
        dto.bookings.length > 0 && {
          bookings: {
            create: dto.bookings.map((booking) => ({
              status: booking.status,
              checkIn: booking.checkIn,
              checkOut: booking.checkOut,
              totalRooms: booking.totalRooms,
              specialRequest: booking.specialRequest,
              expiresAt: booking.expiresAt,
            })),
          },
        }),

      ...(dto.extras &&
        dto.extras.length > 0 && {
          extras: {
            create: dto.extras.map((extra) => ({
              name: extra.name,
              description: extra.description,
              type: extra.type,
              required: extra.required,
              active: extra.active,

              prices: extra.prices
                ? {
                    create: extra.prices.map((price) => ({
                      price: price.price,
                      currency: price.currency,
                      unit: price.unit,
                      active: price.active,
                    })),
                  }
                : undefined,
            })),
          },
        }),

      ...(dto.mealOptions &&
        dto.mealOptions.length > 0 && {
          mealOptions: {
            create: dto.mealOptions.map((meal) => ({
              name: meal.name,
              description: meal.description,
              type: meal.type,
              active: meal.active,

              prices: meal.prices
                ? {
                    create: meal.prices.map((price) => ({
                      price: price.price,
                      currency: price.currency,
                      unit: price.unit,
                    })),
                  }
                : undefined,
            })),
          },
        }),

      ...(dto.nearbyPlaces &&
        dto.nearbyPlaces.length > 0 && {
          nearbyPlaces: {
            create: dto.nearbyPlaces.map((place) => ({
              name: place.name,
              type: place.type,
              address: place.address,
              latitude: place.latitude,
              longitude: place.longitude,
              distanceKm: place.distanceKm,
              travelTimeMinutes: place.travelTimeMinutes,
              description: place.description,
            })),
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

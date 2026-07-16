import { Prisma } from '@prisma/client';
import { CreateFlyDto } from '../dto/create-fly.dto';

export class FlyCreateMapper {
  static toPrisma(dto: CreateFlyDto): Prisma.FlyCreateInput {
    return {
      providerBooking: {
        connect: {
          id: dto.providerBookingId,
        },
      },

      airline: {
        connect: {
          id: dto.airlineId,
        },
      },

      name: dto.name,
      slug: dto.slug,

      aliases: dto.aliases ?? [],
      keywords: dto.keywords ?? [],
      tags: dto.tags ?? [],

      searchText: dto.searchText,

      featured: dto.featured ?? false,
      searchable: dto.searchable ?? true,
      active: dto.active ?? true,

      searchPriority: dto.searchPriority ?? 0,

      // =========================
      // ROUTES
      // =========================

      routes: dto.routes
        ? {
            create: dto.routes.map((route) => ({
              departureAirport: {
                connect: {
                  id: route.departureAirportId,
                },
              },

              arrivalAirport: {
                connect: {
                  id: route.arrivalAirportId,
                },
              },

              distanceKm: route.distanceKm,

              estimatedDuration: route.estimatedDuration,

              directFlight: route.directFlight ?? false,

              routeType: route.routeType,

              segments: route.segments
                ? {
                    create: route.segments.map((segment) => ({
                      departureAirport: {
                        connect: {
                          id: segment.departureAirportId,
                        },
                      },

                      arrivalAirport: {
                        connect: {
                          id: segment.arrivalAirportId,
                        },
                      },

                      segmentOrder: segment.segmentOrder,

                      estimatedDuration: segment.estimatedDuration,

                      distanceKm: segment.distanceKm,
                    })),
                  }
                : undefined,
            })),
          }
        : undefined,

      // =========================
      // POLICIES
      // =========================

      policies: dto.policies
        ? {
            create: {
              cancellation: dto.policies.cancellation
                ? {
                    create: dto.policies.cancellation,
                  }
                : undefined,

              change: dto.policies.change
                ? {
                    create: dto.policies.change,
                  }
                : undefined,

              baggage: dto.policies.baggage
                ? {
                    create: dto.policies.baggage,
                  }
                : undefined,

              boarding: dto.policies.boarding
                ? {
                    create: dto.policies.boarding,
                  }
                : undefined,

              passenger: dto.policies.passenger
                ? {
                    create: dto.policies.passenger,
                  }
                : undefined,

              checkIn: dto.policies.checkIn
                ? {
                    create: dto.policies.checkIn,
                  }
                : undefined,

              transit: dto.policies.transit
                ? {
                    create: dto.policies.transit,
                  }
                : undefined,

              visa: dto.policies.visa
                ? {
                    create: dto.policies.visa,
                  }
                : undefined,
            },
          }
        : undefined,

      // =========================
      // PRICE
      // =========================

      price: dto.price
        ? {
            create: {
              currency: dto.price.currency,

              fromPrice: dto.price.fromPrice,

              toPrice: dto.price.toPrice,

              originalFromPrice: dto.price.originalFromPrice,

              originalToPrice: dto.price.originalToPrice,

              fares: dto.price.fares
                ? {
                    create: dto.price.fares.map((fare) => ({
                      name: fare.name,

                      cabinClass: fare.cabinClass,

                      code: fare.code,

                      refundable: fare.refundable ?? false,

                      changeable: fare.changeable ?? false,

                      priorityBoarding: fare.priorityBoarding ?? false,

                      loungeAccess: fare.loungeAccess ?? false,

                      seatSelectionIncluded:
                        fare.seatSelectionIncluded ?? false,

                      mealsIncluded: fare.mealsIncluded ?? false,

                      wifiIncluded: fare.wifiIncluded ?? false,

                      baggage: fare.baggage
                        ? {
                            create: fare.baggage,
                          }
                        : undefined,

                      taxes: fare.taxes
                        ? {
                            create: fare.taxes,
                          }
                        : undefined,

                      breakdown: fare.breakdown
                        ? {
                            create: fare.breakdown,
                          }
                        : undefined,

                      rules: fare.rules
                        ? {
                            create: fare.rules,
                          }
                        : undefined,

                      active: fare.active ?? true,
                    })),
                  }
                : undefined,

              priceRules: dto.price.priceRules
                ? {
                    create: dto.price.priceRules,
                  }
                : undefined,
            },
          }
        : undefined,

      // =========================
      // NOTICE
      // =========================

      notice: dto.notice
        ? {
            create: dto.notice,
          }
        : undefined,

      // =========================
      // IMAGES
      // =========================

      images: dto.images
        ? {
            create: dto.images.map((image) => ({
              url: image.url,

              category: image.category,

              alt: image.alt,

              isPrimary: image.isPrimary ?? false,

              sortOrder: image.sortOrder ?? 0,
            })),
          }
        : undefined,

      // =========================
      // SCHEDULE
      // =========================

      schedule: dto.schedule
        ? {
            create: dto.schedule.map((item) => ({
              departureTime: item.departureTime,

              arrivalTime: item.arrivalTime,

              startDate: new Date(item.startDate),

              endDate: item.endDate ? new Date(item.endDate) : undefined,

              operatingDays: item.operatingDays,

              active: item.active ?? true,
            })),
          }
        : undefined,
    };
  }
}

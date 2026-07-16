import { CreateAirportTransferDto } from '../dto/create-airport-transfer.dto';

export class AirportTransferCreateMapper {
  static map(dto: CreateAirportTransferDto) {
    return {
      /**
       * ======================================================
       * BASIC
       * ======================================================
       */

      providerBooking: {
        connect: {
          id: dto.providerBookingId,
        },
      },

      name: dto.name,

      slug: dto.slug,

      serviceType: dto.serviceType,

      aliases: dto.aliases ?? [],

      keywords: dto.keywords ?? [],

      tags: dto.tags ?? [],

      searchText: dto.searchText,

      featured: dto.featured ?? false,

      searchable: dto.searchable ?? true,

      searchPriority: dto.searchPriority ?? 0,

      active: dto.active ?? true,

      instantConfirmation: dto.instantConfirmation ?? false,

      /**
       * ======================================================
       * AVAILABILITY
       * ======================================================
       */

      availability: dto.availability
        ? {
            create: {
              available: dto.availability.available,

              calendars: {
                create:
                  dto.availability.calendars?.map((x) => ({
                    date: x.date,

                    available: x.available,

                    totalVehicles: x.totalVehicles,

                    remainingVehicles: x.remainingVehicles,

                    stopSell: x.stopSell,

                    minimumNoticeMinutes: x.minimumNoticeMinutes,
                  })) ?? [],
              },

              blackoutDates: {
                create: dto.availability.blackoutDates ?? [],
              },

              locks: {
                create: dto.availability.locks ?? [],
              },
            },
          }
        : undefined,

      /**
       * ======================================================
       * CAPACITY
       * ======================================================
       */

      capacity: dto.capacity
        ? {
            create: dto.capacity,
          }
        : undefined,

      /**
       * ======================================================
       * ROUTES
       * ======================================================
       */

      routes: dto.routes
        ? {
            create: dto.routes.map((route) => ({
              type: route.type,

              departureAddress: {
                connect: {
                  id: route.departureAddressId,
                },
              },

              arrivalAddress: {
                connect: {
                  id: route.arrivalAddressId,
                },
              },

              distanceKm: route.distanceKm,

              estimatedDuration: route.estimatedDuration,

              active: route.active ?? true,

              stops: {
                create:
                  route.stops?.map((stop) => ({
                    address: {
                      connect: {
                        id: stop.addressId,
                      },
                    },

                    stopOrder: stop.stopOrder,

                    estimatedArrival: stop.estimatedArrival,

                    waitingMinutes: stop.waitingMinutes,
                  })) ?? [],
              },
            })),
          }
        : undefined,

      /**
       * ======================================================
       * SCHEDULE
       * ======================================================
       */

      schedules: dto.schedules
        ? {
            create: dto.schedules.map((schedule) => ({
              departureTime: schedule.departureTime,

              operatingDays: schedule.operatingDays,

              startDate: schedule.startDate,

              endDate: schedule.endDate,

              active: schedule.active ?? true,
            })),
          }
        : undefined,

      /**
       * ======================================================
       * TRIPS
       * ======================================================
       */

      trips: dto.trips
        ? {
            create: dto.trips.map((trip) => ({
              route: {
                connect: {
                  id: trip.routeId,
                },
              },

              schedule: trip.scheduleId
                ? {
                    connect: {
                      id: trip.scheduleId,
                    },
                  }
                : undefined,

              departureTime: trip.departureTime,

              estimatedArrivalTime: trip.estimatedArrivalTime,

              totalSeats: trip.totalSeats,

              availableSeats: trip.availableSeats,

              status: trip.status,
            })),
          }
        : undefined,

      /**
       * ======================================================
       * VEHICLES
       * ======================================================
       */

      vehicle: dto.vehicle
        ? {
            create: dto.vehicle.map((vehicle) => ({
              type: vehicle.type,

              name: vehicle.name,

              manufacturer: vehicle.manufacturer,

              model: vehicle.model,

              year: vehicle.year,

              color: vehicle.color,

              licensePlate: vehicle.licensePlate,

              transmission: vehicle.transmission,

              fuelType: vehicle.fuelType,

              status: vehicle.status,

              capacity: vehicle.capacity
                ? {
                    create: vehicle.capacity,
                  }
                : undefined,

              features: vehicle.features
                ? {
                    create: vehicle.features,
                  }
                : undefined,

              specification: vehicle.specification
                ? {
                    create: vehicle.specification,
                  }
                : undefined,

              images: {
                create: vehicle.images ?? [],
              },

              availability: {
                create: vehicle.availability ?? [],
              },

              drivers: {
                create:
                  vehicle.drivers?.map((driver) => ({
                    firstName: driver.firstName,

                    lastName: driver.lastName,

                    avatar: driver.avatar,

                    phone: driver.phone,

                    email: driver.email,

                    licenseNumber: driver.licenseNumber,

                    licenseExpiry: driver.licenseExpiry,

                    experienceYears: driver.experienceYears,

                    rating: driver.rating,

                    totalTrips: driver.totalTrips,

                    active: driver.active ?? true,

                    languages: driver.languages ?? [],
                  })) ?? [],
              },
            })),
          }
        : undefined,

      /**
       * ======================================================
       * FLIGHT SUPPORT
       * ======================================================
       */

      flightSupport: dto.flightSupport
        ? {
            create: {
              flightNumberRequired: dto.flightSupport.flightNumberRequired,

              airlineRequired: dto.flightSupport.airlineRequired,

              terminalSupported: dto.flightSupport.terminalSupported,

              arrivalFlightOnly: dto.flightSupport.arrivalFlightOnly,

              departureFlightOnly: dto.flightSupport.departureFlightOnly,

              flightTracking: dto.flightSupport.flightTracking,

              delayMonitoring: dto.flightSupport.delayMonitoring,
            },
          }
        : undefined,

      /**
       * ======================================================
       * MEET GREET
       * ======================================================
       */

      meetAndGreet: dto.meetAndGreet
        ? {
            create: dto.meetAndGreet,
          }
        : undefined,

      /**
       * ======================================================
       * WAITING POLICY
       * ======================================================
       */

      waitingPolicy: dto.waitingPolicy
        ? {
            create: dto.waitingPolicy,
          }
        : undefined,

      /**
       * ======================================================
       * LUGGAGE POLICY
       * ======================================================
       */

      luggagePolicy: dto.luggagePolicy
        ? {
            create: dto.luggagePolicy,
          }
        : undefined,

      /**
       * ======================================================
       * PASSENGER REQUIREMENT
       * ======================================================
       */

      passengerRequirement: dto.passengerRequirement
        ? {
            create: dto.passengerRequirement,
          }
        : undefined,

      /**
       * ======================================================
       * CONTACT
       * ======================================================
       */

      contactInformation: dto.contactInformation
        ? {
            create: dto.contactInformation,
          }
        : undefined,

      /**
       * ======================================================
       * SPECIAL REQUEST
       * ======================================================
       */

      specialRequest: dto.specialRequest
        ? {
            create: dto.specialRequest,
          }
        : undefined,

      /**
       * ======================================================
       * PRICE
       * ======================================================
       */

      price: dto.price
        ? {
            create: {
              currency: dto.price.currency,

              fromPrice: dto.price.fromPrice,

              toPrice: dto.price.toPrice,

              originalFromPrice: dto.price.originalFromPrice,

              originalToPrice: dto.price.originalToPrice,

              routePrices: {
                create:
                  dto.price.routePrices?.map((price) => ({
                    route: {
                      connect: {
                        id: price.routeId,
                      },
                    },

                    vehicleType: price.vehicleType,

                    basePrice: price.basePrice,

                    originalPrice: price.originalPrice,

                    breakdown: price.breakdown
                      ? {
                          create: {
                            ...price.breakdown,

                            extraFees: {
                              create: price.breakdown.extraFees ?? [],
                            },
                          },
                        }
                      : undefined,
                  })) ?? [],
              },

              tripPrices: {
                create: dto.price.tripPrices ?? [],
              },

              rules: {
                create: dto.price.rules ?? [],
              },
            },
          }
        : undefined,

      /**
       * ======================================================
       * NOTICE
       * ======================================================
       */

      notice: dto.notice
        ? {
            create: dto.notice,
          }
        : undefined,
    };
  }
}

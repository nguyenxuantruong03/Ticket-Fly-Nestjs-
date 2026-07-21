import { CreateBusDto } from '../dto/create-bus.dto';

export class BusMapper {
  static toCreateInput(dto: CreateBusDto) {
    return {
      providerBooking: {
        connect: {
          id: dto.providerBookingId,
        },
      },

      name: dto.name,
      slug: dto.slug,

      active: dto.active ?? true,

      aliases: dto.aliases ?? [],
      keywords: dto.keywords ?? [],
      tags: dto.tags ?? [],

      searchText: dto.searchText,
      featured: dto.featured ?? false,
      searchPriority: dto.searchPriority ?? 0,

      /**
       * VEHICLES
       */
      vehicles: dto.vehicles
        ? {
            create: dto.vehicles.map((vehicle) => ({
              type: vehicle.type,

              name: vehicle.name,
              manufacturer: vehicle.manufacturer,
              model: vehicle.model,
              year: vehicle.year,

              active: vehicle.active ?? true,
              status: vehicle.status,

              capacity: vehicle.capacity
                ? {
                    create: vehicle.capacity,
                  }
                : undefined,

              specification: vehicle.specification
                ? {
                    create: vehicle.specification,
                  }
                : undefined,

              features: vehicle.features
                ? {
                    create: vehicle.features,
                  }
                : undefined,

              images: vehicle.images
                ? {
                    create: vehicle.images,
                  }
                : undefined,

              seats: vehicle.seats
                ? {
                    create: vehicle.seats,
                  }
                : undefined,

              seatLayout: vehicle.seatLayout
                ? {
                    create: vehicle.seatLayout,
                  }
                : undefined,

              seatMap: vehicle.seatMap
                ? {
                    create: vehicle.seatMap,
                  }
                : undefined,
            })),
          }
        : undefined,

      /**
       * IMAGES
       */
      images: dto.images
        ? {
            create: dto.images,
          }
        : undefined,

      /**
       * ROUTES
       */
      routes: dto.routes
        ? {
            create: dto.routes.map((route) => ({
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

              code: route.code,

              /**
               * BOARDING POINTS
               */
              boardingPoints: route.boardingPoints
                ? {
                    create: route.boardingPoints.map((item) => ({
                      address: {
                        connect: {
                          id: item.addressId,
                        },
                      },

                      name: item.name,

                      departureTime: item.departureTime,

                      order: item.order,
                    })),
                  }
                : undefined,

              /**
               * DROPOFF POINTS
               */
              dropoffPoints: route.dropoffPoints
                ? {
                    create: route.dropoffPoints.map((item) => ({
                      address: {
                        connect: {
                          id: item.addressId,
                        },
                      },

                      name: item.name,

                      arrivalTime: item.arrivalTime,

                      order: item.order,
                    })),
                  }
                : undefined,

              /**
               * TRIPS
               */
              trips: route.trips
                ? {
                    create: route.trips.map((trip) => ({
                      vehicle: {
                        connect: {
                          id: trip.vehicleId,
                        },
                      },

                      departureTime: trip.departureTime,

                      arrivalTime: trip.arrivalTime,

                      status: trip.status,

                      boardingStatus: trip.boardingStatus,

                      /**
                       * PRICE
                       */
                      price: trip.price
                        ? {
                            create: {
                              seatPrices: {
                                create: trip.price.seatPrices.map((seat) => ({
                                  seatType: seat.seatType,

                                  price: seat.price,

                                  originalPrice: seat.originalPrice,

                                  taxes: seat.taxes,

                                  serviceFee: seat.serviceFee,

                                  bookingFee: seat.bookingFee,

                                  discount: seat.discount,

                                  finalPrice: seat.finalPrice,

                                  availableSeats: seat.availableSeats,
                                })),
                              },
                            },
                          }
                        : undefined,

                      /**
                       * STOPS
                       */
                      stops: trip.stops
                        ? {
                            create: trip.stops.map((stop) => ({
                              address: {
                                connect: {
                                  id: stop.addressId,
                                },
                              },

                              arrivalTime: stop.arrivalTime,

                              departureTime: stop.departureTime,

                              stopOrder: stop.stopOrder,
                            })),
                          }
                        : undefined,

                      /**
                       * SEAT AVAILABILITY
                       */
                      seatAvailability: trip.seatAvailability
                        ? {
                            create: trip.seatAvailability.map((item) => ({
                              seat: {
                                connect: {
                                  id: item.seatId,
                                },
                              },

                              status: item.status,

                              availableSeats: item.availableSeats,

                              soldSeats: item.soldSeats,

                              reservedSeats: item.reservedSeats,

                              totalSeats: item.totalSeats,

                              currentPrice: item.currentPrice,
                            })),
                          }
                        : undefined,
                    })),
                  }
                : undefined,
            })),
          }
        : undefined,

      /**
       * POLICIES
       */
      policies: dto.policies
        ? {
            create: {
              cancellation: dto.policies.cancellation
                ? {
                    create: dto.policies.cancellation,
                  }
                : undefined,

              luggage: dto.policies.luggage
                ? {
                    create: dto.policies.luggage,
                  }
                : undefined,

              child: dto.policies.child
                ? {
                    create: dto.policies.child,
                  }
                : undefined,

              boarding: dto.policies.boarding
                ? {
                    create: dto.policies.boarding,
                  }
                : undefined,

              change: dto.policies.change
                ? {
                    create: dto.policies.change,
                  }
                : undefined,

              passenger: dto.policies.passenger
                ? {
                    create: dto.policies.passenger,
                  }
                : undefined,
            },
          }
        : undefined,

      /**
       * PRICE
       */
      price: dto.price
        ? {
            create: dto.price.map((price) => ({
              fromPrice: price.fromPrice,

              toPrice: price.toPrice,

              originalFromPrice: price.originalFromPrice,

              originalToPrice: price.originalToPrice,

              effectiveFrom: price.effectiveFrom,

              effectiveTo: price.effectiveTo,

              breakdowns: price.breakdowns
                ? {
                    create: price.breakdowns,
                  }
                : undefined,

              rules: price.rules
                ? {
                    create: price.rules,
                  }
                : undefined,
            })),
          }
        : undefined,
    };
  }
}

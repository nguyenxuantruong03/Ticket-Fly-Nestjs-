import { Prisma } from '@prisma/client';

import { CreateYachtDto } from '../dto/create-yacht.dto';

export class YachtMapper {
  static toCreateInput(dto: CreateYachtDto): Prisma.YachtCreateInput {
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
      // PROVIDER
      // =========================

      providerBooking: {
        connect: {
          id: dto.providerBookingId,
        },
      },

      // =========================
      // MARINA
      // =========================

      ...(dto.marinaId && {
        marina: {
          connect: {
            id: dto.marinaId,
          },
        },
      }),

      // =========================
      // IMAGES
      // =========================

      ...(dto.image &&
        dto.image.length > 0 && {
          image: {
            create: dto.image.map((image) => ({
              url: image.url,

              category: image.category,

              isPrimary: image.isPrimary ?? false,

              sortOrder: image.sortOrder,
            })),
          },
        }),

      // =========================
      // VEHICLE
      // =========================

      ...(dto.vehicle && {
        vehicle: {
          create: {
            name: dto.vehicle.name,

            manufacturer: dto.vehicle.manufacturer,

            model: dto.vehicle.model,

            year: dto.vehicle.year,

            registrationNumber: dto.vehicle.registrationNumber,

            lengthMeter: dto.vehicle.lengthMeter,

            widthMeter: dto.vehicle.widthMeter,

            speedKnots: dto.vehicle.speedKnots,

            fuelType: dto.vehicle.fuelType,

            condition: dto.vehicle.condition,

            // =====================
            // CAPACITY
            // =====================

            ...(dto.vehicle.capacity && {
              capacity: {
                create: {
                  guestCapacity: dto.vehicle.capacity.guestCapacity,

                  overnightCapacity: dto.vehicle.capacity.overnightCapacity,

                  cabinCount: dto.vehicle.capacity.cabinCount,

                  bathroomCount: dto.vehicle.capacity.bathroomCount,

                  crewCapacity: dto.vehicle.capacity.crewCapacity,
                },
              },
            }),

            // =====================
            // SPECIFICATION
            // =====================

            ...(dto.vehicle.specification && {
              specification: {
                create: {
                  enginePowerHp: dto.vehicle.specification.enginePowerHp,

                  cruisingSpeedKnots:
                    dto.vehicle.specification.cruisingSpeedKnots,

                  maxSpeedKnots: dto.vehicle.specification.maxSpeedKnots,

                  fuelCapacityLiter:
                    dto.vehicle.specification.fuelCapacityLiter,

                  rangeNm: dto.vehicle.specification.rangeNm,
                },
              },
            }),

            // =====================
            // VEHICLE IMAGES
            // =====================

            ...(dto.vehicle.images &&
              dto.vehicle.images.length > 0 && {
                images: {
                  create: dto.vehicle.images.map((image) => ({
                    url: image.url,

                    category: image.category,

                    isPrimary: image.isPrimary ?? false,

                    sortOrder: image.sortOrder,
                  })),
                },
              }),

            // =====================
            // FACILITIES
            // =====================

            ...(dto.vehicle.facilities && {
              facilities: {
                create: {
                  wifi: dto.vehicle.facilities.wifi,

                  bluetooth: dto.vehicle.facilities.bluetooth,

                  tv: dto.vehicle.facilities.tv,

                  soundSystem: dto.vehicle.facilities.soundSystem,

                  kitchen: dto.vehicle.facilities.kitchen,

                  refrigerator: dto.vehicle.facilities.refrigerator,

                  coffeeMachine: dto.vehicle.facilities.coffeeMachine,

                  bar: dto.vehicle.facilities.bar,

                  jacuzzi: dto.vehicle.facilities.jacuzzi,

                  swimmingPlatform: dto.vehicle.facilities.swimmingPlatform,

                  sunDeck: dto.vehicle.facilities.sunDeck,

                  airConditioning: dto.vehicle.facilities.airConditioning,

                  heating: dto.vehicle.facilities.heating,

                  shower: dto.vehicle.facilities.shower,

                  toilet: dto.vehicle.facilities.toilet,

                  fishingEquipment: dto.vehicle.facilities.fishingEquipment,

                  snorkelingEquipment:
                    dto.vehicle.facilities.snorkelingEquipment,

                  divingEquipment: dto.vehicle.facilities.divingEquipment,
                },
              },
            }),
            // =====================
            // SAFETY EQUIPMENT
            // =====================

            ...(dto.vehicle.safetyEquipment && {
              safetyEquipment: {
                create: {
                  lifeJacket: dto.vehicle.safetyEquipment.lifeJacket,

                  lifeRaft: dto.vehicle.safetyEquipment.lifeRaft,

                  fireExtinguisher:
                    dto.vehicle.safetyEquipment.fireExtinguisher,

                  fireAlarm: dto.vehicle.safetyEquipment.fireAlarm,

                  firstAidKit: dto.vehicle.safetyEquipment.firstAidKit,

                  gps: dto.vehicle.safetyEquipment.gps,

                  radar: dto.vehicle.safetyEquipment.radar,

                  emergencyRadio: dto.vehicle.safetyEquipment.emergencyRadio,

                  insurance: dto.vehicle.safetyEquipment.insurance,
                },
              },
            }),
          },
        },
      }), // =========================
      // AVAILABILITY
      // =========================

      ...(dto.availability && {
        availability: {
          create: {
            ...(dto.availability.calendar &&
              dto.availability.calendar.length > 0 && {
                calendar: {
                  create: dto.availability.calendar.map((item) => ({
                    date: item.date,

                    available: item.available,

                    booked: item.booked ?? false,

                    stopSell: item.stopSell ?? false,
                  })),
                },
              }),
          },
        },
      }),

      // =========================
      // ROUTES
      // =========================

      ...(dto.routes &&
        dto.routes.length > 0 && {
          routes: {
            create: dto.routes.map((route) => ({
              departureMarina: {
                connect: {
                  id: route.departureMarinaId,
                },
              },

              destinationMarina: {
                connect: {
                  id: route.destinationMarinaId,
                },
              },

              destinationName: route.destinationName,

              distanceNm: route.distanceNm,

              durationMinutes: route.durationMinutes,

              active: route.active ?? true,

              ...(route.stops &&
                route.stops.length > 0 && {
                  stops: {
                    create: route.stops.map((stop) => ({
                      name: stop.name,

                      ...(stop.addressId && {
                        address: {
                          connect: {
                            id: stop.addressId,
                          },
                        },
                      }),

                      stopDurationMinutes: stop.stopDurationMinutes,

                      order: stop.order,
                    })),
                  },
                }),
            })),
          },
        }),

      // =========================
      // TRIPS
      // =========================

      ...(dto.trips &&
        dto.trips.length > 0 && {
          trips: {
            create: dto.trips.map((trip) => ({
              ...(trip.routeId && {
                route: {
                  connect: {
                    id: trip.routeId,
                  },
                },
              }),

              departureTime: trip.departureTime,

              arrivalTime: trip.arrivalTime,

              status: trip.status,

              maxGuests: trip.maxGuests,

              ...(trip.schedule && {
                schedule: {
                  create: {
                    repeatType: trip.schedule.repeatType,

                    daysOfWeek: trip.schedule.daysOfWeek,

                    startDate: trip.schedule.startDate,

                    endDate: trip.schedule.endDate,

                    departureTime: trip.schedule.departureTime,
                  },
                },
              }),
            })),
          },
        }),
      // =========================
      // PRICE
      // =========================

      ...(dto.price && {
        price: {
          create: {
            pricingType: dto.price.pricingType,

            currency: dto.price.currency,

            ...(dto.price.basePrices &&
              dto.price.basePrices.length > 0 && {
                basePrices: {
                  create: dto.price.basePrices.map((price) => ({
                    name: price.name,

                    duration: price.duration,

                    durationType: price.durationType,

                    minGuests: price.minGuests,

                    maxGuests: price.maxGuests,

                    originalPrice: price.originalPrice,

                    includedItems: price.includedItems ?? [],
                  })),
                },
              }),

            ...(dto.price.fees &&
              dto.price.fees.length > 0 && {
                fees: {
                  create: dto.price.fees.map((fee) => ({
                    type: fee.type,

                    amount: fee.amount,

                    mandatory: fee.mandatory ?? false,

                    description: fee.description,
                  })),
                },
              }),

            ...(dto.price.discounts &&
              dto.price.discounts.length > 0 && {
                discounts: {
                  create: dto.price.discounts.map((discount) => ({
                    type: discount.type,

                    percentage: discount.percentage,

                    amount: discount.amount,

                    startDate: discount.startDate,

                    endDate: discount.endDate,

                    active: discount.active ?? true,
                  })),
                },
              }),
          },
        },
      }),

      // =========================
      // PACKAGES
      // =========================

      ...(dto.packages &&
        dto.packages.length > 0 && {
          packages: {
            create: dto.packages.map((pkg) => ({
              name: pkg.name,

              description: pkg.description,

              duration: pkg.duration,

              durationType: pkg.durationType,

              maxGuests: pkg.maxGuests,

              price: pkg.price,

              currency: pkg.currency,

              includedItems: pkg.includedItems ?? [],

              active: pkg.active ?? true,

              ...(pkg.images &&
                pkg.images.length > 0 && {
                  images: {
                    create: pkg.images.map((image) => ({
                      url: image.url,

                      sortOrder: image.sortOrder,
                    })),
                  },
                }),
            })),
          },
        }),

      // =========================
      // EXTRAS
      // =========================

      ...(dto.extras &&
        dto.extras.length > 0 && {
          extras: {
            create: dto.extras.map((extra) => ({
              name: extra.name,

              description: extra.description,

              category: extra.category,

              pricingType: extra.pricingType,

              price: extra.price,

              currency: extra.currency,

              active: extra.active ?? true,

              ...(extra.images &&
                extra.images.length > 0 && {
                  images: {
                    create: extra.images.map((image) => ({
                      url: image.url,

                      isPrimary: image.isPrimary ?? false,

                      sortOrder: image.sortOrder,
                    })),
                  },
                }),
            })),
          },
        }),
      // =========================
      // POLICIES
      // =========================

      ...(dto.policies && {
        policies: {
          create: {
            ...(dto.policies.cancellation && {
              cancellation: {
                create: {
                  refundable: dto.policies.cancellation.refundable,

                  freeCancellation: dto.policies.cancellation.freeCancellation,

                  freeCancellationBeforeHours:
                    dto.policies.cancellation.freeCancellationBeforeHours,

                  cancellationType: dto.policies.cancellation.cancellationType,

                  refundPercentage: dto.policies.cancellation.refundPercentage,

                  cancellationFee: dto.policies.cancellation.cancellationFee,

                  noShowFee: dto.policies.cancellation.noShowFee,
                },
              },
            }),

            ...(dto.policies.passenger && {
              passenger: {
                create: {
                  minimumAge: dto.policies.passenger.minimumAge,

                  passportRequired: dto.policies.passenger.passportRequired,

                  identityRequired: dto.policies.passenger.identityRequired,

                  nationalityRestriction:
                    dto.policies.passenger.nationalityRestriction ?? [],

                  childAllowed: dto.policies.passenger.childAllowed,

                  infantAllowed: dto.policies.passenger.infantAllowed,

                  pregnantPassengerAllowed:
                    dto.policies.passenger.pregnantPassengerAllowed,
                },
              },
            }),

            ...(dto.policies.luggage && {
              luggage: {
                create: {
                  allowed: dto.policies.luggage.allowed,

                  maxWeightKg: dto.policies.luggage.maxWeightKg,

                  maxPieces: dto.policies.luggage.maxPieces,

                  oversizedAllowed: dto.policies.luggage.oversizedAllowed,

                  note: dto.policies.luggage.note,
                },
              },
            }),

            ...(dto.policies.waiting && {
              waiting: {
                create: {
                  freeWaitingMinutes: dto.policies.waiting.freeWaitingMinutes,

                  extraWaitingFeePerHour:
                    dto.policies.waiting.extraWaitingFeePerHour,

                  maximumWaitingHours: dto.policies.waiting.maximumWaitingHours,
                },
              },
            }),

            ...(dto.policies.meetAndGreet && {
              meetAndGreet: {
                create: {
                  available: dto.policies.meetAndGreet.available,

                  pickupSign: dto.policies.meetAndGreet.pickupSign,

                  staffLanguage: dto.policies.meetAndGreet.staffLanguage ?? [],

                  meetingPoint: dto.policies.meetAndGreet.meetingPoint,
                },
              },
            }),

            ...(dto.policies.flightSupport && {
              flightSupport: {
                create: {
                  airportPickup: dto.policies.flightSupport.airportPickup,

                  flightNumberRequired:
                    dto.policies.flightSupport.flightNumberRequired,

                  flightDelayMonitoring:
                    dto.policies.flightSupport.flightDelayMonitoring,
                },
              },
            }),

            ...(dto.policies.booking && {
              booking: {
                create: {
                  instantConfirmation: dto.policies.booking.instantConfirmation,

                  advanceBookingHours: dto.policies.booking.advanceBookingHours,

                  minimumBookingDuration:
                    dto.policies.booking.minimumBookingDuration,

                  modificationAllowed: dto.policies.booking.modificationAllowed,
                },
              },
            }),
          },
        },
      }),

      // =========================
      // NOTICE
      // =========================

      ...(dto.notice && {
        notice: {
          create: {
            important: dto.notice.important,

            beforeBooking: dto.notice.beforeBooking,

            afterBooking: dto.notice.afterBooking,

            safetyNotice: dto.notice.safetyNotice,
          },
        },
      }),

      // =========================
      // CREW
      // =========================

      ...(dto.crew &&
        dto.crew.length > 0 && {
          crew: {
            create: dto.crew.map((crew) => ({
              name: crew.name,

              role: crew.role,

              avatar: crew.avatar,

              experienceYears: crew.experienceYears,

              languages: crew.languages ?? [],
            })),
          },
        }),

      // =========================
      // RATING SUMMARY
      // =========================

      ...(dto.ratingSummary && {
        ratingSummary: {
          create: {
            totalReviews: dto.ratingSummary.totalReviews,

            averageRating: dto.ratingSummary.averageRating,

            captain: dto.ratingSummary.captain,

            crew: dto.ratingSummary.crew,

            safety: dto.ratingSummary.safety,
          },
        },
      }),
    };
  }
}

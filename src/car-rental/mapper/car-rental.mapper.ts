import { Prisma } from '@prisma/client';
import { CreateCarRentalDto } from '../dto/create-car-rental.dto';

export class CarRentalMapper {
  static toCreateInput(dto: CreateCarRentalDto): Prisma.CarRentalCreateInput {
    return {
      // -----------------------------------------------------
      // BASIC
      // -----------------------------------------------------

      providerBooking: {
        connect: {
          id: dto.providerBookingId,
        },
      },

      driverOption: dto.driverOption,

      name: dto.name,

      slug: dto.slug,

      aliases: dto.aliases ?? [],

      keywords: dto.keywords ?? [],

      searchText: dto.searchText,

      featured: dto.featured ?? false,

      active: dto.active ?? true,

      searchPriority: dto.searchPriority ?? 0,

      // -----------------------------------------------------
      // TRIP
      // -----------------------------------------------------

      trip: dto.trip
        ? {
            create: {
              locations: dto.trip.locations
                ? {
                    create: dto.trip.locations.map((location) => ({
                      type: location.type,
                      name: location.name,

                      address: {
                        connect: {
                          id: location.addressId,
                        },
                      },

                      available: location.available ?? true,
                    })),
                  }
                : undefined,

              schedule: dto.trip.schedule
                ? {
                    create: {
                      ...dto.trip.schedule,
                    },
                  }
                : undefined,

              tripFee: dto.trip.tripFee
                ? {
                    create: {
                      ...dto.trip.tripFee,
                    },
                  }
                : undefined,
            },
          }
        : undefined,

      // -----------------------------------------------------
      // POLICIES
      // -----------------------------------------------------

      policies: dto.policies
        ? {
            create: {
              minimumDriverAge: dto.policies.minimumDriverAge,

              minimumLicenseYears: dto.policies.minimumLicenseYears,

              depositAmount: dto.policies.depositAmount,

              fuelPolicy: dto.policies.fuelPolicy,

              mileage: dto.policies.mileage
                ? {
                    create: {
                      ...dto.policies.mileage,
                    },
                  }
                : undefined,

              cancellation: dto.policies.cancellation
                ? {
                    create: {
                      ...dto.policies.cancellation,
                    },
                  }
                : undefined,

              rules: dto.policies.rules
                ? {
                    create: {
                      ...dto.policies.rules,
                    },
                  }
                : undefined,

              requiredDocuments: dto.policies.requiredDocuments
                ? {
                    create: {
                      documents: dto.policies.requiredDocuments.documents,
                    },
                  }
                : undefined,

              damagePolicy: dto.policies.damagePolicy
                ? {
                    create: {
                      ...dto.policies.damagePolicy,
                    },
                  }
                : undefined,
            },
          }
        : undefined,

      // -----------------------------------------------------
      // VEHICLES
      // -----------------------------------------------------

      vehicle: dto.vehicle
        ? {
            create: dto.vehicle.map((vehicle) => ({
              type: vehicle.type,

              active: vehicle.active ?? true,

              status: vehicle.status,

              brand: vehicle.brand,

              model: vehicle.model,

              year: vehicle.year,

              color: vehicle.color,

              licensePlate: vehicle.licensePlate,

              transmission: vehicle.transmission,

              fuelType: vehicle.fuelType,

              fuelCapacityLiters: vehicle.fuelCapacityLiters,

              mileageKm: vehicle.mileageKm,

              mileageLimitPerDay: vehicle.mileageLimitPerDay,

              unlimitedMileage: vehicle.unlimitedMileage ?? false,

              capacity: vehicle.capacity
                ? {
                    create: {
                      ...vehicle.capacity,
                    },
                  }
                : undefined,

              features: vehicle.features
                ? {
                    create: {
                      ...vehicle.features,
                    },
                  }
                : undefined,

              specification: vehicle.specification
                ? {
                    create: {
                      ...vehicle.specification,
                    },
                  }
                : undefined,

              locationCurrent: vehicle.locationCurrent
                ? {
                    create: {
                      ...vehicle.locationCurrent,
                    },
                  }
                : undefined,

              price: vehicle.price
                ? {
                    create: vehicle.price.map((price) => ({
                      ...price,

                      breakdown: price.breakdown
                        ? {
                            create: {
                              ...price.breakdown,
                            },
                          }
                        : undefined,

                      priceRules: price.priceRules
                        ? {
                            create: price.priceRules.map((rule) => ({
                              ...rule,

                              startDate: rule.startDate
                                ? new Date(rule.startDate)
                                : undefined,

                              endDate: rule.endDate
                                ? new Date(rule.endDate)
                                : undefined,
                            })),
                          }
                        : undefined,

                      startDate: price.startDate
                        ? new Date(price.startDate)
                        : undefined,

                      endDate: price.endDate
                        ? new Date(price.endDate)
                        : undefined,
                    })),
                  }
                : undefined,

              images: vehicle.images
                ? {
                    create: vehicle.images.map((image) => ({
                      ...image,
                    })),
                  }
                : undefined,

              maintenance: vehicle.maintenance
                ? {
                    create: vehicle.maintenance.map((item) => ({
                      ...item,

                      serviceDate: item.serviceDate
                        ? new Date(item.serviceDate)
                        : undefined,
                    })),
                  }
                : undefined,

              document: vehicle.document
                ? {
                    create: vehicle.document.map((doc) => ({
                      ...doc,

                      expiryDate: doc.expiryDate
                        ? new Date(doc.expiryDate)
                        : undefined,
                    })),
                  }
                : undefined,
            })),
          }
        : undefined,

      // -----------------------------------------------------
      // IMAGES
      // -----------------------------------------------------

      images: dto.images
        ? {
            create: dto.images.map((image) => ({
              ...image,
            })),
          }
        : undefined,

      // -----------------------------------------------------
      // REVIEWS
      // -----------------------------------------------------

      reviews: dto.reviews
        ? {
            create: dto.reviews.map((review) => ({
              ...review,

              rentalDate: review.rentalDate
                ? new Date(review.rentalDate)
                : undefined,

              responseAt: review.responseAt
                ? new Date(review.responseAt)
                : undefined,

              images: review.images
                ? {
                    create: review.images.map((img) => ({
                      ...img,
                    })),
                  }
                : undefined,
            })),
          }
        : undefined,

      // -----------------------------------------------------
      // EXTRAS
      // -----------------------------------------------------

      extras: dto.extras
        ? {
            create: dto.extras.map((extra) => ({
              ...extra,

              prices: extra.prices
                ? {
                    create: extra.prices.map((price) => ({
                      ...price,

                      startDate: price.startDate
                        ? new Date(price.startDate)
                        : undefined,

                      endDate: price.endDate
                        ? new Date(price.endDate)
                        : undefined,
                    })),
                  }
                : undefined,
            })),
          }
        : undefined,

      // -----------------------------------------------------
      // INSURANCE
      // -----------------------------------------------------

      insurances: dto.insurances
        ? {
            create: dto.insurances.map((item) => ({
              ...item,

              benefits: item.benefits
                ? {
                    create: item.benefits.map((benefit) => ({
                      ...benefit,
                    })),
                  }
                : undefined,
            })),
          }
        : undefined,

      // -----------------------------------------------------
      // BUSINESS HOURS
      // -----------------------------------------------------

      businessHours: dto.businessHours
        ? {
            create: dto.businessHours.map((hour) => ({
              ...hour,
            })),
          }
        : undefined,

      // -----------------------------------------------------
      // PICKUP INSTRUCTIONS
      // -----------------------------------------------------

      pickupInstructions: dto.pickupInstructions
        ? {
            create: dto.pickupInstructions.map((item) => ({
              ...item,
            })),
          }
        : undefined,

      // -----------------------------------------------------
      // DRIVERS
      // -----------------------------------------------------

      drivers: dto.drivers
        ? {
            create: dto.drivers.map((driver) => ({
              ...driver,

              languages: driver.languages ?? [],
            })),
          }
        : undefined,
    };
  }
}

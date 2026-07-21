import { PrismaNested } from 'common/prisma/prisma-nested.util';
import { CreateProviderBookingDto } from '../dto/create-provider-booking.dto';

export const mapCreateProviderBooking = (dto: CreateProviderBookingDto) => {
  return {
    officialName: dto.officialName,

    displayName: dto.displayName,

    shortName: dto.shortName,

    logo: dto.logo,

    banner: dto.banner,

    subtitle: dto.subtitle,

    description: dto.description,

    companyType: dto.companyType,

    registrationNumber: dto.registrationNumber,

    taxCode: dto.taxCode,

    foundedYear: dto.foundedYear,

    employeeCount: dto.employeeCount,

    email: dto.email,

    phone: dto.phone,

    hotline: dto.hotline,

    website: dto.website,

    city: dto.city,

    state: dto.state,

    country: dto.country,

    postalCode: dto.postalCode,

    latitude: dto.latitude,

    longitude: dto.longitude,

    facebook: dto.facebook,

    instagram: dto.instagram,

    youtube: dto.youtube,

    linkedin: dto.linkedin,

    verified: dto.verified,

    status: dto.status,

    operatingStatus: dto.operatingStatus,

    licenseNumber: dto.licenseNumber,

    service: dto.service,

    user: PrismaNested.connect(dto.userId),
  };
};

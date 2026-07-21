import { Prisma } from '@prisma/client';
import { CreateCurrencyDto } from '../dto/create-currency.dto';

export class CurrencyMapper {
  static toCreate(dto: CreateCurrencyDto): Prisma.CurrencyCreateInput {
    return {
      code: dto.code,
      numericCode: dto.numericCode,
      symbol: dto.symbol,
      symbolNative: dto.symbolNative,
      name: dto.name,
      nativeName: dto.nativeName,
      decimalDigits: dto.decimalDigits,
      rounding: dto.rounding,
      flagEmoji: dto.flagEmoji,
      locale: dto.locale,
      active: dto.active,
      isDefault: dto.isDefault,
    };
  }

  static toUpdate(dto: Partial<CreateCurrencyDto>): Prisma.CurrencyUpdateInput {
    return {
      ...(dto.code !== undefined && { code: dto.code }),
      ...(dto.numericCode !== undefined && {
        numericCode: dto.numericCode,
      }),
      ...(dto.symbol !== undefined && {
        symbol: dto.symbol,
      }),
      ...(dto.symbolNative !== undefined && {
        symbolNative: dto.symbolNative,
      }),
      ...(dto.name !== undefined && {
        name: dto.name,
      }),
      ...(dto.nativeName !== undefined && {
        nativeName: dto.nativeName,
      }),
      ...(dto.decimalDigits !== undefined && {
        decimalDigits: dto.decimalDigits,
      }),
      ...(dto.rounding !== undefined && {
        rounding: dto.rounding,
      }),
      ...(dto.flagEmoji !== undefined && {
        flagEmoji: dto.flagEmoji,
      }),
      ...(dto.locale !== undefined && {
        locale: dto.locale,
      }),
      ...(dto.active !== undefined && {
        active: dto.active,
      }),
      ...(dto.isDefault !== undefined && {
        isDefault: dto.isDefault,
      }),
    };
  }
}

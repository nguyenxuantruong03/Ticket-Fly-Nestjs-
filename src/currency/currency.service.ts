import { Injectable } from '@nestjs/common';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CurrencyMapper } from './mapper/currency-mapper';

@Injectable()
export class CurrencyService {
  constructor(private readonly prisma: PrismaService) {}
  create(createCurrencyDto: CreateCurrencyDto) {
    return this.prisma.currency.create({
      data: CurrencyMapper.toCreate(createCurrencyDto),
    });
  }

  findAll() {
    return this.prisma.currency.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} currency`;
  }

  update(id: number, updateCurrencyDto: UpdateCurrencyDto) {
    return `This action updates a #${id} currency`;
  }

 async remove(id: string) {
    return this.prisma.currency.delete({
      where: {
        id,
      },
    });
  }
}

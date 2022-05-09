import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/database/prisma/prisma.service';

interface CreateCustomerParams {
  authUserId: string;
}

@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {}

  getCustumerByAuthUserId(id: string) {
    return this.prisma.customer.findUnique({ where: { authUserId: id } });
  }

  async createCustomer({ authUserId }: CreateCustomerParams) {
    console.log('oiii', authUserId);
    return this.prisma.customer.create({
      data: {
        authUserId,
      },
    });
  }
}

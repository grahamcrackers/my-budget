import { Injectable } from "@nestjs/common";
import { Account, Prisma } from "@prisma/client";
import { PrismaService } from "nestjs-prisma";

@Injectable()
export class AccountService {
    constructor(private prisma: PrismaService) {}

    async create(data: Prisma.AccountCreateInput): Promise<Account> {
        return this.prisma.account.create({ data });
    }

    async findAll(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.AccountWhereUniqueInput;
        where?: Prisma.AccountWhereInput;
        orderBy?: Prisma.AccountOrderByWithRelationInput;
    }): Promise<Account[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.account.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async findOne(accountWhereUniqueInput: Prisma.AccountWhereUniqueInput): Promise<Account | null> {
        return this.prisma.account.findUnique({
            where: accountWhereUniqueInput,
        });
    }

    async update(params: { where: Prisma.AccountWhereUniqueInput; data: Prisma.AccountUpdateInput }): Promise<Account> {
        const { where, data } = params;
        return this.prisma.account.update({ data, where });
    }

    async remove(where: Prisma.AccountWhereUniqueInput): Promise<Account> {
        return this.prisma.account.delete({ where });
    }
}

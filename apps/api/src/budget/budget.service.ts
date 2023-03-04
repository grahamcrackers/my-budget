import { Injectable } from "@nestjs/common";
import { Budget, Prisma } from "@prisma/client";
import { PrismaService } from "nestjs-prisma";

@Injectable()
export class BudgetService {
    constructor(private prisma: PrismaService) {}

    async create(data: Prisma.BudgetCreateInput): Promise<Budget> {
        return this.prisma.budget.create({ data });
    }

    async findAll(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.BudgetWhereUniqueInput;
        where?: Prisma.BudgetWhereInput;
        orderBy?: Prisma.BudgetOrderByWithRelationInput;
    }): Promise<Budget[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.budget.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async findOne(budgetWhereUniqueInput: Prisma.BudgetWhereUniqueInput): Promise<Budget | null> {
        return this.prisma.budget.findUnique({
            where: budgetWhereUniqueInput,
        });
    }

    async update(params: { where: Prisma.BudgetWhereUniqueInput; data: Prisma.BudgetUpdateInput }): Promise<Budget> {
        const { where, data } = params;
        return this.prisma.budget.update({ data, where });
    }

    async remove(where: Prisma.BudgetWhereUniqueInput): Promise<Budget> {
        return this.prisma.budget.delete({ where });
    }
}

import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Budget as BudgetModel, Prisma } from "@prisma/client";
import { User, UserToken } from "../common";
import { BudgetService } from "./budget.service";
import { CreateWithUser } from "../common/decorators/create-with-user.decorator";
import { UpdateWithUser } from "../common/decorators/update-with-user.decorator";

@Controller("budgets")
export class BudgetController {
    constructor(private readonly budgetService: BudgetService) {}

    @Post()
    async create(@CreateWithUser() data: Prisma.BudgetCreateInput) {
        return this.budgetService.create(data);
    }

    @Get()
    async findAll() {
        return this.budgetService.findAll({});
    }

    @Get(":id")
    async findOneById(@Param("id") id: string): Promise<BudgetModel> {
        return this.budgetService.findOne({ id });
    }

    @Patch(":id")
    update(@Param("id") id: string, @UpdateWithUser() data: Prisma.BudgetUpdateInput) {
        return this.budgetService.update({ where: { id }, data });
    }

    @Delete(":id")
    async remove(@Param("id") id: string): Promise<BudgetModel> {
        return this.budgetService.remove({ id });
    }
}

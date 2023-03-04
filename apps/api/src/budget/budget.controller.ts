import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { BudgetService } from "./budget.service";
import { CreateBudgetDto } from "./dto/create-budget.dto";
import { UpdateBudgetDto } from "./dto/update-budget.dto";
import { Budget as BudgetModel, Prisma } from "@prisma/client";

@Controller("budgets")
export class BudgetController {
    constructor(private readonly budgetService: BudgetService) {}

    @Post()
    create(@Body() createBudgetDto: Prisma.BudgetCreateInput) {
        return this.budgetService.create(createBudgetDto);
    }

    @Get()
    findAll() {
        return this.budgetService.findAll({});
    }

    @Get(":id")
    async findOneById(@Param("id") id: string): Promise<BudgetModel> {
        return this.budgetService.findOne({ id });
    }

    // @Patch(":id")
    // update(@Param("id") id: string, @Body() updateBudgetDto: UpdateBudgetDto) {
    //     return this.budgetService.update(+id, updateBudgetDto);
    // }

    @Delete(":id")
    async remove(@Param("id") id: string): Promise<BudgetModel> {
        return this.budgetService.remove({ id });
    }
}

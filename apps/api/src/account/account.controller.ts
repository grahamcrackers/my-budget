import { Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Account as AccountModel, Prisma } from "@prisma/client";
import { CreateWithUser } from "../common/decorators/create-with-user.decorator";
import { UpdateWithUser } from "../common/decorators/update-with-user.decorator";
import { AccountService } from "./account.service";

@Controller("accounts")
export class AccountController {
    constructor(private readonly accountService: AccountService) {}

    @Post()
    async create(@CreateWithUser() data: Prisma.AccountCreateInput) {
        return this.accountService.create(data);
    }

    @Get()
    async findAll() {
        return this.accountService.findAll({});
    }

    @Get(":id")
    async findOneById(@Param("id") id: string): Promise<AccountModel> {
        return this.accountService.findOne({ id });
    }

    @Patch(":id")
    update(@Param("id") id: string, @UpdateWithUser() data: Prisma.AccountUpdateInput) {
        return this.accountService.update({ where: { id }, data });
    }

    @Delete(":id")
    async remove(@Param("id") id: string): Promise<AccountModel> {
        return this.accountService.remove({ id });
    }
}

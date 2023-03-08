import { Module } from "@nestjs/common";
import { PrismaModule, PrismaService } from "nestjs-prisma";
import { AppController } from "./app.controller";

import { AuthModule } from "./auth/auth.module";
import { BudgetModule } from "./budget/budget.module";
import { UserService } from "./user/user.service";

@Module({
    imports: [PrismaModule.forRoot({ isGlobal: true }), AuthModule, BudgetModule],
    controllers: [AppController],
    providers: [PrismaService, UserService],
})
export class AppModule {}

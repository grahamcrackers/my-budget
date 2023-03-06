import { Module } from "@nestjs/common";
import { PrismaModule, PrismaService } from "nestjs-prisma";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { BudgetModule } from "./budget/budget.module";
import { UserService } from "./user/user.service";
import { PassportModule } from "@nestjs/passport";
import { AuthModule } from "./auth/auth.module";

@Module({
    imports: [PrismaModule.forRoot({ isGlobal: true }), AuthModule, BudgetModule],
    controllers: [AppController],
    providers: [AppService, PrismaService, UserService],
})
export class AppModule {}

import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { APP_GUARD } from "@nestjs/core";
import { PrismaModule, PrismaService } from "nestjs-prisma";
import { AppController } from "./app.controller";
import { AuthModule } from "./auth.module";
import { BudgetModule } from "./budget/budget.module";
import { JwtAuthGuard } from "./common";
import { UserService } from "./user/user.service";
import { AccountModule } from "./account/account.module";

@Module({
    imports: [
        ConfigModule.forRoot(),
        PrismaModule.forRoot({ isGlobal: true }),
        AuthModule,
        BudgetModule,
        AccountModule,
    ],
    controllers: [AppController],
    providers: [
        PrismaService,
        UserService,
        // globally protect all routes with jwt guard
        {
            provide: APP_GUARD,
            useClass: JwtAuthGuard,
        },
    ],
})
export class AppModule {}

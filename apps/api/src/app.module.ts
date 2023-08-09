import { Logger, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { APP_GUARD } from "@nestjs/core";
import { PrismaModule, PrismaService, loggingMiddleware } from "nestjs-prisma";
import { AppController } from "./app.controller";
import { AuthModule } from "./auth.module";
import { BudgetModule } from "./budget/budget.module";
import { JwtAuthGuard } from "./common";
import { UserService } from "./user/user.service";
import { AccountModule } from "./account/account.module";

// const logger = new Logger();

@Module({
    imports: [
        ConfigModule.forRoot(),
        PrismaModule.forRoot({
            isGlobal: true,
            prismaServiceOptions: {
                middlewares: [
                    async (params, next) => {
                        // // Before query: change params
                        // logger.log(params);
                        // const result = await next(params);
                        // logger.log(result);
                        // // After query: result
                        // return result;
                    },
                    // loggingMiddleware()
                ],
            },
        }),
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

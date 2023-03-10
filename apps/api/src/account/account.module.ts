import { Module } from "@nestjs/common";
import { AccountController } from "./account.controller";
import { AccountService } from "./account.service";
import { PrismaService } from "nestjs-prisma";

@Module({
    controllers: [AccountController],
    providers: [AccountService, PrismaService],
})
export class AccountModule {}

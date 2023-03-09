import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { JwtStrategy } from "./common";

@Module({
    imports: [PassportModule.register({ defaultStrategy: "jwt" })],
    providers: [JwtStrategy],
    exports: [PassportModule],
})
export class AuthModule {}

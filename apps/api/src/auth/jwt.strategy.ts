import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import { passportJwtSecret } from "jwks-rsa";

// TODO: use a config service
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            secretOrKeyProvider: passportJwtSecret({
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: `${process.env.JWT_ISSUER}/protocol/openid-connect/certs`,
            }),
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            audience: process.env.JWT_AUDIENCE, // not sure if this is right????
            issuer: process.env.JWT_ISSUER,
            ignoreExpiration: false,
        });
    }

    // return the oidc user payload
    async validate(payload: any) {
        return payload;
    }
}

import { createParamDecorator, ExecutionContext } from "@nestjs/common";

import { KeycloakTokenParsed } from "keycloak-js";

export type UserToken = KeycloakTokenParsed;

export const User = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user as UserToken;
});

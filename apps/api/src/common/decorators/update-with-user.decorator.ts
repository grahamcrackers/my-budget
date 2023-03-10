import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { OidcRequest } from "../../types";

/**
 * A custom decorator that takes the user id from the user object on request and adds it to the body.
 * This should only be used on entities that contain update audit fields (updated, updatedBy).
 */
export const UpdateWithUser = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
    console.log(data);
    const request = ctx.switchToHttp().getRequest<OidcRequest>();
    const { body, user } = request;

    // we only want to update
    body.updatedBy = user.sub;

    return body;
});

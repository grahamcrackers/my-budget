import { UserToken } from "./user-token";
import { Request } from "express";

/** adds the oidc user type to express's user */
export type OidcRequest = Omit<Request, "user"> & { user: UserToken };

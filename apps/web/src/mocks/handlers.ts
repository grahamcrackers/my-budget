import { rest } from "msw";
import { categories, groups } from "@my-budget/mocks";

// well.... i dunno why, but the bundled version of the mocks doesn't want to work?
// it definately has something to do with commonjs/esm packaging

export const handlers = [
    // Handles a POST /login request
    // rest.post('/login', null),

    // Handles a GET /user request
    rest.get("/user", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ username: "graham" }));
    }),

    rest.get("/groups", (req, res, ctx) => {
        console.log(groups);
        return res(ctx.status(200), ctx.json(groups));
    }),

    rest.get("/categories", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(categories));
    }),
];

import { rest } from "msw";

export const handlers = [
  rest.post("/signIn", (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];

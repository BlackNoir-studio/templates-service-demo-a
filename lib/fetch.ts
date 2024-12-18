import { createFetch, createSchema } from "@better-fetch/fetch";
import { z } from "zod";

export const schema = createSchema({
  "/settings": {
    output: z.any(),
  },
});

const $fetch = createFetch({
  baseURL: process.env.DIRECTUS_WEB_URL,
  auth: {
    type: "Bearer",
    token: process.env.DIRECTUS_API_KEY,
  },
  schema: schema,
  strict: true,
  throw: true,
});

export default $fetch;

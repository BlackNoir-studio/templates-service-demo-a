import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  prerender: true,
  basename: process.env.BASE_URL || "/",
} satisfies Config;

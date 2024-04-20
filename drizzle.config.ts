import type { Config } from "drizzle-kit";
export default {
  schema: "./app/config/schema.ts",
  out: "./drizzle",
} satisfies Config;
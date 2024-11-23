import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "sqlite",
  out: "./drizzle",
  schema: "./drizzle/schema.ts",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});

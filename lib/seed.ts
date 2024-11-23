import { db } from "./db";
import { todos } from "@/drizzle/schema";

async function seed() {
  const user: typeof todos.$inferInsert = {
    title: "Learn Next.js",
  };

  await db.insert(todos).values(user);
  console.log("Seed data inserted");
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});

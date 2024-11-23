import { db } from "./db";
import { todos } from "@/drizzle/schema";

async function deleteData() {
  await db.delete(todos);
  console.log("Seed data deleted");
}

deleteData().catch((e) => {
  console.error(e);
  process.exit(1);
});

"use server";

import { todos } from "@/drizzle/schema";
import { db } from "@/lib/db";

export async function getTodos() {
  return await db.select().from(todos);
}

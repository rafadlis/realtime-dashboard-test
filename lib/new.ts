"use server";

import { insertTodoSchema } from "@/drizzle/schema";
import { db } from "@/lib/db";
import { todos } from "@/drizzle/schema";

export async function insertTodo(title: string) {
  const data = await db
    .insert(todos)
    .values(insertTodoSchema.parse({ title }))
    .returning();
  return data;
}

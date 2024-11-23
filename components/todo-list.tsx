"use client";

import useSWR from "swr";
import { getTodos } from "@/lib/get";

export function TodoList() {
  const { data } = useSWR("/api/todos", getTodos);
  return (
    <main>
      {data?.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </main>
  );
}

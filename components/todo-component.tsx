"use client";

import { TodoForm } from "./todo-form";
import { TodoList } from "./todo-list";
import useSWR from "swr";
import { getTodos } from "@/lib/get";
export function TodoComponent() {
  const { data } = useSWR("/api/todos", getTodos, { refreshInterval: 1 });
  return (
    <div>
      <TodoForm />
      <TodoList data={data ?? []} />
    </div>
  );
}

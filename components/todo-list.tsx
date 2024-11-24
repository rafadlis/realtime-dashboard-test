"use client";
import useSWR from "swr";
import { getTodos } from "@/lib/get";

export function TodoList() {
  const { data, isLoading, error } = useSWR("/api/todos", getTodos, {
    refreshInterval: 1000,
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return null;
  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

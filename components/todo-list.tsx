import { todos } from "@/drizzle/schema";

export function TodoList({ data }: { data: (typeof todos.$inferSelect)[] }) {
  return (
    <ul>
      {data?.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

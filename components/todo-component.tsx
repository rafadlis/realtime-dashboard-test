import { Suspense } from "react";
import { TodoForm } from "./todo-form";
import { TodoList } from "./todo-list";

export function TodoComponent() {
  return (
    <div>
      <TodoForm />
      <Suspense fallback={<div>Loading...</div>}>
        <TodoList />
      </Suspense>
    </div>
  );
}

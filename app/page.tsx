import { TodoForm } from "@/components/todo-form";
import { TodoList } from "@/components/todo-list";

export default function Home() {
  return (
    <div className="max-w-screen-md">
      <TodoForm />
      <TodoList />
    </div>
  );
}

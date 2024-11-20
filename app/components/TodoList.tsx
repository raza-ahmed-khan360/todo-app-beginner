import React from "react";
import { Todo } from "./TodoApp";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todos: Todo[];
  editItem: (id: number) => void;
  delItem: (id: number) => void;
};

export default function TodoList({ todos, editItem, delItem }: TodoListProps) {
  return (
    <div>
      <h2 className="text-center font-bold text-blue-900 sm:text-[32px] text-[28px] md:text-[38px] lg:text-[40px] my-4">Task List</h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mt-5 gap-5 grid-cols-1 ">
      {todos.map((item) => (
        <TodoItem key={item.id} todo={item} editItem={editItem} delItem={delItem} />
      ))}
    </div>
    </div>
  );
}

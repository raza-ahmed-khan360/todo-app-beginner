import React from "react";
import { Todo } from "./TodoApp";

type TodoItemProps = {
  todo: Todo;
  editItem: (id: number) => void;
  delItem: (id: number) => void;
};

export default function TodoItem({ todo, editItem, delItem }: TodoItemProps) {
  return (
    <div className="shadow-lg w-full bg-blue-200 rounded-lg p-4 transform hover:scale-110 transition-transform duration-200">
      <div className="flex justify-between text-lg">
        <span className="shadow-lg rounded-full bg-white h-8 text-center w-8 my-auto">
          {todo.id}
        </span>
        <span
          onClick={() => delItem(todo.id)}
          className="shadow-lg rounded-full h-8 bg-white text-center text-red-600 hover:text-white hover:bg-red-600 font-bold w-8 cursor-pointer"
        >
          X
        </span>
      </div>
      <div className="mt-5 sm:text-[22px] text-[18px] md:text-[28px] lg:text-[32px] text-blue-900">{todo.item}</div>
      <div className="text-right" >
        <button
          onClick={() => editItem(todo.id)}
          className="cursor-pointer hover:underline text-blue-600"
        >
          Edit
        </button>
      </div>
    </div>
  );
}

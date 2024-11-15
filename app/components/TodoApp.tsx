import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export type Todo = {
  id: number;
  item: string;
};

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, item: "Do the laundry" },
    { id: 2, item: "Clean the dishes" },
    { id: 3, item: "Take out the trash" },
    { id: 4, item: "Grocery shopping" },
    { id: 5, item: "Mow the lawn" },
    { id: 6, item: "Water the garden" },
  ]);

  const [inputVal, setInput] = useState("");
  const [id, setId] = useState<number | null>(null);

  const addItem = () => {
    if (inputVal.trim() === "") return;

    if (id !== null) {
      const newTodos = todos.map((item) =>
        item.id === id ? { ...item, item: inputVal } : item
      );
      setTodos(newTodos);
    } else {
      const newId = todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1;
      setTodos([...todos, { id: newId, item: inputVal }]);
    }

    setInput("");
    setId(null);
  };

  const editItem = (id: number) => {
    const obj = todos.find((item) => item.id === id);
    if (obj) {
      setInput(obj.item);
      setId(obj.id);
    }
  };

  const delItem = (id: number) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-center font-bold text-blue-900 text-[40px]">Chore App</h1>
      <TodoForm
        inputVal={inputVal}
        setInput={setInput}
        addItem={addItem}
        id={id}
      />
      <TodoList todos={todos} editItem={editItem} delItem={delItem} />
    </div>
  );
}

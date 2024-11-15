import React from "react";

type TodoFormProps = {
  inputVal: string;
  setInput: (value: string) => void;
  addItem: () => void;
  id: number | null;
};

export default function TodoForm({
  inputVal,
  setInput,
  addItem,
  id,
}: TodoFormProps) {
  return (
    <div className="flex mt-5 sm:flex-row flex-col justify-center gap-4">
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInput(e.target.value)}
        className="p-2 text-lg border-b rounded-lg shadow-md focus:outline-none  w-full sm:w-[70%]"
        placeholder="Enter chore name"
      />
      <button
        onClick={addItem}
        className="w-full sm:w-[20%] hover:bg-white hover:text-blue-800 bg-blue-800 text-white p-2 rounded-md transform hover:scale-110 hover:font-bold transition-transform duration-200"
      >
        {id ? "Update Chore" : "Add Chore"}
      </button>
    </div>
  );
}

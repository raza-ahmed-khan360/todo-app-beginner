"use client";
import React from "react";
import TodoApp from "./components/TodoApp"; 

export default function HomePage() {
  return (
    <main className="flex items-center justify-center min-h-screen font-serif bg-blue-50">
      <TodoApp />
    </main>
  );
}

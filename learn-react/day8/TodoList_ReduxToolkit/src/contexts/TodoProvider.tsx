import React, { useMemo, useState } from "react";
import { TodoContext, TodoActionContext } from "./todoContext";

export default function TodoProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [items, setItems] = useState<Todo[]>([]);
  const addTodo = (text: string) => {
    const uuid = (
      Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
    ).toUpperCase();
    setItems((items) => [...items, { id: uuid, text, completed: false }]);
  };
  const toggleTodo = (id: string) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };
  const deleteTodo = (id: string) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  const updateTodo = (id: string, text: string) => {
    setItems((items) =>
      items.map((item) => (item.id === id ? { ...item, text } : item))
    );
  };

  const memoizationProvider = useMemo(
    () => ({ addTodo, toggleTodo, deleteTodo, updateTodo }),
    []
  );
  return (
    <>
      <TodoActionContext value={memoizationProvider}>
        <TodoContext value={{ items }}>{children}</TodoContext>
      </TodoActionContext>
    </>
  );
}

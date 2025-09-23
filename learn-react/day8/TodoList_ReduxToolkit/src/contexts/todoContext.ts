import { createContext } from "react";

type TodoActionContextType = {
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, text: string) => void;
};
export const TodoActionContext = createContext<TodoActionContextType | null>(
  null
);

type TodoContextType = {
  items: Todo[];
};
export const TodoContext = createContext<TodoContextType | null>(null);

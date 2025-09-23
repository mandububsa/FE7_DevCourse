// 커스텀 훅

import { useContext } from "react";
import { TodoActionContext, TodoContext } from "./todoContext";

// use***

export function useTodoContext() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error(
      `useTodoContext()는 TodoProvider 영역에서만 사용할 수 있습니다.`
    );
  }
  return context;
}

export function useTodoActionContext() {
  const context = useContext(TodoActionContext);
  if (!context) {
    throw new Error(
      `useTodoActionContext()는 TodoProvider 영역에서만 사용할 수 있습니다.`
    );
  }
  return context;
}

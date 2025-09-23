import { store } from "../store/store";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import { Provider } from "react-redux";

export default function Todo() {
  return (
    <Provider store={store}>
      <div className="todo">
        <TodoHeader />
        {/* 할 일 등록  */}
        <TodoEditor />
        {/* 할 일 목록  */}
        <TodoList />
      </div>
    </Provider>
  );
}

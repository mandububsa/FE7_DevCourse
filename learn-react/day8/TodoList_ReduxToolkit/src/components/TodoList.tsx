import { useSelector } from "react-redux";
import TodoListEmpty from "./TodoListEmpty";
import TodoListItem from "./TodoListItem";
import { RootState } from "../store/store";

export default function TodoList() {
  const items = useSelector((state: RootState) => state.todo.items);
  return (
    <>
      <ul className="todo__list">
        {/* 할 일 목록이 없을 때  */}
        {/* <TodoListEmpty /> */}
        {!items.length && <TodoListEmpty />}
        {/* 할 일 목록이 있을 때 */}
        {items.map((item) => (
          <TodoListItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
}

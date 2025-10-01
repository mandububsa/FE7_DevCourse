import { twMerge } from "tailwind-merge";
import Button from "./html/Button";
import Checkbox from "./html/Checkbox";
import SvgClose from "./svg/SvgClose";
import SvgPencil from "./svg/SvgPencil";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo, updateTodo } from "../store/slice/todoSlice";
import { AppDispatch } from "../store/store";

export default React.memo(function TodoListItem({ item }: { item: Todo }) {
  console.log("TodoListItem Rendering");

  const dispatch = useDispatch<AppDispatch>();

  const [isEdited, setIsEdited] = useState(false);
  const [text, setText] = useState(item.text);
  useEffect(() => {
    if (!isEdited && item.text !== text) {
      // 수정되었다는 의미
      dispatch(updateTodo({ id: item.id, text }));
    }
  }, [isEdited]);

  return (
    /* 할 일이 완료되면 .todo__item--complete 추가 */

    <li
      key={item.id}
      className={twMerge(
        "todo__item",
        item.completed && "todo__item--complete"
      )}
    >
      {!isEdited && (
        <Checkbox
          parentClassName="todo__checkbox-group"
          type="checkbox"
          className="todo__checkbox"
          checked={item.completed}
          onChange={() => dispatch(toggleTodo({ id: item.id }))}
        >
          {item.text}
        </Checkbox>
      )}
      {/* 할 일을 수정할 때만 노출 (.todo__checkbox-group은 비노출 */}
      {isEdited && (
        <input
          type="text"
          className="todo__modify-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      )}
      <div className="todo__button-group">
        <Button
          className="todo__action-button"
          onClick={() => setIsEdited((isEdited) => !isEdited)}
        >
          <SvgPencil />
        </Button>
        <Button
          onClick={() => dispatch(deleteTodo({ id: item.id }))}
          className="todo__action-button"
        >
          <SvgClose />
        </Button>
      </div>
    </li>
  );
});

import { css } from "@emotion/css";
import { button } from "./css/style.css";

export default function App() {
  const color = "white";
  return (
    <>
      <div
        className={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: ${color};
          }
        `}
      >
        Hover to change color.
      </div>
      <button className={button}>바닐라</button>
    </>
  );
}

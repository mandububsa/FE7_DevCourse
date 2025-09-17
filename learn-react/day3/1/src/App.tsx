import { twMerge } from "tailwind-merge";

export default function App() {
  return (
    <>
      <h1>
        <button className="btn-primary">버튼</button>
        <button className={twMerge(`bg-blue-500`, `bg-amber-500`)}></button>
      </h1>
    </>
  );
}

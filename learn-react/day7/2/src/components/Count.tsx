import type { ActionDispatch } from "react";

export default function Count({
  count,
  dispatch,
}: {
  count: number;
  dispatch: ActionDispatch<[action: CountAction]>;
}) {
  return (
    <>
      <h1>Count Component</h1>
    </>
  );
}

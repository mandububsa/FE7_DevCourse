import type { Dispatch, SetStateAction } from "react";

type InputProps = Omit<React.ComponentPropsWithRef<"input">, "value"> & {
  // WithRef가 포인트!
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};
export default function Input(props: InputProps) {
  const { value, setValue, ref, ...rest } = props;
  return (
    <>
      <input
        {...rest}
        ref={ref}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
}

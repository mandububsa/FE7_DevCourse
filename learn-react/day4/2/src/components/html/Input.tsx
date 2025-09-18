import { twMerge } from "tailwind-merge";

type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
  type: "text" | "password" | "email" | "number" | "date";
};
// Omit은 원래 있던 InputProps의 type을 제거하고, 내가 원하는 좁은 타입으로 다시 정의하기 위해 꼭 필요.

export default function Input({ className, ...rest }: InputProps) {
  return (
    <input
      className={twMerge(
        "inter text-sm w-60 h-11 rounded-lg border-[1.5px] border-[#4f4f4f] bg-white placeholder-gray-500 px-4",
        className
      )}
      {...rest}
    />
  );
}

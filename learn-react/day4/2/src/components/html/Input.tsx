import { twMerge } from "tailwind-merge";

type InputProps = React.ComponentPropsWithoutRef<"input">;

export default function Input({ className, ...rest }: InputProps) {
  return (
    <input
      className={twMerge(
        "inter text-sm w-60 h-11 rounded-lg border-[1.5px] border-gray-500 bg-white placeholder-gray-500 px-4",
        className
      )}
      {...rest}
    />
  );
}

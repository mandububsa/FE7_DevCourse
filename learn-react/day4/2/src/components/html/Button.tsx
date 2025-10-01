import { twMerge } from "tailwind-merge";

type ButtonProps = React.ComponentPropsWithoutRef<"button">;

export default function Button(props: ButtonProps) {
  const { children, className = "", ...rest } = props;
  return (
    <>
      <button
        className={twMerge(
          "inter text-sm w-[77px] h-[44px] bg-[#4f4f4f] text-white rounded-lg cursor-pointer",
          className
        )}
        {...rest}
      >
        {children}
      </button>
    </>
  );
}

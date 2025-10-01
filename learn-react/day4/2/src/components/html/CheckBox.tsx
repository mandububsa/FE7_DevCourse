type CheckBoxProps = Omit<React.ComponentPropsWithoutRef<"input">, "type">;

export default function CheckBox(props: CheckBoxProps) {
  const { children = "I Agree", ...rest } = props;
  return (
    <div className="flex items-center gap-2">
      <input
        id="chk"
        type="checkbox"
        className="appearance-none rounded-[5px] border border-[#4F4F4F] bg-[#4F4F4F] w-5 h-5
        checked:bg-[url('/check.svg')] checked:bg-no-repeat checked:bg-center cursor-pointer"
        {...rest}
      />
      <label htmlFor="chk">{children}</label>
    </div>
  );
}

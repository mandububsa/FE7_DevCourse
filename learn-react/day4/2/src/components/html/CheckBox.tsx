type CheckBoxProps = React.ComponentPropsWithoutRef<"input">;

export default function CheckBox({ children }: CheckBoxProps) {
  return (
    <label className="inter flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        className="appearance-none rounded border border-[#4F4F4F] bg-white w-[20.03px] h-[20.03px] 
       checked:bg-[#4F4F4F] cursor-pointer
         "
      />

      {children}
    </label>
  );
}

import React from "react";
import { cn } from "~/utils/cn";

interface CheckboxProps {
  id: string;
  label?: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
  className?: string;
}

function Checkbox(props: CheckboxProps) {
  return (
    <div className={cn("flex items-center gap-2", props.className)}>
      <input
        id={props.id}
        type="checkbox"
        className="select-none cursor-pointer appearance-none relative w-4 h-4 rounded-full border-solid border-border border-2 checked:after:absolute checked:border-accent checked:after:w-[80%] checked:after:h-[80%] checked:after:bg-accent checked:after:rounded-full checked:after:left-1/2 checked:after:top-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
        checked={props.value}
        onChange={(val) => props.onValueChange(val.target.checked)}
      />
      <label htmlFor={props.id} className="select-none text-sm cursor-pointer">
        {props.label}
      </label>
    </div>
  );
}

export default React.memo(Checkbox);

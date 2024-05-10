"use client";

import React, { InputHTMLAttributes } from "react";

import { cn } from "~/utils/cn";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "prefix"> {
  prefix?: React.ReactNode;
}

function Input(props: InputProps) {
  const { className, prefix, ...rest } = props;

  const [focus, setFocus] = React.useState(false);

  return (
    <div className={cn("relative w-full", className)}>
      <input
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className={cn(
          "w-full bg-card py-2 px-4 outline-none rounded-md ring-2 ring-transparent hover:ring-accent/50 focus:outline-none focus:ring-accent transition-all",
          { "pl-9": prefix }
        )}
        {...rest}
      />

      {prefix ? (
        <span
          className={cn(
            "absolute top-1/2 left-2 -translate-y-1/2 z-50 w-5 h-5 text-secondary pointer-events-none transition-colors",
            { "text-foreground": focus }
          )}
        >
          {prefix}
        </span>
      ) : null}
    </div>
  );
}

export default React.memo(Input);

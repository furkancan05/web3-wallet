import React from "react";
import { cn } from "~/utils/cn";

export default function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("w-full px-5 md:max-w-[1200px] mx-auto", className)}>
      {children}
    </div>
  );
}

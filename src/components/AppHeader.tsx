"use client";

import React from "react";
import { ConnectKitButton } from "connectkit";
import { usePathname } from "next/navigation";

// utils
import { cn } from "~/utils/cn";

export default function AppHeader() {
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "fixed top-0 w-full h-20 flex items-center justify-between pl-[240px] bg-background pr-10 transition-colors",
        { "bg-portfolio-green": pathname === "/portfolio" }
      )}
    >
      <h1 className="text-2xl font-bold capitalize">
        {pathname.split("/")[1]}
      </h1>

      <ConnectKitButton />
    </header>
  );
}

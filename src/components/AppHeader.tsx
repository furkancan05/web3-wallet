"use client";

import React from "react";
import { useChainId } from "wagmi";
import { ConnectKitButton } from "connectkit";
import { usePathname } from "next/navigation";

// components
import CurrentChain from "~/components/CurrentChain";

// utils
import { cn } from "~/utils/cn";

export default function AppHeader() {
  const pathname = usePathname();
  const chainId = useChainId();

  return (
    <header
      className={cn(
        "fixed top-0 w-full h-20 flex items-center pl-[240px] bg-background pr-10 transition-colors z-40",
        { "bg-portfolio-green": pathname === "/portfolio" }
      )}
    >
      <h1 className="text-2xl font-bold capitalize mr-auto">
        {pathname.split("/")[1]}
      </h1>

      <CurrentChain />
      <ConnectKitButton />
    </header>
  );
}

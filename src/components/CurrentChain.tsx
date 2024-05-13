"use client";

import React from "react";
import { useChainId } from "wagmi";

// components
import Icon from "~/components/shared/Icon";

// utils
import { cn } from "~/utils/cn";
import { getChainName } from "~/utils/getChainName";

export default function CurrentChain() {
  const chainId = useChainId();

  const icons = {
    eth: "ethereum",
    avalanche: "avalanche",
    polygon: "polygon",
    bsc: "binance",
  };

  const currentChainName = React.useMemo(
    () => getChainName(chainId),
    [chainId]
  );

  if (!chainId) return <></>;
  return (
    <div
      className={cn(
        "flex gap-1 items-center rounded-md bg-card mr-10 py-2 px-3"
      )}
    >
      <Icon
        icon={icons[currentChainName as keyof typeof icons]}
        className="w-6 h-6 text-secondary"
      />
      <small className="text-sm font-semibold uppercase">
        {currentChainName}
      </small>
    </div>
  );
}

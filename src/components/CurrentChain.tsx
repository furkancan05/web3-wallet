"use client";

import React from "react";
import { useChainId } from "wagmi";

// components
import { ChainIcons } from "~/config/chains";

// utils
import { getChainName } from "~/utils/getChainName";

export default function CurrentChain() {
  const chainId = useChainId();

  const [state, setState] = React.useState<{
    currentChainName: string | undefined;
    icon: React.ReactNode | undefined;
  }>({ currentChainName: undefined, icon: undefined });

  const icons = {
    eth: "ethereum",
    avalanche: "avalanche",
    polygon: "polygon",
    bsc: "binance",
  };

  const colors = {
    eth: "#aa99d7",
    avalanche: "#e94948",
    polygon: "#874ce6",
    bsc: "#f0bb1f",
  };

  React.useEffect(() => {
    if (!chainId) return;

    const chainName = getChainName(chainId);
    const icon = ChainIcons[chainName as keyof typeof icons];

    setState({
      currentChainName: chainName,
      icon: icon,
    });
  }, [chainId]);

  if (!state.currentChainName || !state.icon) return <div></div>;
  return (
    <div
      className={`h-10 flex gap-2 items-center rounded-md bg-card mr-5 px-3 text-[${
        colors[state.currentChainName as keyof typeof colors]
      }]`}
    >
      <div
        className={`w-5 h-5 text-[${
          colors[state.currentChainName as keyof typeof colors]
        }]`}
      >
        {state.icon}
      </div>
      <small className="text-base font-semibold uppercase cursor-default">
        {state.currentChainName}
      </small>
    </div>
  );
}

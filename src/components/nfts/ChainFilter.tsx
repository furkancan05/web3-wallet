"use client";

import React from "react";

import { ChainIcons } from "~/config/chains";

// store
import { useAppStore } from "~/store/store";

// utils
import { cn } from "~/utils/cn";

function ChainFilter() {
  const selectedChain = useAppStore((store) => store.nfts.selectedChain);
  const setSelectedChain = useAppStore((store) => store.nfts.setSelectedChain);

  const chains = [
    { name: "ethereum", chainId: 1, color: "#aa99d7" },
    { name: "avalanche", chainId: 43114, color: "#e94948" },
    { name: "polygon", chainId: 137, color: "#874ce6" },
    { name: "binance", chainId: 56, color: "#f0bb1f" },
  ];

  return (
    <div className="flex items-center bg-card rounded-lg p-1">
      {chains.map((chain, index) => {
        return (
          <div
            key={index}
            onClick={() => setSelectedChain(chains[index].chainId)}
            title={chain.name.toUpperCase()}
            className={cn(
              "w-16 h-10 cursor-pointer flex items-center justify-center rounded-md hover:bg-secondary/10 transition-colors",
              {
                "bg-secondary/20": chains[index].chainId === selectedChain,
                "text-[#aa99d7]":
                  chains[index].chainId === selectedChain &&
                  selectedChain === 1,
                "text-[#e94948]":
                  chains[index].chainId === selectedChain &&
                  selectedChain === 43114,
                "text-[#874ce6]":
                  chains[index].chainId === selectedChain &&
                  selectedChain === 137,
                "text-[#f0bb1f]":
                  chains[index].chainId === selectedChain &&
                  selectedChain === 56,
              }
            )}
          >
            {ChainIcons[chain.name as keyof typeof ChainIcons]}
          </div>
        );
      })}
    </div>
  );
}

export default React.memo(ChainFilter);

"use client";

import React from "react";

import TokenListItem from "~/components/portfolio/TokenListItem";

// store
import { useAppStore } from "~/store/store";

export default function TokenList() {
  const userTokens = useAppStore((store) => store.portfolio.userTokens);

  const filteredTokens = React.useMemo(() => {
    return userTokens;
  }, [userTokens]);

  return (
    <div className="w-full text-foreground pb-10">
      {/* header */}
      <div className="w-full flex bg-background text-sm text-secondary font-semibold text-end py-4 px-2 sticky top-20">
        <div className="min-w-[30%] text-start">
          <span>Token Name</span>
        </div>
        <div className="w-full">
          <span>Portfolio %</span>
        </div>
        <div className="w-full">
          <span>Price</span>
        </div>
        <div className="w-full">
          <span>Balance</span>
        </div>
      </div>

      {/* token list */}
      {!filteredTokens ? (
        <Skeleton />
      ) : filteredTokens.length === 0 ? (
        <p className="text-center text-secondary mt-10">No tokens here.</p>
      ) : (
        <div className="flex flex-col gap-2">
          {filteredTokens.map((token, i) => (
            <TokenListItem key={i} token={token} />
          ))}
        </div>
      )}
    </div>
  );
}

function Skeleton() {
  return (
    <div className="flex flex-col gap-2">
      {["", "", "", "", "", "", "", "", "", ""].map((_, i) => {
        return (
          <div
            key={i}
            className="w-full h-20 bg-card rounded-md animate-pulse"
          ></div>
        );
      })}
    </div>
  );
}

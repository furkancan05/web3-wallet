"use client";

import React from "react";
import { useAccount, useChainId } from "wagmi";

// components
import MainBalances from "~/components/portfolio/MainBalances";
import TokenList from "~/components/portfolio/TokenList";
import TokensHeader from "~/components/portfolio/TokensHeader";

// store
import { useAppStore } from "~/store/store";

// utils
import { getUserTokens } from "~/utils/fetchers";
import { getChainName } from "~/utils/getChainName";

export default function PortfolioPage() {
  const { address } = useAccount();
  const chainId = useChainId();

  const setUserTokens = useAppStore((store) => store.portfolio.setUserTokens);

  const loadUserTokens = async () => {
    if (!address) return;

    const tokens = await getUserTokens({
      userAddress: address,
      chainName: getChainName(chainId),
    });

    if (!tokens) return;

    const userTokens = tokens.result.filter((token) => !token.possible_spam);

    setUserTokens(userTokens);
  };

  React.useEffect(() => {
    loadUserTokens();
  }, []);

  return (
    <div className="w-full h-full">
      <MainBalances />

      <TokensHeader />
      <TokenList />
    </div>
  );
}

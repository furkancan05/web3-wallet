"use client";

import React from "react";
import { useChainId } from "wagmi";

// components
import Banner from "~/components/Banner";
import MainBalances from "~/components/portfolio/MainBalances";
import TokenList from "~/components/portfolio/TokenList";
import TokensHeader from "~/components/portfolio/TokensHeader";
import Container from "~/components/shared/Container";

// store
import { useAppStore } from "~/store/store";

// utils
import { getUserTokens } from "~/utils/fetchers";
import { getChainName } from "~/utils/getChainName";

export default function Home() {
  const chainId = useChainId();

  const address = useAppStore((store) => store.global.address);
  const setUserTokens = useAppStore((store) => store.portfolio.setUserTokens);

  const loadUserTokens = async () => {
    if (!address) return;

    setUserTokens(undefined);

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
  }, [chainId, address]);

  if (!address) return <Banner />;
  return (
    <div className="w-full h-full">
      <MainBalances />

      <Container>
        <TokensHeader />
        <TokenList />
      </Container>
    </div>
  );
}

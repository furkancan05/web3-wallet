import React from "react";
import type { Metadata } from "next";
import { cookies } from "next/headers";

// compomnents
import NFTsContainer from "~/components/nfts/NFTsContainer";
import Container from "~/components/shared/Container";

// config
import { constants } from "~/config/global.config";
import { chains } from "~/config/chains";

// types
import { NFTs } from "~/types/nfts.types";

// utils
import { getUserNFTs as fetchUserNFTs } from "~/utils/fetchers";

export const metadata: Metadata = {
  title: "NFTs | Web3 Wallet - Your Personal Portfolio",
  description: "Your NFTs, tokens and collectibles.",
};

type LayoutLoader =
  | {
      tokens: NFTs[];
    }
  | undefined;

async function getUserNFTs(): Promise<LayoutLoader> {
  const nextCookies = cookies();
  const userAddress = nextCookies.get(constants.userAddress)?.value;

  if (!userAddress) return;

  const tokens = await Promise.all([
    fetchUserNFTs({
      userAddress,
      chainName: chains[1],
    }),
    fetchUserNFTs({
      userAddress,
      chainName: chains[137],
    }),
    fetchUserNFTs({
      userAddress,
      chainName: chains[43114],
    }),
    fetchUserNFTs({
      userAddress,
      chainName: chains[56],
    }),
  ]).then(([res1, res2, res3, res4]) => {
    return [...res1.tokens, ...res2.tokens, ...res3.tokens, ...res4.tokens];
  });

  return { tokens: tokens };
}

export default async function NFTsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const tokens: LayoutLoader = await getUserNFTs();

  return (
    <div className="w-full h-full">
      <Container>
        <NFTsContainer tokens={tokens?.tokens}>{children}</NFTsContainer>
      </Container>
    </div>
  );
}

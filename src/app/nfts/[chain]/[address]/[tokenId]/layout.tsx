import React from "react";
import type { Metadata } from "next";

// components
import NFTDetailContainer from "~/components/nfts/NFTDetailContainer";

// utils
import { getNFTDetail } from "~/utils/fetchers";

// types
import { NFTDetail } from "~/types/nfts.types";

// degisecek
export const metadata: Metadata = {
  title: "NFTs | Web3 Wallet - Your Personal Portfolio",
  description: "Your NFTs, tokens and collectibles.",
};

type NFTDetailLoader =
  | {
      token: NFTDetail;
    }
  | undefined;

export async function getNFT(
  chain: string | undefined,
  collection: string | undefined,
  tokenId: string | undefined
): Promise<NFTDetailLoader> {
  if (!chain || !collection || !tokenId) return;

  const token = await getNFTDetail({
    tokenSetId: `${collection}:${tokenId}`,
    chainName: chain,
  });

  return { token: token.tokens[0] };
}

export default async function NFTDetailLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { chain: string; address: string; tokenId: string };
}) {
  const token: NFTDetailLoader = await getNFT(
    params.chain,
    params.address,
    params.tokenId
  );

  return (
    <div className="w-full h-full">
      <NFTDetailContainer token={token?.token}>{children}</NFTDetailContainer>
    </div>
  );
}

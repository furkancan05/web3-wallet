"use client";

import { useAppStore } from "~/store/store";
import { NFTs } from "~/types/nfts.types";

export default function NFTsContainer({
  tokens,
  children,
}: {
  tokens: NFTs[] | undefined;
  children: React.ReactNode;
}) {
  const setNfts = useAppStore((store) => store.nfts.setNfts);

  setNfts(tokens);

  return <div className="w-full h-full pb-10 px-10">{children}</div>;
}

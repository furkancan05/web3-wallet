"use client";

import React from "react";

// store
import { useAppStore } from "~/store/store";

// types
import { NFTs } from "~/types/nfts.types";

export default function NFTsContainer({
  tokens,
  children,
}: {
  tokens: NFTs[] | undefined;
  children: React.ReactNode;
}) {
  const setNfts = useAppStore((store) => store.nfts.setNfts);

  React.useEffect(() => setNfts(tokens), []);

  return <div className="w-full h-full pb-10">{children}</div>;
}

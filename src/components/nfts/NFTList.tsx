"use client";

import React from "react";
import { useChainId } from "wagmi";

// components
import ChainFilter from "~/components/nfts/ChainFilter";
import NFTCard from "~/components/nfts/NFTCard";
import SpamFilter from "~/components/nfts/SpamFilter";

// store
import { useAppStore } from "~/store/store";

export default function NFTList() {
  const nfts = useAppStore((store) => store.nfts.nfts);
  const spam = useAppStore((store) => store.nfts.spam);
  const selectedChain = useAppStore((store) => store.nfts.selectedChain);
  const setSelectedChain = useAppStore((store) => store.nfts.setSelectedChain);

  const chainId = useChainId();

  React.useEffect(() => {
    setSelectedChain(chainId);
  }, [chainId]);

  const filteredNTFs = React.useMemo(() => {
    const filterbychain = nfts?.filter(
      (nft) => nft.token.chainId === selectedChain
    );

    if (spam) return filterbychain;

    return filterbychain?.filter((item) => item.token.isSpam === false);
  }, [spam, selectedChain, nfts]);

  return (
    <div className="w-full">
      {/* filters */}
      <div className="w-full flex items-center justify-end gap-10 sticky top-20 py-3 bg-background z-50">
        <SpamFilter />
        <ChainFilter />
      </div>

      {!filteredNTFs || filteredNTFs.length === 0 ? (
        <p className="text-sm font-semibold text-secondary text-center pt-8">
          There is no NFT yet.
        </p>
      ) : (
        <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4 pt-2">
          {filteredNTFs.map((nft, i) => {
            return <NFTCard key={i} nft={nft} />;
          })}
        </div>
      )}
    </div>
  );
}

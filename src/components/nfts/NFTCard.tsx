"use client";

import React from "react";

// components
import Image from "next/image";
import Link from "next/link";

// types
import { NFTs } from "~/types/nfts.types";

// utils
import { getChainName } from "~/utils/getChainName";

export default function NFTCard({ nft }: { nft: NFTs | undefined }) {
  const token: NFTs["token"] | undefined = nft?.token;

  const collectionRef = React.useRef<HTMLDivElement>(null);

  const collectionWidth = React.useMemo(() => {
    return (collectionRef.current?.clientWidth || 0) - 36;
  }, [collectionRef.current?.clientWidth]);

  return (
    <Link
      href={`/nfts/${getChainName(token?.chainId)}/${token?.contract}/${
        token?.tokenId
      }`}
      className="w-full h-full max-w-[300px] rounded-md bg-card p-2 hover:-translate-y-2 hover:bg-secondary/30 transition-all"
    >
      <div className="w-full aspect-square rounded-md overflow-hidden bg-secondary">
        {token?.image ? (
          <img
            alt=""
            src={
              token.image.startsWith("http")
                ? token.image
                : `ipfs://${token.image}`
            }
            width={500}
            height={500}
            className="w-full h-full"
            loading="lazy"
          />
        ) : null}
      </div>

      {/* collection row */}
      <div
        ref={collectionRef}
        className="flex items-end gap-2 text-sm text-secondart font-semibold my-3"
      >
        <div className="w-6 h-6 rounded-full bg-secondary overflow-hidden">
          {token?.collection.imageUrl ? (
            <img
              alt=""
              src={
                token.collection.imageUrl.startsWith("http")
                  ? token.collection.imageUrl
                  : `ipfs://${token.collection.imageUrl}`
              }
              width={500}
              height={500}
              className="w-full h-full"
              loading="lazy"
            />
          ) : null}
        </div>
        <p
          style={{ width: `${collectionWidth}px` }}
          className="font-semibold text-secondary text-sm overflow-hidden text-ellipsis whitespace-nowrap"
        >
          {token?.collection.name}
        </p>
      </div>

      <p className="font-semibold mb-2">
        {token?.name || `#${token?.tokenId}`}
      </p>
    </Link>
  );
}

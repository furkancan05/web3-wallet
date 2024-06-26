"use client";

import React from "react";
import Image from "next/image";

// store
import { useAppStore } from "~/store/store";

export default function NFTDetailImage() {
  const token = useAppStore((store) => store.nfts.nftDetail);

  const image = token?.token.image;

  return (
    <div className="w-full h-full pr-0 md:pr-10">
      <div className="w-full aspect-square rounded-md overflow-hidden bg-secondary">
        {image ? (
          <Image
            src={image.startsWith("http") ? image : `ipfs://${image}`}
            className="w-full h-full"
            alt=""
          />
        ) : null}
      </div>
    </div>
  );
}

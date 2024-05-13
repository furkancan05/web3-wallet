"use client";

import React from "react";
import { useAppStore } from "~/store/store";

export default function NFTDetailImage() {
  const token = useAppStore((store) => store.nfts.nftDetail);

  console.log(token);

  const image = token?.token.image;

  return (
    <div className="w-full h-full pr-0 md:pr-10">
      <div className="w-full aspect-square rounded-md overflow-hidden bg-secondary">
        {image ? (
          <img
            src={image.startsWith("http") ? image : `ipfs://${image}`}
            className="w-full h-full"
            alt=""
          />
        ) : null}
      </div>
    </div>
  );
}

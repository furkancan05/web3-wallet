"use client";

// store
import { useAppStore } from "~/store/store";

// types
import { NFTDetail } from "~/types/nfts.types";

export default function NFTDetailContainer({
  token,
  children,
}: {
  token: NFTDetail | undefined;
  children: React.ReactNode;
}) {
  const setNFTDetail = useAppStore((store) => store.nfts.setNFTDetail);

  setNFTDetail(token);

  return <div className="w-full h-full pb-10">{children}</div>;
}

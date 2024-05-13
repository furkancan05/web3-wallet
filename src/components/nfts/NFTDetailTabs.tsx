"use client";

import React from "react";
import { useAppStore } from "~/store/store";
import { cn } from "~/utils/cn";

export default function NFTDetailTabs() {
  const token = useAppStore((store) => store.nfts.nftDetail)?.token;

  const tabs = React.useMemo(
    () => ["overview", "properties", "bids", "activities"],
    []
  );
  const [selectedTab, setSelectedTab] = React.useState("overview");

  return (
    <div className="w-full h-full">
      {/* header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-end gap-2">
          <div className="w-8 h-8 rounded-full bg-secondary overflow-hidden">
            {token?.collection.image ? (
              <img
                alt=""
                src={
                  token.collection.image.startsWith("http")
                    ? token.collection.image
                    : `ipfs://${token.collection.image}`
                }
                className="w-full h-full"
              />
            ) : null}
          </div>
          <p className="text-secondary font-semibold">
            {token?.collection.name}
          </p>
        </div>
        <h1 className="font-semibold text-2xl">
          {token?.name || token?.tokenId}
        </h1>
      </div>

      {/* tab navigation */}
      <div className="flex w-full bg-card rounded-md p-1 my-6">
        {tabs.map((tab) => {
          return (
            <div
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={cn(
                "w-full text-center font-semibold text-sm cursor-pointer px-4 py-2 rounded-md hover:bg-secondary/20 capitalize transition-colors",
                { "bg-secondary/50 hover:bg-secondary/50": selectedTab === tab }
              )}
            >
              {tab}
            </div>
          );
        })}
      </div>
    </div>
  );
}

"use client";

import React from "react";
import Link from "next/link";

// components
import Icon from "~/components/shared/Icon";

// store
import { useAppStore } from "~/store/store";

// utils
import { cn } from "~/utils/cn";

export default function TokenList() {
  const hidePrices = useAppStore((store) => store.portfolio.hidePrices);
  const userTokens = useAppStore((store) => store.portfolio.userTokens);

  const price = 12.05;

  console.log(userTokens);

  return (
    <div className="w-full text-foreground px-10 pb-10">
      {/* header */}
      <div className="w-full flex bg-background text-sm text-secondary font-semibold text-end py-4 px-2 sticky top-20">
        <div className="min-w-[30%] text-start">
          <span>Token Name</span>
        </div>
        <div className="w-full">
          <span>Portfolio %</span>
        </div>
        <div className="w-full">
          <span>Price</span>
        </div>
        <div className="w-full">
          <span>Balance</span>
        </div>
      </div>

      {/* token list */}

      {userTokens ? (
        <div className="w-6 h-6 mt-10 mx-auto animate-spin">
          <Icon icon="loading" />
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1].map(
            (_, i) => {
              return (
                <Link
                  href=""
                  key={i}
                  className={cn(
                    "flex w-full bg-card p-4 rounded-md hover:bg-secondary/15 transition-colors animate-list-item delay-[10000ms]"
                    // (() => {
                    //   const delay = i * 300;
                    //   return `delay-[${delay}ms]`;
                    // })()
                  )}
                  style={{ animationDelay: `${i * 300}ms` }}
                >
                  {/* image and name */}
                  <div className="min-w-[30%] flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary" />

                    <div>
                      <span className="font-semibold block">BTC</span>
                      <small className="text-sm text-secondary">Bitcoin</small>
                    </div>
                  </div>

                  <div className="w-full text-end font-semibold">
                    <span>10 %</span>
                  </div>
                  <div className="w-full flex flex-col text-end font-semibold">
                    {/* <span>$12.05</span> */}
                    <div className="flex justify-end">
                      <span>$</span>
                      <span>{price.toString().split(".")[0]}</span>
                      <span>.</span>
                      <span className="text-secondary">
                        {price.toString().split(".")[1]}
                      </span>
                    </div>
                    <small className="text-sm text-green-500">+4.2%</small>
                  </div>
                  <div className="w-full flex flex-col text-end font-semibold">
                    <span>{hidePrices ? "******" : "0 BTC"}</span>
                    <small className="text-sm text-secondary">
                      {hidePrices ? "******" : "$0"}
                    </small>
                  </div>
                </Link>
              );
            }
          )}
        </div>
      )}
    </div>
  );
}

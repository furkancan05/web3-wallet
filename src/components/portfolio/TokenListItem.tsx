"use client";

import React from "react";

import Image from "next/image";

// store
import { useAppStore } from "~/store/store";

// types
import { UserTokens } from "~/types/portfolio.types";

// utils
import { cn } from "~/utils/cn";

function TokenListItem({ token }: { token: UserTokens }) {
  const hidePrices = useAppStore((store) => store.portfolio.hidePrices);
  const userTokens = useAppStore((store) => store.portfolio.userTokens);

  const [tokenAmountPercentage, seTokenAmountPercentage] = React.useState(0);

  const getTokenAmountPercentage = () => {
    if (!userTokens || userTokens.length === 0)
      return seTokenAmountPercentage(0);

    let totalUsd = 0;

    userTokens.forEach((t) => {
      totalUsd = totalUsd + t.usd_value;
    });

    const percentage = (token.usd_value / totalUsd) * 100;

    if (isNaN(percentage)) return seTokenAmountPercentage(0);

    seTokenAmountPercentage(percentage);
  };

  React.useEffect(() => {
    getTokenAmountPercentage();
  }, []);

  // token usd 24h change is positive or negative
  const percentageChange = token.usd_price_24hr_usd_change > 0;

  return (
    <div className="flex w-full bg-card p-4 rounded-md hover:bg-card/90 transition-colors animate-list-item">
      {/* image and name */}
      <div className="min-w-[30%] flex gap-4">
        <Image
          src={token.logo}
          width={40}
          height={40}
          alt=""
          className="w-10 h-10 rounded-full"
        />

        <div>
          <span className="font-semibold block">{token.symbol}</span>
          <small className="text-sm text-secondary">{token.name}</small>
        </div>
      </div>

      <div className="w-full text-end font-semibold">
        <span>{`${tokenAmountPercentage.toFixed(1)}%`}</span>
      </div>
      <div className="w-full flex flex-col text-end font-semibold">
        <div className="flex justify-end">
          <span>$</span>
          <span>{token.usd_price.toString().split(".")[0]}</span>
          <span>.</span>
          <span className="text-secondary">
            {token.usd_price.toString().split(".")[1].slice(0, 3)}
          </span>
        </div>
        <small
          className={cn("text-sm text-green-500", {
            "text-red-500": !percentageChange,
          })}
        >
          {`${
            percentageChange ? "+" : ""
          }${token.usd_price_24hr_usd_change.toFixed(1)}%`}
        </small>
      </div>
      <div className="w-full flex flex-col text-end font-semibold">
        <span>
          {hidePrices
            ? "******"
            : `${(Number(token.balance) / 10 ** 18).toFixed(3)} ${
                token.symbol
              }`}
        </span>
        <small className="text-sm text-secondary">
          {hidePrices ? "******" : `$${token.usd_value.toFixed(3)}`}
        </small>
      </div>
    </div>
  );
}

export default React.memo(TokenListItem);

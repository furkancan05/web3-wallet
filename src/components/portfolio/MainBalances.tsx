"use client";

import React from "react";

// store
import { useAppStore } from "~/store/store";

// components
import Icon from "~/components/shared/Icon";

// utils
import { cn } from "~/utils/cn";

export default function MainBalances() {
  const hidePrices = useAppStore((store) => store.portfolio.hidePrices);
  const togglePrices = useAppStore((store) => store.portfolio.togglePrices);

  const [loading, setLoading] = React.useState(false);

  const balance = 21.324;

  const refreshDatas = async () => {
    setLoading(true);

    // tum tokenlara tekrar istek atilacak ve storea atilacak

    setLoading(false);
  };

  return (
    <div className="flex justify-between w-full h-44 bg-gradient-to-t from-transparent to-portfolio-green px-10 py-10">
      {/* total balance */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-5">
          <p>Total Balance</p>
          <Icon
            icon={hidePrices ? "eye" : "eye-crossed"}
            className="w-5 h-5 cursor-pointer"
            onClick={() => togglePrices(!hidePrices)}
          />
          <Icon
            icon={loading ? "loading" : "refresh"}
            className={cn("w-5 h-5 cursor-pointer", {
              "animate-spin": loading,
            })}
            onClick={refreshDatas}
          />
        </div>

        <p className="text-3xl font-semibold">
          {hidePrices ? "******" : `$${balance}`}
        </p>
      </div>

      {/* actions */}
      <div className="flex flex-col gap-4">
        <p className="text-end">Actions</p>

        <div className="flex items-center gap-4">
          <div className="flex flex-col gap-2 items-center">
            <button
              type="button"
              onClick={() => {}}
              className="p-3 rounded-lg bg-accent flex items-center justify-center hover:bg-accent/80 transition-colors"
            >
              <Icon icon="arrow-down" className="w-6 h-6" />
            </button>
            <small className="text-sm">Receive</small>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <button
              type="button"
              onClick={() => {}}
              className="p-3 rounded-lg bg-accent flex items-center justify-center hover:bg-accent/80 transition-colors"
            >
              <Icon icon="send" className="w-6 h-6" />
            </button>
            <small className="text-sm">Send</small>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <button
              type="button"
              onClick={() => {}}
              className="p-3 rounded-lg bg-accent flex items-center justify-center hover:bg-accent/80 transition-colors"
            >
              <Icon icon="shop" className="w-6 h-6" />
            </button>
            <small className="text-sm">Buy</small>
          </div>
        </div>
      </div>
    </div>
  );
}

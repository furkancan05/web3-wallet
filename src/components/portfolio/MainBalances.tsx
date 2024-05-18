"use client";

import React from "react";
import { useAccount, useChainId } from "wagmi";

// store
import { useAppStore } from "~/store/store";

// components
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { FiRefreshCcw } from "react-icons/fi";
import { AiOutlineLoading } from "react-icons/ai";
import { TbArrowBigDown, TbSend, TbShoppingCart } from "react-icons/tb";

// utils
import { getUserTokens } from "~/utils/fetchers";
import { getChainName } from "~/utils/getChainName";

export default function MainBalances() {
  const hidePrices = useAppStore((store) => store.portfolio.hidePrices);
  const userTokens = useAppStore((store) => store.portfolio.userTokens);
  const setUserTokens = useAppStore((store) => store.portfolio.setUserTokens);
  const togglePrices = useAppStore((store) => store.portfolio.togglePrices);

  const { address } = useAccount();
  const chainId = useChainId();

  const [loading, setLoading] = React.useState(false);

  const balance = React.useMemo(() => {
    if (!userTokens) return null;

    let calculateBalance: number = 0;

    userTokens?.forEach((token) => {
      calculateBalance = calculateBalance + token.usd_value;
    });

    return calculateBalance.toFixed(3);
  }, [userTokens]);

  const refreshDatas = React.useCallback(async () => {
    if (!address) return;

    setLoading(true);
    const tokens = await getUserTokens({
      userAddress: address,
      chainName: getChainName(chainId),
    });

    const userTokens = tokens.result.filter((token) => !token.possible_spam);

    setUserTokens(userTokens);

    setLoading(false);
  }, [address, chainId]);

  return (
    <div className="flex justify-between w-full h-44 bg-gradient-to-t from-transparent to-portfolio-green px-10 py-10">
      {/* total balance */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-5">
          <p>Total Balance</p>
          <div
            title={hidePrices ? "See Balances" : "Hide Balances"}
            className="cursor-pointer"
            onClick={() => togglePrices(!hidePrices)}
          >
            {hidePrices ? (
              <IoEyeOutline size={26} />
            ) : (
              <IoEyeOffOutline size={26} />
            )}
          </div>
          <div title="Reload Tokens" className="cursor-pointer">
            {loading ? (
              <AiOutlineLoading size={20} className="animate-spin" />
            ) : (
              <FiRefreshCcw size={20} onClick={refreshDatas} />
            )}
          </div>
        </div>

        {!balance ? (
          <div className="w-[177px] h-9 rounded-md animate-pulse bg-card" />
        ) : (
          <p className="text-3xl font-semibold">
            {hidePrices ? "******" : `$${balance}`}
          </p>
        )}
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
              <TbArrowBigDown size={24} />
            </button>
            <small className="text-sm">Receive</small>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <button
              type="button"
              onClick={() => {}}
              className="p-3 rounded-lg bg-accent flex items-center justify-center hover:bg-accent/80 transition-colors"
            >
              <TbSend size={24} />
            </button>
            <small className="text-sm">Send</small>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <button
              type="button"
              onClick={() => {}}
              className="p-3 rounded-lg bg-accent flex items-center justify-center hover:bg-accent/80 transition-colors"
            >
              <TbShoppingCart size={24} />
            </button>
            <small className="text-sm">Buy</small>
          </div>
        </div>
      </div>
    </div>
  );
}

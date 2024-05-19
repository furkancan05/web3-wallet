"use client";

import React from "react";

// store
import { useAppStore } from "~/store/store";

// components
import Checkbox from "~/components/shared/Checkbox";
import Input from "~/components/shared/Input";
import { TbSearch } from "react-icons/tb";

export default function TokensHeader() {
  const hideZeroBalances = useAppStore(
    (store) => store.portfolio.hideZeroBalances
  );
  const search = useAppStore((store) => store.portfolio.search);
  const toggleZeroBalances = useAppStore(
    (store) => store.portfolio.toggleZeroBalances
  );
  const setSearch = useAppStore((store) => store.portfolio.setSearch);

  return (
    <div className="flex items-center w-full h-12 my-6 gap-10">
      <p className="text-lg font-semibold">Portfolio</p>

      {/* hide zero balances */}
      <Checkbox
        id="zero-balances"
        label="Hide zero balances"
        className="ml-auto"
        value={hideZeroBalances}
        onValueChange={(val) => toggleZeroBalances(val)}
      />

      <Input
        type="text"
        className="w-[250px]"
        placeholder="Token name"
        prefix={<TbSearch size={20} />}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

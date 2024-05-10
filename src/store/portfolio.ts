// immer
import { produce } from "immer";

// types
import type { ImmerStateCreator } from "~/store/store";

export interface Portfolio {
  hidePrices: boolean;
  hideZeroBalances: boolean;
  search: string;

  togglePrices: (value: boolean) => void;
  toggleZeroBalances: (value: boolean) => void;
  setSearch: (value: string) => void;
}

export const portfoliSlice: ImmerStateCreator<Portfolio> = (set) => ({
  hidePrices: false,
  hideZeroBalances: false,
  search: "",

  togglePrices: (value) => {
    set(
      produce((state) => {
        state.portfolio.hidePrices = value;
      })
    );
  },
  toggleZeroBalances: (value) => {
    set(
      produce((state) => {
        state.portfolio.hideZeroBalances = value;
      })
    );
  },
  setSearch: (value) => {
    set(
      produce((state) => {
        state.portfolio.search = value;
      })
    );
  },
});

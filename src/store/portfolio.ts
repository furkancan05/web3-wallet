// immer
import { produce } from "immer";

// types
import type { ImmerStateCreator } from "~/store/store";
import { UserTokenResponse } from "~/types/portfolio.types";

export interface Portfolio {
  hidePrices: boolean;
  hideZeroBalances: boolean;
  search: string;

  userTokens: UserTokenResponse | undefined;

  togglePrices: (value: boolean) => void;
  toggleZeroBalances: (value: boolean) => void;
  setSearch: (value: string) => void;

  setUserTokens: (tokens: UserTokenResponse) => void;
}

export const portfoliSlice: ImmerStateCreator<Portfolio> = (set) => ({
  hidePrices: true,
  hideZeroBalances: false,
  search: "",

  userTokens: undefined,

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
  setUserTokens: (tokens) => {
    set(
      produce((state) => {
        state.portfolio.userTokens = tokens;
      })
    );
  },
});

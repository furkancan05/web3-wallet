import { create, type StateCreator } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { enableMapSet } from "immer";

import { type Portfolio, portfoliSlice } from "~/store/portfolio";
import { NFTs, nftsSlice } from "~/store/nfts";

enableMapSet();

export type ImmerStateCreator<T> = StateCreator<
  T,
  [["zustand/immer", never], never],
  [],
  T
>;

interface AppStore {
  portfolio: Portfolio;
  nfts: NFTs;
}

export const useAppStore = create<AppStore>()(
  devtools(
    immer((...args) => ({
      // @ts-ignore kalkacak
      portfolio: portfoliSlice(...args),
      // @ts-ignore kalkacak
      nfts: nftsSlice(...args),
    }))
  )
);

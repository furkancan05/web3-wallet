import { create, type StateCreator } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { enableMapSet } from "immer";

import { type Portfolio, portfoliSlice } from "~/store/portfolio";

enableMapSet();

export type ImmerStateCreator<T> = StateCreator<
  T,
  [["zustand/immer", never], never],
  [],
  T
>;

interface AppStore {
  portfolio: Portfolio;
}

export const useAppStore = create<AppStore>()(
  devtools(
    immer((...args) => ({
      // @ts-ignore kalkacak
      portfolio: portfoliSlice(...args),
    }))
  )
);

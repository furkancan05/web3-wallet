// immer
import { produce } from "immer";

// store
import type { ImmerStateCreator } from "~/store/store";

export interface Global {
  address: string;

  setAddress: (address: string | undefined) => void;
}

export const globalSlice: ImmerStateCreator<Global> = (set) => ({
  address: "",

  setAddress: (address) => {
    set(
      produce((state) => {
        if (address === undefined || address === null) return;
        state.global.address = address;
      })
    );
  },
});

// immer
import { produce } from "immer";

// store
import type { ImmerStateCreator } from "~/store/store";

// types
import type { NFTDetail, NFTs as NFTObject } from "~/types/nfts.types";

export interface NFTs {
  nfts: NFTObject[] | undefined;
  nftDetail: NFTDetail | undefined;
  spam: boolean;
  selectedChain: number;

  setNfts: (nfts: NFTObject[] | undefined) => void;
  setSpam: (condition: boolean) => void;
  setSelectedChain: (chainId: number) => void;
  setNFTDetail: (nft: NFTDetail | undefined) => void;
}

export const nftsSlice: ImmerStateCreator<NFTs> = (set) => ({
  nfts: undefined,
  nftDetail: undefined,
  spam: false,
  selectedChain: 1,

  setNfts: (value) => {
    set(
      produce((state) => {
        state.nfts.nfts = value;
      })
    );
  },
  setSpam: (condition) => {
    set(
      produce((state) => {
        state.nfts.spam = condition;
      })
    );
  },
  setSelectedChain: (chainId) => {
    set(
      produce((state) => {
        state.nfts.selectedChain = chainId;
      })
    );
  },
  setNFTDetail: (nft) => {
    set(
      produce((state) => {
        state.nfts.nftDetail = nft;
      })
    );
  },
});

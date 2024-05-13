// utils
import api from "~/utils/api";

// types
import { NFTDetailResponse, NFTsResponse } from "~/types/nfts.types";
import { UserTokenResponse } from "~/types/portfolio.types";

// Moralis Fetchers
export const getUserTokens = async ({
  userAddress,
  chainName,
}: {
  userAddress: string;
  chainName: string;
}) => {
  return (await api.call({
    from: "moralis",
    url: `${userAddress}/erc20`,
    method: "GET",
    queryParams: { chain: chainName },
  })) as UserTokenResponse;
};

// Reservoir Fetchers
export const getUserNFTs = async ({
  userAddress,
  chainName,
}: {
  userAddress: string;
  chainName: string;
}) => {
  return (await api.call({
    from: "reservoir",
    chainName,
    url: `users/${userAddress}/tokens/v7`,
    method: "GET",
  })) as NFTsResponse;
};

export const getNFTDetail = async ({
  tokenSetId,
  chainName,
}: {
  tokenSetId: string;
  chainName: string;
}) => {
  return (await api.call({
    from: "reservoir",
    chainName,
    url: `tokens/v7`,
    method: "GET",
    queryParams: {
      tokenSetId: `token:${tokenSetId}`,
      includeAttributes: "true",
    },
  })) as NFTDetailResponse;
};

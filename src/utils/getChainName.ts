import { chains } from "~/config/chains";

export const getChainName = (chainId: number | undefined): string => {
  if (!chainId) return "";

  const chainName = chains[chainId as keyof typeof chains];

  if (!chainName) return "";

  return chainName;
};

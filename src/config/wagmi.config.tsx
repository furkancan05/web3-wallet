"use client";

import { http, createConfig, WagmiProvider } from "wagmi";
import { mainnet, sepolia, avalanche, polygon, bsc } from "wagmi/chains";

// connectkit
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitConfig } from "./connectkit.config";

export default function Web3Provider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  const wagmiConfig = createConfig(
    getDefaultConfig({
      chains: [mainnet, sepolia, avalanche, polygon, bsc],
      transports: {
        [mainnet.id]: http(),
        [sepolia.id]: http(),
        [avalanche.id]: http(),
        [polygon.id]: http(),
        [bsc.id]: http(),
      },

      walletConnectProjectId: "d4caea60dcd105dcd16b340ea9f31b88",
      appName: "Web3 Wallet",
    })
  );

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider
          debugMode={ConnectKitConfig.debugMode}
          theme="midnight"
          // customTheme={ConnectKitConfig.customTheme}
        >
          {children}
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

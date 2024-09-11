"use client";

import { deleteCookie, setCookie } from "cookies-next";

import { http, createConfig, WagmiProvider } from "wagmi";
import { mainnet, avalanche, polygon, bsc } from "wagmi/chains";

// connectkit
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// config
import { ConnectKitConfig } from "~/config/connectkit.config";
import { constants } from "~/config/global.config";

// store
import { useAppStore } from "~/store/store";

export default function Web3Provider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  const setAddress = useAppStore((store) => store.global.setAddress);

  const wagmiConfig = createConfig(
    getDefaultConfig({
      // autoConnect: false,
      // @ts-ignore // kalkacak
      chains: [mainnet, avalanche, polygon, bsc],
      transports: {
        [mainnet.id]: http(),
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
          onConnect={(connection) => {
            console.log("furkan");
            setCookie(constants.userAddress, connection.address);
            setAddress(connection.address);
          }}
          onDisconnect={() => {
            deleteCookie(constants.userAddress);
            setAddress("");
          }}
          // customTheme={ConnectKitConfig.customTheme}
        >
          {children}
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

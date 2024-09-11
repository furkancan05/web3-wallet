"use client";

import React from "react";
import { useAccount, useChainId, useDisconnect } from "wagmi";
import { ConnectKitButton } from "connectkit";
import { usePathname } from "next/navigation";
import Image from "next/image";

// components
import Container from "~/components/shared/Container";
import Link from "next/link";
import LOGO from "~/assets/logo.png";

// utils
import { cn } from "~/utils/cn";
import { getChainName } from "~/utils/getChainName";

// config
import { ChainIcons } from "~/config/chains";
import { AppNavigations } from "~/config/appNavigation.config";
import { useAppStore } from "~/store/store";

export default function AppHeader() {
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "fixed top-0 w-full h-20 bg-background transition-colors z-40",
        { "bg-portfolio-green": pathname === "/" }
      )}
    >
      <Container className="flex h-full items-center justify-between">
        <div className="flex-1">
          <Image alt="" src={LOGO} width={150} height={100} />
        </div>

        <div className="flex-1 hidden md:block">
          <AppNavigation />
        </div>

        <div className="flex flex-1 justify-end gap-4">
          <CurrentChain />
          <ConnectKitButton />
        </div>
      </Container>
    </header>
  );
}

export function AppNavigation() {
  const pathname = usePathname();

  return (
    <ul className="flex justify-center gap-8 md:gap-5">
      {AppNavigations.map((nav) => {
        const isActive = pathname.includes(nav.path);

        return (
          <Link key={nav.title} href={nav.path} className="">
            <li
              className={cn(
                "w-full flex flex-col gap-2 items-center text-secondary py-3 text-sm md:text-base font-semibold hover:text-foreground/90 transition-colors",
                {
                  "text-foreground": isActive,
                }
              )}
            >
              <span className="block md:hidden">{nav.icon}</span>
              <span className="hidden sm:block">{nav.title}</span>
            </li>
          </Link>
        );
      })}
    </ul>
  );
}

function CurrentChain() {
  const chainId = useChainId();
  const { isConnected } = useAccount();

  const [state, setState] = React.useState<{
    currentChainName: string | undefined;
    icon: React.ReactNode | undefined;
  }>({ currentChainName: undefined, icon: undefined });

  const icons = {
    eth: "ethereum",
    avalanche: "avalanche",
    polygon: "polygon",
    bsc: "binance",
  };

  const colors = {
    eth: "#aa99d7",
    avalanche: "#e94948",
    polygon: "#874ce6",
    bsc: "#f0bb1f",
  };

  React.useEffect(() => {
    if (!chainId || !isConnected)
      return setState({
        currentChainName: undefined,
        icon: null,
      });

    const chainName = getChainName(chainId);
    const icon = ChainIcons[chainName as keyof typeof icons];

    setState({
      currentChainName: chainName,
      icon: icon,
    });
  }, [isConnected, chainId]);

  if (!state.currentChainName || !state.icon) return <div></div>;
  return (
    <div
      className={`hidden h-10 gap-2 items-center rounded-md bg-card px-3 sm:flex text-[${
        colors[state.currentChainName as keyof typeof colors]
      }]`}
    >
      <div
        className={`w-5 h-5 text-[${
          colors[state.currentChainName as keyof typeof colors]
        }]`}
      >
        {state.icon}
      </div>
      <small className="text-base font-semibold uppercase cursor-default">
        {state.currentChainName}
      </small>
    </div>
  );
}

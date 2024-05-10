import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// components
import AppNavigation from "~/components/AppNavigation";
import AppHeader from "~/components/AppHeader";

// config
import Web3Provider from "~/config/wagmi.config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web3 Wallet | Your Personal Portfolio",
  description:
    "Your personal web3 portfolio application that includes tokens, cryptocurrencies, nfts and collectibles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Web3Provider>
          <AppHeader />

          <AppNavigation />

          <div className="w-full h-full pl-[200px] pt-20 bg-background text-foreground">
            {children}
          </div>
        </Web3Provider>
      </body>
    </html>
  );
}

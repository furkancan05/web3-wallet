import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

// components
import AppHeader, { AppNavigation } from "~/components/AppHeader";
import PageLoader from "~/components/PageLoader";

// config
import Web3Provider from "~/config/wagmi.config";

const inter = Nunito({ subsets: ["latin"] });

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
          <PageLoader />

          <div className="w-full h-full py-20 bg-background text-foreground">
            {children}
          </div>

          <div className="w-full block fixed bottom-0 bg-background md:hidden">
            <AppNavigation />
          </div>
        </Web3Provider>
      </body>
    </html>
  );
}

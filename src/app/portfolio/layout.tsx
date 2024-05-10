import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Web3 Wallet - Your Personal Portfolio",
  description: "Your personal portfolio, tokens and cryptocurrencies.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full h-full">{children}</div>;
}

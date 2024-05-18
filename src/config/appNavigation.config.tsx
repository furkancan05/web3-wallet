import { IoSwapHorizontal, IoWalletOutline } from "react-icons/io5";
import { RiNftLine } from "react-icons/ri";

type AppNavigation = { title: string; path: string; icon: React.ReactNode }[];

export const AppNavigations: AppNavigation = [
  {
    title: "Portfolio",
    path: "/portfolio",
    icon: <IoWalletOutline size={20} />,
  },
  {
    title: "NFTs",
    path: "/nfts",
    icon: <RiNftLine size={20} />,
  },
  {
    title: "Swap",
    path: "/swap",
    icon: <IoSwapHorizontal size={20} />,
  },
];

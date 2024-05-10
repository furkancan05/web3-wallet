import {
  ArrowDown,
  Eye,
  EyeCrossed,
  Loading,
  NFT,
  Refresh,
  Search,
  Send,
  Shop,
  Swap,
  Wallet,
} from "~/static/icons";
import { cn } from "~/utils/cn";

const icons: Record<string, React.ReactNode> = {
  "arrow-down": <ArrowDown />,
  eye: <Eye />,
  "eye-crossed": <EyeCrossed />,
  loading: <Loading />,
  nft: <NFT />,
  refresh: <Refresh />,
  search: <Search />,
  send: <Send />,
  shop: <Shop />,
  swap: <Swap />,
  wallet: <Wallet />,
};

interface IconProps {
  icon: string;
  className?: string;
  onClick?: () => void;
}

export default function Icon(props: IconProps) {
  const { className, ...rest } = props;

  return (
    <span className={cn("w-4 h-4 text-inherit", props.className)} {...rest}>
      {icons[props.icon]}
    </span>
  );
}

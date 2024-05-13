import React from "react";

// components
import NFTDetailImage from "~/components/nfts/NFTDetailImage";
import NFTDetailTabs from "~/components/nfts/NFTDetailTabs";

export default function NFTDetailPage() {
  return (
    <div className="flex flex-col md:flex-row gap-10 md:gap-0">
      <div className="flex-1">
        <NFTDetailImage />
      </div>
      <div className="flex-1">
        <NFTDetailTabs />
      </div>
    </div>
  );
}

export interface NFTsResponse {
  tokens: NFTs[];
}

export interface NFTs {
  token: {
    chainId: number;
    contract: string;
    tokenId: string;
    kind: string;
    name: string;
    image: string;
    imageSmall: string;
    imageLarge: string;
    metadata: {
      imageOriginal: string;
      tokenURI: string;
    };
    description: string | null;
    rarityScore: string | null;
    rarityRank: string | null;
    supply: string;
    remainingSupply: string;
    media: string | null;
    isFlagged: boolean;
    isSpam: boolean;
    metadataDisabled: boolean;
    lastFlagUpdate: string | null;
    lastFlagChange: string | null;
    collection: {
      id: string;
      name: string;
      slug: string | null;
      symbol: string;
      imageUrl: string;
      isSpam: boolean;
      metadataDisabled: boolean;
      openseaVerificationStatus: string | null;
      floorAskPrice: string | null;
      royaltiesBps: number;
      royalties: unknown[];
    };
    lastAppraisalValue: string | null;
  };
  ownership: {
    tokenCount: string;
    onSaleCount: string;
    floorAsk: {
      id: unknown;
      price: unknown;
      maker: unknown;
      kind: unknown;
      validFrom: unknown;
      validUntil: unknown;
      source: unknown;
    };
    acquiredAt: string;
  };
}

export interface NFTDetailResponse {
  tokens: NFTDetail[];
  continuation: string | number | null;
}

export interface NFTDetail {
  token: {
    chainId: number;
    contract: string;
    tokenId: string;
    name: string;
    description: string;
    image: string;
    imageSmall: string;
    imageLarge: string;
    metadata: {
      imageOriginal: string;
      tokenURI: string;
    };
    media: unknown;
    kind: string;
    isFlagged: boolean;
    isSpam: boolean;
    isNsfw: boolean;
    metadataDisabled: boolean;
    lastFlagUpdate: unknown;
    lastFlagChange: unknown;
    supply: string;
    remainingSupply: string;
    decimals: number | null;
    rarity: number;
    rarityRank: number;
    collection: {
      id: string;
      name: string;
      image: string;
      slug: string;
      symbol: string;
      creator: string;
      tokenCount: number;
      metadataDisabled: boolean;
      floorAskPrice: {
        currency: {
          contract: string;
          name: string;
          symbol: string;
          decimals: number;
        };
        amount: {
          raw: string;
          decimal: number;
          usd: number;
          native: number;
        };
      };
    };
    owner: string;
    attributes: [
      {
        key: string;
        kind: string;
        value: string;
        tokenCount: number;
        onSaleCount: number;
        floorAskPrice: {
          currency: {
            contract: string;
            name: string;
            symbol: string;
            decimals: number;
          };
          amount: {
            raw: string;
            decimal: number;
            usd: number;
            native: number;
          };
        };
        topBidValue: unknown;
        createdAt: string;
      }
    ];

    mintStages: [];
  };
  market: {
    floorAsk: {
      id: unknown;
      price: unknown;
      maker: unknown;
      validFrom: unknown;
      validUntil: unknown;
      source: unknown;
    };
  };
  updatedAt: "2024-05-07T23:43:32.828Z";
}

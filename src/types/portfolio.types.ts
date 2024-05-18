export interface UserTokenResponse {
  cursor: unknown;
  page: number;
  page_size: number;
  result: UserTokens[];
}

export interface UserTokens {
  balance: string;
  balance_formatted: string;
  decimals: number;
  logo: string;
  name: string;
  native_token: boolean;
  percentage_relative_to_total_supply: unknown;
  portfolio_percentage: number;
  possible_spam: boolean;
  symbol: string;
  thumbnail: string;
  token_address: string;
  total_supply: unknown;
  total_supply_formatted: unknown;
  usd_price: number;
  usd_price_24hr_percent_change: number;
  usd_price_24hr_usd_change: number;
  usd_value: number;
  usd_value_24hr_usd_change: number;
  verified_contract: boolean;
}

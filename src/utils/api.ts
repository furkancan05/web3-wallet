export interface APICallType {
  from: "moralis" | "reservoir" | "external";
  chainName?: string;
  url: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  headers?: Record<string, string>;
  queryParams?: Record<string, string>;
  body?: Record<string, string>;
}

class Api {
  private moralis_api_key =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjUyMDg0OTE3LWViOTQtNDVhMC05MDU5LWIyZGFhMmEwMDQ1NSIsIm9yZ0lkIjoiMzkxNzY3IiwidXNlcklkIjoiNDAyNTU1IiwidHlwZUlkIjoiM2FhYjMxZjEtODk4MS00NGE5LWFiM2YtNzg1YzQ4OTdkYjA0IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MTUzNDgwNTAsImV4cCI6NDg3MTEwODA1MH0.uAdPKlpn7ES57sELsS3MCNc5wewVCD0W7UJw2hGMjeo";
  private reservoir_api_key = "fe139960-92af-5f93-9a9e-4edf700d228d";

  private moralis_base_url = "https://deep-index.moralis.io/api/v2.2/";

  private getReservoirBaseURL(chainName: string) {
    const baseURLs = {
      eth: "https://api.reservoir.tools/",
      avalanche: "https://api-avalanche.reservoir.tools/",
      polygon: "https://api-polygon.reservoir.tools/",
      bsc: "https://api-bsc.reservoir.tools/",
    };

    return baseURLs[chainName as keyof typeof baseURLs];
  }

  private prepareHeader({
    from,
    headers,
  }: {
    from: APICallType["from"];
    headers: APICallType["headers"];
  }): Record<string, string> {
    return {
      "content-type": "application/json",
      ...(from === "moralis" ? { "X-API-Key": this.moralis_api_key } : {}),
      ...(from === "reservoir" ? { "X-API-Key": this.reservoir_api_key } : {}),
      ...headers,
    };
  }

  private prepareUrl({
    from,
    chainName,
    url,
    queryParams,
  }: {
    from: APICallType["from"];
    chainName: APICallType["chainName"];
    url: string;
    headers: APICallType["headers"];
    queryParams: APICallType["queryParams"];
  }) {
    const base_url =
      from === "moralis"
        ? this.moralis_base_url
        : from === "reservoir"
        ? this.getReservoirBaseURL(chainName || "")
        : "";

    const query = "?" + new URLSearchParams(queryParams).toString();

    return base_url + url + query;
  }

  public async call<T>({
    from,
    chainName,
    url,
    method,
    headers,
    body,
    queryParams,
  }: APICallType): Promise<T> {
    const URL = this.prepareUrl({ from, chainName, url, headers, queryParams });
    const header = this.prepareHeader({ from, headers });

    const response = await fetch(URL, {
      headers: header,
      method,
      body: JSON.stringify(body),
    });

    return (await response.json()) as T;
  }
}

const api = new Api();

export default api;

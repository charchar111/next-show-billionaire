export interface IbillionaireIndex {
  id: string;
  name: string;
  squareImage: string;
  netWorth: number;
  industries: string[];
}

export interface IbillionaireDetail {
  id: string;
  city: string;
  name: string;
  country: string;
  position: number;
  industries: string[];
  thumbnail: string;
  squareImage: string;
  bio: string[];
  about: string[];
  netWorth: number;
  financialAssets: IfinancialAssets[];
}

export interface IfinancialAssets {
  exchange: string;
  ticker: string;
  companyName: string;
  numberOfShares: number;
  sharePrice: number;
  currencyCode: string;
  exchangeRate: number;
  interactive: boolean;
}

export interface Ipage {
  total: undefined | number;
}

export interface ITheme {
  mode: string;
  bgcolors: {
    background: string;
    surface1: string;
    surface2: string;
    surface3: string;
    primary: string;
    secondary: string;
  };
  textcolors: {
    background: string;
    surface1: string;
    primary: string;
    secondary: string;
  };
  bordercolor: { primary: string };

  scrollbar: {
    thumbcolor: string;
  };
}

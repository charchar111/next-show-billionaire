export interface IbillionaireIndex {
  id: string;
  name: string;
  squareImage: string;
  netWorth: number;
  industries: string[];
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

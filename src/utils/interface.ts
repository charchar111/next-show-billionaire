export interface IbillionaireIndex {
  id: string;
  name: string;
  squareImage: string;
  netWorth: number;
  industries: string[];
}

export interface Ipage {
  total: undefined | number;
  current: number;
}

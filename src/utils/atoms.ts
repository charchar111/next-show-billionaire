import { atom } from "recoil";
import { Ipage } from "./interface";

export const pageAtom = atom<Ipage>({
  key: "pageAtomState",
  default: { total: undefined },
});

import { ITheme } from "@/utils/interface";

export const theme: { dark: ITheme } = {
  dark: {
    mode: "dark",
    bgcolors: {
      background: "rgb(34,35,42)",
      surface1: "rgb(52,53,60)",
      surface2: "rgb(50,50,50)",
      surface3: "rgb(75,75,75)",
      primary: "rgba(187,134,252,0.5)",
      secondary: "rgba(3,218,198,0.5)",
    },
    textcolors: {
      background: "rgba(255,255,255,0.9)",
      surface1: "rgba(255,255,255,0.9)",
      primary: "rgba(0,0,0,0.95)",
      secondary: "rgba(0,0,0,0.95)",
    },

    bordercolor: { primary: "rgba(255,255,255,0.6)" },
    scrollbar: {
      thumbcolor: "rgba(90,90,90)",
    },
  },
};

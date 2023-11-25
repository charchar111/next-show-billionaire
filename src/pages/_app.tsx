import { theme } from "@/constants/theme";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

const dark = theme.dark;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
      <style global jsx>{`
        body {
          background-color: ${dark.bgcolors.background};
          color: ${dark.textcolors.background};
        }
        a {
          opacity: 0.7;
          transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
          &:hover {
            opacity: 1;
          }
        }
      `}</style>
    </RecoilRoot>
  );
}

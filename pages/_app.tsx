import NavByTailwind from "../components/custom/NavByTailwind";
import { RootStore } from "../context/RootStore";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootStore>
      <NavByTailwind/>
      <Component {...pageProps} />
    </RootStore>
  );
}

export default MyApp;

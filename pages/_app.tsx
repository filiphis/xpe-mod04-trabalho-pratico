import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import type { AppProps } from "next/app";
import "@/styles/globals.css";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

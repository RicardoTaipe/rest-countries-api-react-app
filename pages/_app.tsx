import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({
  weight: ["300", "600", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout font={nunitoSans.className}>
      <Component {...pageProps} />
    </Layout>
  );
}

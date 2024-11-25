import "@/styles/globals.css";
import type {AppProps} from "next/app";
import Head from "next/head";

export default function App({Component, pageProps}: AppProps) {
  return (
      <>
        <Head>
          <title>رزرویتو</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <meta name="description" content="Your page description here"/>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Component {...pageProps} />
      </>
  )
}

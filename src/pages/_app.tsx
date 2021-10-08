import type { AppProps } from "next/app";
import { Materialize } from "../styles/Materialize";
import { Global, css } from "@emotion/react";
import Head from "next/head";
import { fonts } from "../styles/fonts";
import "../styles/slider/slider.css";
import "../styles/style.css";
import "swiper/css";
import "swiper/css/navigation";
import { colors } from "../styles/colors";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Mueble Center</title>

        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta property="og:image" content="./prev2.jpg" />
        <meta name="theme-color" content={colors.green} />
        <link rel="stylesheet" href={fonts.link} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta
          name="description"
          content="This is a lading page about furnitures. Created with Next.js and Emotion"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color={colors.black}
        />
      </Head>
      <Global styles={Materialize} />
      <Component {...pageProps} />
    </>
  );
};
export default MyApp;

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
        <meta property="og:image" content="./prevpage.png"></meta>
        <meta name="theme-color" content={colors.green}></meta>
        <link rel="stylesheet" href={fonts.link} />
        <meta
          name="description"
          content="This is a lading page about furnitures. Created with Next.js and Emotion"
        />
      </Head>
      <Global styles={Materialize} />
      <Component {...pageProps} />
    </>
  );
};
export default MyApp;

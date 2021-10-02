import type { AppProps } from 'next/app'
import { Materialize } from '../styles/Materialize'
import { Global, css } from '@emotion/react'
import Head from 'next/head'
import {fonts} from '../styles/fonts'
import '../styles/slider/slider.css'
import '../styles/style.css'
import "swiper/css";
import 'swiper/css/navigation';


const  MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
    <Head>
      <link rel="stylesheet" href={fonts.link} />
    </Head>
    <Global styles={Materialize}/>
    <Component {...pageProps} />
    </>
  )
}
export default MyApp

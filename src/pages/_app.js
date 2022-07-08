import { useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from 'analytics';
import 'rc-drawer/assets/index.css';
import 'rc-tabs/assets/index.css';
import 'swiper/swiper-bundle.css';
import Head from 'next/head';
import icon from './l.png';

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);

  return <>
   <Head>
    <title>ZEAL Education</title>
      <link rel="icon" href={icon} />
    </Head>
  <Component {...pageProps} />
  </>;
}

/* eslint-disable react/prop-types */
import '../styles/main.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>teste</title>
    </Head>
    <Component {...pageProps} />
  </>
);
export default App;

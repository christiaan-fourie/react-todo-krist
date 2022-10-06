import '../styles/tailwind.css';
import '../styles/globals.css';
import Head from 'next/head'


import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className='h-screen bg-gray-900 text-gray-100'>
      <Head>
        <title>Simple To Do App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon"></link>
      </Head>
      <Component {...pageProps} />
    </div>
  );  
};

export default MyApp;

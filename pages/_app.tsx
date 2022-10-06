import '../styles/tailwind.css';
import '../styles/globals.css';
import HeaderIncludes from '../pages/components/HeaderIncludes';


import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className='h-screen bg-gray-900 text-gray-100'>
      <HeaderIncludes />
      <Component {...pageProps} />
    </div>
  );  
};

export default MyApp;

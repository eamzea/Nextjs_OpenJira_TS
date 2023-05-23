import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider as UI_PROVIDER } from '@/context/ui';
import { ENTRIES_PROVIDER } from '@/context/entries';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {

  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='initial-scale=1, width=device-width'
        />
      </Head>
      <UI_PROVIDER>
        <ENTRIES_PROVIDER>
          <Component {...pageProps} />
        </ENTRIES_PROVIDER>
      </UI_PROVIDER>
    </>
  );
};

export default App;

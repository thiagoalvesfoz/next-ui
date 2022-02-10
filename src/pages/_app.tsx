import type { NextComponentType, NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import 'theme/global.css';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import theme from 'theme';
import Head from 'next/head';

type NextPageWithLayout = NextPage & {
  Layout: NextComponentType;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout || EmptyLayout;

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Next UI</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

interface MainProps {
  children: JSX.Element;
}

const EmptyLayout = ({ children }: MainProps) => <>{children}</>;

export default App;

import '../styles/globals.scss';
import '../styles/nProgress.scss';
import nProgress from 'nprogress';
import Router from 'next/router';
import Head from 'next/head';
import Page from '../components/Layout/Page';

Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeComplete', () => nProgress.done());
Router.events.on('routeChangeError', () => nProgress.done());

function MyApp({ Component, pageProps }: any) {
  return (
    <Page>
      <Head>
        <title>Movies</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
    </Page>
  );
}

export default MyApp;

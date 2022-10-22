import '../styles/globals.scss';
import '../styles/nProgress.scss';
import nProgress from 'nprogress';
import Router from 'next/router';
import Head from 'next/head';
import Page from '../components/Layout/Page';
import { store } from '../store';
import { Provider } from 'react-redux';

Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeComplete', () => nProgress.done());
Router.events.on('routeChangeError', () => nProgress.done());

function MyApp({ Component, pageProps }: any) {
  return (
    <Provider store={store}>
      <Page>
        <Head>
          <title>Movies</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Head>
        <Component {...pageProps} />
      </Page>
    </Provider>
  );
}

export default MyApp;

import Page from "../components/Page";
import NProgress from "nprogress";
import Router from 'next/router';
import { ApolloProvider } from '@apollo/client';
import '../components/styles/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function theApp({ Component, pageProps }) {
  return (
    <ApolloProvider client="">
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  )
}

export default theApp;
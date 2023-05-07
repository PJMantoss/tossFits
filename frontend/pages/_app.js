import Page from "../components/Page";
import NProgress from "nprogress";
import Router from 'next/router';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

import 'nprogress/nprogress.css'

function theApp({ Component, pageProps }) {
  return (
    <Page>
        <Component {...pageProps} />
    </Page>
  )
}

export default theApp;
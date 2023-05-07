import Page from "../components/Page";
import { NProgress } from "nprogress";
import Router from 'next/router';

import 'nprogress/nprogress.css'

function theApp({ Component, pageProps }) {
  return (
    <Page>
        <Component {...pageProps} />
    </Page>
  )
}

export default theApp;
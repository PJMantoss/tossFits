import Page from "../components/Page";
import NProgress from "nprogress";
import Router from 'next/router';
import { ApolloProvider } from '@apollo/client';
import withData from '../lib/withData';
import '../components/styles/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function theApp({ Component, pageProps, apollo }) {
  console.log(apollo)
  return (
    <ApolloProvider client={apollo}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  )
}

theApp.getInitialProps = async function({ Component, ctx }){
  let pageProps = {};

  if(Component.getInitialProps){
    pageProps = await Component.getInitialProps(ctx);
  }

  pageProps.query = ctx.query;

  return { pageProps };
}

export default withData(theApp);
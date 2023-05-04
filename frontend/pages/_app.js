import Page from "../components/Page";

function theApp({ Component, pageProps }) {
  return (
    <Page>
        <Component {...pageProps} />
    </Page>
  )
}

export default theApp;
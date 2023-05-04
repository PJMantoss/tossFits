import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

function Page({ children, cool }) {
  return (
    <Page>
      <Header />
      <h1>I am the Page Component</h1>
      <h3>{cool}</h3>
        {children}
    </Page>
  )
}

Page.PropTypes = {
  cool: PropTypes.string,
  children: PropTypes.any
}

export default Page;
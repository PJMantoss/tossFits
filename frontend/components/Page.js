import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    --red: #ff0000;
    --black: #393939;
    --grey: #3A3A3A;
    --gray: var(--grey);
    --lightGrey: #e1e1e1;
    --lightGray: var(--lightGrey);
    --offWhite: #ededed;
    --maxWidth: 1000px;
    --boxShadow: 0px 12px 24px rgba(0,0,0,0.09);
  }
`;

function Page({ children, cool }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <h1>I am the Page Component</h1>
      <h3>{cool}</h3>
        {children}
    </div>
  )
}

Page.PropTypes = {
  cool: PropTypes.string,
  children: PropTypes.any
}

export default Page;
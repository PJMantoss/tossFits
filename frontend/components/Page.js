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
    --offWhite: #ededed;
  }
`;

function Page({ children, cool }) {
  return (
    <div>
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
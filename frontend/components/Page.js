import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2');
    format('woff2');
    font-weight: normal;
    font-style: normal;
  }

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
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'radnika_next', Roboto, Oxygen, Ubuntu, 'Open Sans', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  a {
    text-decoration: none;
    color: var(--black);
  }

  a:hover {
    text-decoration: underline;
  }
`;

const innerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

function Page({ children, cool }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <innerStyles>
        {children}
      </innerStyles>
    </div>
  )
}

Page.propTypes = {
  cool: PropTypes.string,
  children: PropTypes.any
}

export default Page;
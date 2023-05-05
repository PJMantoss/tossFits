import React from 'react';
import Link from 'next/link';
import Nav from './Nav';
import styled from 'styled-components';

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2; 
  background: red;
  transform: skew(-7deg);
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`;

const HeaderStyles = styled.header`
  .bar {
    border-bottom: 10px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    
  }
`;

function Header() {
  return (
    <header>
        <div className='bar'>
          <Logo>
            <Link href='/'>Toss Fits</Link>
          </Logo>
        </div>

        <div className='sub-bar'>
            <p>Search</p>
        </div>

        <Nav />
    </header>
  )
}

export default Header;
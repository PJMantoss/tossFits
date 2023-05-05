import React from 'react';
import Link from 'next/link';
import Nav from './Nav';
import styled from 'styled-components';

function Header() {
  return (
    <header>
        <div className='bar'>
            <Link href='/'>
              <h2>Toss Fits</h2>
            </Link>
        </div>

        <div className='sub-bar'>
            <p>Search</p>
        </div>

        <Nav />
    </header>
  )
}

export default Header;
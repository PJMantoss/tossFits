import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <header>
        <div className='bar'>
            <Link href='/'>Toss Fits</Link>
        </div>

        <div className='sub-bar'>
            <p>Search</p>
        </div>
    </header>
  )
}

export default Header;
import React from 'react';
import Link from 'next/link';
import NavStyles from './styles/NavStyles';

function Nav() {
  return (
    <NavStyles>
        <Link href='/products'>Products</Link>
        <Link href='/sell'>sell</Link>
        <Link href='/orders'>Orders</Link>
        <Link href='/account'>Account</Link>
    </NavStyles>
  )
}

export default Nav
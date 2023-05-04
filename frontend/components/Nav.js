import React from 'react';
import Link from 'next/link';

function Nav() {
  return (
    <nav>
        <Link href='/products'>Products</Link>
        <Link href='/sell'>sell</Link>
        <Link href='/orders'>Orders</Link>
        <Link href='/account'>Account</Link>
    </nav>
  )
}

export default Nav
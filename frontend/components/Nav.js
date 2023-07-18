import React from 'react';
import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import { useUser } from './User';

function Nav() {
  const user = useUser();
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
import React from 'react';
import Products from '../../components/Products';
import Pagination from '../../components/Pagination';
import { useRouter } from 'next/dist/client/router';

function products() {
  const { query } = useRouter();
  //console.log(router);
  return (
    <div>
      <Pagination page={query.page || 1} />
      <Products />
      <Pagination page={1} />
    </div>
  )
}

export default products
import React from 'react';
import Products from '../../components/Products';
import Pagination from '../../components/Pagination';
import { useRouter } from 'next/dist/client/router';

function products() {
  const { query } = useRouter();
  //console.log(typeof query.page);
  const page = parseInt(query.page);
  //console.log(typeof page);
  return (
    <div>
      <Pagination page={page || 1} />
      <Products />
      <Pagination page={page || 1} />
    </div>
  )
}

export default products
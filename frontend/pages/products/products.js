import React from 'react';
import Products from '../../components/Products';
import Pagination from '../../components/Pagination';

function products() {
  return (
    <div>
      <Pagination page={1} />
      <Products />
      <Pagination page={1} />
    </div>
  )
}

export default products
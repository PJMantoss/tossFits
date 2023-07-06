import React from 'react';
import Products from '../components/Products';
import Pagination from '../components/Pagination';

function products() {
  return (
    <div>
      <Pagination />
      <Products />
      <Pagination />
    </div>
  )
}

export default products
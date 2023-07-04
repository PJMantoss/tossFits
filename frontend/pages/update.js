import React from 'react';
import UpdateProduct from '../components/UpdateProduct';

function UpdateProductPage({ query }) {
  
  return (
    <div>
      <UpdateProduct id={query.id} />
    </div>
  )
}

export default UpdateProductPage;
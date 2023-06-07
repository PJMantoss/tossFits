import React from 'react';
import gql from 'graphql-tag';

const ALL_PRODUCTS_QUERY = gql`
    query ALL_PRODUCTS_QUERY {
        allProducts {
            id 
            name
            price
            description
            photo {
                id
                image {
                    publicUrlTransformed
                }
            }
        }
    }
`;

function Products() {
  return (
    <div>Products!!!</div>
  )
}

export default Products;
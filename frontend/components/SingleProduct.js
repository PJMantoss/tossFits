import React, { useQuery } from 'react';
import gql from "graphql-tag";

const SINGLE_ITEM_QUERY = gql`
    query {
        Product(where: {id: "647e32be69b4872c76637519"}){
            name,
            price,
            description
        }
    }
`;

function SingleProduct({ id }) {
    const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY);

  return (
    <div>SingleProduct</div>
  )
}

export default SingleProduct
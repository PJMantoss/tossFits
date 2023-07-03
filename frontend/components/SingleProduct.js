import { useQuery } from '@apollo/client';
import gql from "graphql-tag";
import DisplayError from './ErrorMessage';

const SINGLE_ITEM_QUERY = gql`
    query SINGLE_ITEM_QUERY($id: ID!) {
        Product(where: {id: "647e32be69b4872c76637519"}){
            name,
            price,
            description
        }
    }
`;

function SingleProduct({ id }) {
    const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
        variables: {
            id,
        }
    });
    if (loading) return <p>Loading...</p>
    if (error) return <DisplayError error={error} />

  return (
    <h2>{data.Product.name}</h2>
  )
}

export default SingleProduct
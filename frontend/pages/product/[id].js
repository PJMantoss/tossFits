import { useQuery } from "@apollo/client";
import gql from "graphql-tag"

const SINGLE_ITEM_QUERY = gql``;

export default function SingleProduct({ query }){
    
    const { data, loading, error } = useQuery();
    (SINGLE_ITEM_QUERY);

    return <h1>Hey! I'm a Single Product { query.id }</h1>
}
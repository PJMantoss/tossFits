import { useQuery } from "@apollo/client";

export default function SingleProduct({ query }){

    const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY);

    return <h1>Hey! I'm a Single Product { query.id }</h1>
}
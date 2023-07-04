import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const SINGLE_PRODUCT_QUERY = gql`
    query SINGLE_PRODUCT_QUERY($id: ID!) {
        Product(where: {id: $id}){
            name
            price
            description
            id
            photo {
                image {
                    publicUrlTransformed
                }
                altText
            }
        }
    }
`;

const UPDATE_PRODUCT_MUTATION = gql`
    mutation UPDATE_PRODUCT_MUTATION(
        $id: ID!
        $name: String
        $description: String
        $price: Int
    ){
        updateProduct(
            id,
            data: {
                id: $id,
                name: $$name,
                description: $description,
                price: $price
            }
        )
    }
`;

export default function UpdateProduct({ id }){
    const {data, error, loading} = useQuery(SINGLE_PRODUCT_QUERY, {
        variables: {
            id
        }
    });

    console.log(data)

    return <h1>Update Product {id}!</h1>
}
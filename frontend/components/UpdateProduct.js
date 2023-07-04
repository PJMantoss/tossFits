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

export default function UpdateProduct({ id }){
    return <h1>Update Product {id}!</h1>
}
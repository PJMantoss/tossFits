import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

const DELETE_PRODUCT_MUTATION = gql`
    mutation DELETE_PRODUCT_MUTATION($id: ID!){
        deleteProduct(id: $id){
            id
            name
        }
}
`;

export default function DeleteProduct({ id, children }){
    const [deleteProduct, {loading, error}] = useMutation(DELETE_PRODUCT_MUTATION, {
        variables: {
            id
        }
    });
    return (
    <button 
        type="button" 
        onClick={() => {
            if(confirm("Are You Sure You Want to Delete this Item?")){
                console.log("DELETING");
                deleteProduct().catch(err => err.message);
            };
        }}
    >
        {children}
    </button>
    )
}
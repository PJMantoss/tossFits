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

function update(cache, payload){
    console.log(payload);
    console.log("running the update function after delete");
}

export default function DeleteProduct({ id, children }){
    const [deleteProduct, {loading, error}] = useMutation(DELETE_PRODUCT_MUTATION, {
        variables: {
            id
        },
        update
    });
    
    return (
    <button 
        type="button" 
        disabled={loading}
        onClick={() => {
            if(confirm("Are You Sure You Want to Delete this Item?")){
                console.log("DELETING");
                deleteProduct().catch(err => alert(err.message));
            };
        }}
    >
        {children}
    </button>
    )
}
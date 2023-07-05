import gql from "graphql-tag";

const DELETE_PRODUCT_MUTATION = gql`
    mutation DELETE_PRODUCT_MUTATION($id: ID!){
        deleteProduct($id){
            id
            name
        }
}
`;

export default function DeleteProduct({ id, children }){
    return (
    <button 
        type="button" 
        onClick={() => {
            if(confirm("Are You Sure You Want to Delete this Item?")){
                console.log("DELETING");
            };
        }}
    >
        {children}
    </button>
    )
}
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
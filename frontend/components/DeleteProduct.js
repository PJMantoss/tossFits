export default function DeleteProduct({ id, children }){
    return (
    <button 
        type="button" 
        onClick={() => {
            confirm("Are You Sure You Want to Delete this Item?");
        }}
    >
        {children}
    </button>
    )
}
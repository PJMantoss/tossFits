export default function paginationField(){
    return{
        keyArgs: false, // tells apollo to ignore and allow us handle caching
        // Ask the read function for the product items
        read(existing = [], args, cache){
            console.log(existing, args, cache);
        },
        merge(){}
    }
}
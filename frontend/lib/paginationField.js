export default function paginationField(){
    return{
        keyArgs: false, // tells apollo to ignore nad allow us handle caching
        read(existing = [], args, cache){
            console.log(existing, args, cache);
        },
        merge(){}
    }
}
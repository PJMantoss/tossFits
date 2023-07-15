export default function paginationField(){
    return{
        read(existing = [], args, cache){
            console.log(existing, args, cache);
        },
        merge(){}
    }
}
import { PAGINATION_QUERY } from '../components/Pagination';

export default function paginationField(){
    return{
        keyArgs: false, // tells apollo to ignore and allow us handle caching
        // Ask the read function for the product items
        read(existing = [], args, cache){
            console.log(existing, args, cache);

            const { skip, first } = args;

            // Read the number of items on the page from the cache
            const data = cache.readQuery({ query: PAGINATION_QUERY })
        },
        merge(){}
    }
}
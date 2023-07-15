import { PAGINATION_QUERY } from '../components/Pagination';
import {readQuery} from '@apollo/client';

export default function paginationField(){
    return{
        keyArgs: false, // tells apollo to ignore and allow us handle caching
        // Ask the read function for the product items
        read(existing = [], args, cache){
            console.log(existing, args, cache);

            const { skip, first } = args;

            // Read the number of items on the page from the cache
            const data = cache.readQuery({ query: PAGINATION_QUERY })
            const count = data?._allProductsMeta?.count;
            const page = skip / first + 1;
            const pages = Math.ceil(count / first);

            //check if we have existing items
            const items = existing.slice(skip, skip + first).filter(x => x);
            //If items from existing cache does not equal first variable
            if(items.length !== first){
                // Means we do not have any items, therefore go to the network to fetch new items
            }
        },
        merge(){}
    }
}
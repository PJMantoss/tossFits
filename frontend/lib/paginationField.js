import { PAGINATION_QUERY } from '../components/Pagination';

export default function paginationField(){
    return{
        keyArgs: false, // tells apollo to ignore and allow us handle caching
        // Ask the read function for the product items
        read(existing = [], {args, cache}){
            console.log({existing, args, cache});

            const { skip, first } = args;

            // Read the number of items on the page from the cache
            const data = cache.readQuery({ query: PAGINATION_QUERY });
            console.log(data);
            const count = data?._allProductsMeta?.count;
            const page = skip / first + 1;
            const pages = Math.ceil(count / first);

            //check if we have existing items
            const items = existing.slice(skip, skip + first).filter(x => x);
            if(items.length && items.length !== first && page == pages){
                return items;
            }

            //If items from existing cache does not equal first variable
            if(items.length !== first){
                // Means we do not have any items, therefore go to the network to fetch new items
                return false;
            }

            //If there are items in the cache, we do not need to go to the network. Just return them 
            if(items.length){
                console.log(`There are ${items.length} in the cache! Will send to apollo.`);
                return items;
            }

            return false; //Fallback to networks
        },
        //Runs when apollo client comes back from the network with a product
        merge(existing, incoming, { args }){
            console.log(`Merging items from the network ${incoming.length}`);
            const { skip, first } = args;
            const merged = existing ? existing.slice(0) : [];
            merged.push(incoming);
            for (let i = skip; i < incoming.lenth; ++i){
                merged[i] = incoming[i - skip];
            }

            console.log(merged);

            //Finally return the merged item from the cache
            return merged;
        },
    }
}
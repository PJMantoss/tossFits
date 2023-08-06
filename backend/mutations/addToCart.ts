import { KeystoneContext, SessionStore } from "@keystone-next/types";
import { CartItemCreateInput } from '../.keystone/schema-types';
import { Session } from '../type';

async function addToCart(
    root: any, 
    { productId }: { productId: string },
    context: KeystoneContext
    ): Promise<CartItemCreateInput> {
        console.log('ADDING TO CART')
        // query current user to see if they are signed in
        const see = 
    };


export default addToCart;
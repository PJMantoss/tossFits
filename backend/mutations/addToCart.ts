import { KeystoneContext, SessionStore } from "@keystone-next/types";
import { CartItemCreateInput } from '../.keystone/schema-types';
import { Session } from '../types';

async function addToCart(
    root: any, 
    { productId }: { productId: string },
    context: KeystoneContext
    ): Promise<CartItemCreateInput> {
        console.log('ADDING TO CART')
        // query current user to see if they are signed in
        const sess = context.session as Session;
        if(!sess.itemId){
            throw new Error('You must be signed in to do this');
        }
        // query the current user's cart
        const allCartItems = await context.lists.CartItem.findMany({
            where: { user: { id: sess.itemId }, product: { id: productId } }
        });

        const [existingCartItem] = allCartItems;
        if(existingCartItem){
            console.log(
                `There are ${}, increment by 1!`
            );
        }
    };


export default addToCart;
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
            where: { user: { id: sess.itemId }, product: { id: productId } },
            resolveField: 'id,quantity',
        });

        const [existingCartItem] = allCartItems;
        if(existingCartItem){
            console.log(
                `There are already ${existingCartItem.quantity}, increment by 1!`
            );
            return await context.lists.CartItem.updateOne({
                id: existingCartItem.id,
                data: { quantity: existingCartItem.quantity + 1 },
            });
        }

        return await context.lists.CartItem.createOne({
            data: {
                product: { connect: {id: productId} },
                user: { connect: {id: sess.itemId} },
            }
        });
    };


export default addToCart;
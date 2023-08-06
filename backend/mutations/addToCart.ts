import { KeystoneContext, SessionStore } from "@keystone-next/types";
import { CartItemCreateInput } from '../.keystone/schema-types';

export default function addToCart(
    root: any, 
    { productId }: { productId: String },
    context: KeystoneContext
    ): Promise<CartItemCreateInput>{
        console.log('ADDING TO CART')
    };
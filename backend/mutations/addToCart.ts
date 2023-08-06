import { KeystoneContext } from "@keystone-next/types";

export const addToCart(
    root: any, 
    { productId }: { productId: String },
    context: KeystoneContext
    ){
        console.log('ADDING TO CART')
    };
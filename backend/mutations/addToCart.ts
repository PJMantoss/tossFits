import { KeystoneContext } from "@keystone-next/types";

export default function addToCart(
    root: any, 
    { productId }: { productId: String },
    context: KeystoneContext
    ){
        console.log('ADDING TO CART')
    };
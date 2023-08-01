import CartStyles from "./styles/CartStyles";
import { useUser } from './User';


export default function Cart(){
    const me = useUser();
    if(!me) return null;
    console.log(me);
    return(
        <CartStyles open>
            <header></header>
            {me.email}
        </CartStyles>
    )
}
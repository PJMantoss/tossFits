import CartStyles from "./styles/CartStyles";
import { useUser } from './User';
import Supreme from './styles/Supreme';

function CartItem({ cartItem }){
    return
}

export default function Cart(){
    const me = useUser();
    if(!me) return null;
    console.log(me);
    return(
        <CartStyles open>
            <header>
                <Supreme>
                    {me.name}'s Cart 
                </Supreme>
            </header>
            <ul>
                {
                    me.cartItem.map(cartItem => <CartItem cartItem={cartItem}/>)
                }
            </ul>
        </CartStyles>
    )
}
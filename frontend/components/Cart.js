import CartStyles from "./styles/CartStyles";
import { useUser } from './User';
import Supreme from './styles/Supreme';

export default function Cart(){
    const me = useUser();
    if(!me) return null;
    console.log(me);
    return(
        <CartStyles open>
            <header>
                <Supreme>
                    {me.name}'s cart 
                </Supreme>
            </header>
        </CartStyles>
    )
}
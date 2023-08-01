import CartStyles from "./styles/CartStyles";
import { useUser } from './User';
import Supreme from './styles/Supreme';
import styled from 'styled-components';

const CartItemStyles = styled.li`
    padding: 1rem 0;
    h3, p {
        margin: 0;
    }
`;

function CartItem({ cartItem }){
    const { product } = cartItem;
    return (
        <CartItemStyles>
            <img 
                src={product.photo.image.publicUrlTransformed}
                alt={product.name}
            />
        </CartItemStyles>
    )
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
                    me.cart.map(cartItem => (
                        <CartItem key={cartItem.id} cartItem={cartItem}/>
                    ))
                }
            </ul>
        </CartStyles>
    )
}
import CartStyles from "./styles/CartStyles";
import { useUser } from './User';
import Supreme from './styles/Supreme';
import styled from 'styled-components';
import formatMoney from '../lib/formatMoney';
import calcTotalPrice from '../lib/calcTotalPrice';
import { useCart } from "../lib/cartState";

const CartItemStyles = styled.li`
    display: 'grid';
    grid-template-columns: auto 1fr auto;
    padding: 1rem 0;
    border-bottom: 1px solid var(--lightGrey);
    image {
        margin-right: 1rem;
    } 
    h3, p {
        margin: 0;
    }
`;

function CartItem({ cartItem }){
    const { product } = cartItem;
    return (
        <CartItemStyles>
            <img 
                width='100'
                src={product.photo.image.publicUrlTransformed}
                alt={product.name}
            />
            <div>
                <h3>{product.name}</h3>
                <p>
                    {formatMoney(product.price * cartItem.quantity)} - 
                    <em>
                        {cartItem.quantity} &times; {formatMoney(product.price)} each
                    </em>
                </p>
            </div>
        </CartItemStyles>
    )
}

export default function Cart(){
    const me = useUser();
    const { cartOpen, closeCart } = useCart();
    if(!me) return null;
    console.log(me);
    return(
        <CartStyles open={ cartOpen }>
            <header>
                <Supreme>
                    {me.name}'s Cart 
                </Supreme>
            </header>
            <button onClick={closeCart}>&times;</button>
            <ul>
                {
                    me.cart.map(cartItem => (
                        <CartItem key={cartItem.id} cartItem={cartItem}/>
                    ))
                }
            </ul>
            <footer>
                <p>
                    {formatMoney(calcTotalPrice(me.cart))}
                </p>
            </footer>
        </CartStyles>
    )
}
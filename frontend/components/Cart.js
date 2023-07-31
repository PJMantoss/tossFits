import CartStyles from "./styles/CartStyles";

export default function Cart(){
    const me = useUser();
    return(
        <CartStyles open>
            Hi!
        </CartStyles>
    )
}
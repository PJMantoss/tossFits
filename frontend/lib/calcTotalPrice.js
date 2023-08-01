export default function calcTotalPrice(cart){
    return cart.reduce((tally, cartItem) => 0)
}
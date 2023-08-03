import { useState, createContext } from "react";

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({ children }){
    const [ cartOpen, setCartOpen ] = useState(true);

    function toggleCart(){
        setCartOpen(!cartOpen);
    }

    function closeCart(){
        setCartOpen(false);
    }

    function openCart(){
        setCartOpen(true);
    }

    return(
        <LocalStateProvider value={{ 
                cartOpen, 
                setCartOpen,
                toggleCart, 
                closeCart,
                openCart
            }}
        >
            {children}
        </LocalStateProvider>
    );
}

//Custom hook for accessing cart local state
function useCart(){
    const all = useContext(LocalStateContext);
    return all;
};

export { CartStateProvider, useCart };
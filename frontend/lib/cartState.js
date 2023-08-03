import { useState, createContext } from "react";

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({ children }){
    const [ cartOpen, setCartOpen ] = useState(false);

    function toggleCart(){
        setCartOpen();
    }

    function closeCart(){
        setCartOpen(!cartOpen);
    }

    function openCart(){
        setCartOpen();
    }

    return(
        <LocalStateProvider value={{ cartOpen, setCartOpen }}>
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
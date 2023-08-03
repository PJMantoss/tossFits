import { createContext } from "react";

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({ children }){
    const cartOpen = true;

    return(
        <LocalStateProvider value={{ cartOpen }}>
            {children}
        </LocalStateProvider>
    );
}

//Custom hook for accessing cart local state
function useCart(){
    const all = useContext(LocalStateContext);
    return all;
};

export { CartStateProvider };
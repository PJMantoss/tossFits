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
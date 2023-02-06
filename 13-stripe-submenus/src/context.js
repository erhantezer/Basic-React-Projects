import { createContext, useContext } from "react";

//! 1 create
const AppContext = createContext();

//! custom Hook
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export const AppProvider = ({children}) => {


    return(
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
        )
}
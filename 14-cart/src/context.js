import { createContext, useContext, useReducer } from "react";
import {cartItems} from './data'
import { reducer } from "./reducer";

const url = 'https://course-api.com/react-useReducer-cart-project'

const AppContext = createContext();

export const useGlobalContext = () => {
    return useContext(AppContext)
}



const initialState = {
    loading: false,
    cart: cartItems,
    total: 0,
    amount: 0,
}

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

const fetchData = async () => {
    dispatch({type: "LOADİNG"})
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({type: "DISPLAY_ITEMS", payload: cart})
}

    return (
        <AppContext.Provider value={{...state, fetchData}}>
            {children}
        </AppContext.Provider>
        )
}

export default AppProvider;
import { createContext, useContext } from "react";


const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?';

const initialState = {
    isLoading: true,
    hits: [],
    query: "react",
    page: 0,
    nbPages: 0,
} 


const AppContext = createContext();

export const useGlobalContext = () => {
    return useContext(AppContext)
};

export const AppProvider = ({ children }) => {


    return (
        <AppContext.Provider>
            {children}
        </AppContext.Provider>
    )
}
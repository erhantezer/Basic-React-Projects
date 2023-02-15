import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";
import { SET_LOADING, SET_STORIES } from "./actions";


const AppContext = createContext();

export const useGlobalContext = () => {
    return useContext(AppContext)
};

const initialState = {
    isLoading: true,
    hits: [],
    query: "react",
    page: 0,
    nbPages: 0,
}

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?';

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchStories = async (url) => {
        dispatch({ type: SET_LOADING });
        try {
            const res = await fetch(url);
            const data = await res.json()
            dispatch({ type: SET_STORIES, payload: { hits: data.hits, nbPages: data.nbPages } })
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <AppContext.Provider value={{...state}}>
            {children}
        </AppContext.Provider>
    )
}
import {createContext, useContext, useState} from "react"

const AppContext = createContext();

export const useGlobalContext = () => {
    return useContext(AppContext);
}

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const AppProvider = ({children}) => {
const [loading, setLoading] = useState(false);
const [searchTerm, setSearchTerm] = useState("a")
const [cocktails, setCocktails] = useState([])

const fetchApı =  async () => {
    try {
        const res = await fetch(`${url}${searchTerm}`);
        const data = await res.json()
        console.log(data)
    } catch (error) {
        
    }
}

    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
        )
}
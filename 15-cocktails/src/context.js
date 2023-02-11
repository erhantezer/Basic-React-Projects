import { createContext, useCallback, useContext, useEffect, useState } from "react"

const AppContext = createContext();

export const useGlobalContext = () => {
    return useContext(AppContext);
}

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("a")
    const [cocktails, setCocktails] = useState([])


    const fetchApı = useCallback(async () => {
        setLoading(true);
        try {
            const res = await fetch(`${url}${searchTerm}`);
            const data = await res.json()
            console.log(data);
            const { drinks } = data;
            if (drinks) {
                const newCocktails = drinks.map((item) => {
                    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
                    return {
                        id: idDrink,
                        name: strDrink,
                        image: strDrinkThumb,
                        info: strAlcoholic,
                        glass: strGlass,
                    }
                })
                setCocktails(newCocktails)
            } else {
                setCocktails([])
            }
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    },[searchTerm])

    useEffect(() => {
        fetchApı()
    }, [searchTerm,fetchApı]);

    return (
        <AppContext.Provider value={{loading, cocktails, searchTerm,setSearchTerm}}>
            {children}
        </AppContext.Provider>
    )
}
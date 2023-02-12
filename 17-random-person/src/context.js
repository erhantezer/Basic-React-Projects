import { createContext, useContext, useEffect, useState } from "react";


const AppContext = createContext();

export const useGlobalContext = () => {
    return useContext(AppContext);
};


const url = 'https://randomuser.me/api/'
// const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'

export const AppProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [person, setPerson] = useState([]);
    const [value, setValue] = useState('random person');
    const [title, setTitle] = useState('name');

    const getData = async () => {
        setLoading(true)
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data.results[0])
            
            setPerson(data.results[0])
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, []);


    return (
            <AppContext.Provider value={{loading, person}}>
                {children}
            </AppContext.Provider>
        )
}
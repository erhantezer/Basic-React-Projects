// import { createContext, useContext, useEffect, useState } from "react";


// const AppContext = createContext();

// export const useGlobalContext = () => {
//     return useContext(AppContext);
// };


// const url = 'https://randomuser.me/api/'


// export const AppProvider = ({ children }) => {
//     const [loading, setLoading] = useState(false);
//     const [person, setPerson] = useState([]);
//     const [value, setValue] = useState('random person');
//     const [title, setTitle] = useState('name');

//     const getData = async () => {
//         setLoading(true)
//         try {
//             const response = await fetch(url);
//             const data = await response.json();
//             console.log(data.results[0])

//             setPerson(data.results[0])
//             setLoading(false)

//         } catch (error) {
//             console.log(error);
//             setLoading(false)
//         }
//         setTitle('name')
//         setValue(`${person.name.first} ${person.name.last}`)
//     }

//     useEffect(() => {
//         getData()
//     }, []);


//     return (
//         <AppContext.Provider value={{ loading, person, value, title, setValue, setTitle }}>
//             {children}
//         </AppContext.Provider>
//     )
// }
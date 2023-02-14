import { useEffect, useState } from "react";



const useFetch = () => {
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState({ show: false, msg: '' })
    const [query, setQuery] = useState('batman')

    const API_KEY = "fcacb142"
    const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`

    const fetchData = async () => {
        setLoading(true)

        try {
            const res = await fetch(API_ENDPOINT);
            const data = await res.json()
            
            setMovies(data.Search);
            if (data.Response === true) {
                setError({ show: false, msg: '' });
            } else {
                setError({ show: true, msg: data.Error })
            }
            setLoading(false)

        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }


    useEffect(() => {
        fetchData()
    }, [query]);

console.log(movies)

    return { loading, movies, error, query, setQuery }

}

export default useFetch
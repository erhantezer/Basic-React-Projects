import { useEffect, useState } from "react";

const API_KEY = "fcacb142"
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${API_KEY}&s=`

const useFetch = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState({ show: false, msg: '' })
    const [query, setQuery] = useState('batman')

    const fetchData = async (url) => {
        setLoading(true)

        try {
            const res = await fetch(url);
            const data = await res.json()
            if (data.Response === true) {
                setData(data.Search || data);
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
        fetchData(`${API_ENDPOINT}${query}`)
    }, []);

    return { loading, data, error, setQuery }

}

export default useFetch
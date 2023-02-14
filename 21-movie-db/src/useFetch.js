import { useEffect, useState } from "react";


const url = ""
const useFetch = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const fetchData = async () => {
        setLoading(true)
        try {
            const res = await fetch(url);
            const data = await res.json()
            setData(data)
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    return { loading, data }

}

export default useFetch
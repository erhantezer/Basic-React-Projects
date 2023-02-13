import { useEffect, useState } from "react";
import paginate from "../utils/paginate";

const url = 'https://api.github.com/users/erhantezer/followers?per_page=100';

const useFetch = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const getProducts = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
            setData(paginate(data))
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

useEffect(() => {
    getProducts()
}, []);

    return {loading, data}


}

export default useFetch
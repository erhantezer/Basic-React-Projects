import React from 'react'
import Movies from '../components/Movies'
import SearchForm from '../components/SearchForm'

const Home = () => {
    return (
        <>
            <SearchForm />
            <Movies />
        </>
    )
}

export default Home
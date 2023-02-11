import { useEffect, useRef } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
    const { setSearchTerm } = useGlobalContext()
    const searchValue = useRef('')

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        searchValue.current.focus();
    })

    return (
        <section className='section search'>
            <form className='search-form' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor="name">search your favorite cocktail</label>
                    <input
                        type="text"
                        name="name"
                        id='name'
                        onChange={(e) => setSearchTerm(searchValue.current.value)}
                    />
                </div>
            </form>
        </section>
    )
}

export default SearchForm
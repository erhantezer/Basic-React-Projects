import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
const { query, handleSerach } = useGlobalContext();

  return (
    <form onSubmit={(e) => e.preventDefault()} className='search-form'>
      <h2>search hacker news</h2>
      <input
        type="text"
        className='form-input'
        value={query}
        onChange={(e) => handleSerach(e.target.value)}
      />
    </form>
  )
}

export default SearchForm
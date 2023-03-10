import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const SingleCocktail = () => {
  const location = useLocation();
  const{ image, name, id, info, glass,instructions,category } =location.state
  console.log(location.state)
  return (
    <section className='section cocktail-section' key={id}>
    <Link to='/' className='btn btn-primary'>
      back home
    </Link>
    <h2 className='section-title'>{name}</h2>
    <div className='drink'>
      <img src={image} alt={name}></img>
      <div className='drink-info'>
        <p>
          <span className='drink-data'>name :</span> {name}
        </p>
        <p>
          <span className='drink-data'>category :</span> {category}
        </p>
        <p>
          <span className='drink-data'>info :</span> {info}
        </p>
        <p>
          <span className='drink-data'>glass :</span> {glass}
        </p>
        <p>
          <span className='drink-data'>instructons :</span> {instructions}
        </p>
        {/* <p>
          <span className='drink-data'>ingredients :</span>
          {ingredients.map((item, index) => {
            return item ? <span key={index}> {item}</span> : null
          })}
        </p> */}
      </div>
    </div>
  </section>
  )
}

export default SingleCocktail
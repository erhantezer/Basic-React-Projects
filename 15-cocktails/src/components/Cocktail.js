import { Link } from 'react-router-dom'

const Cocktail = ({ item }) => {
    const { image, name, id, info, glass,} = item

    return (
        <article className='cocktail'>
            <div className='img-container'>
                <img src={image} alt={name} />
            </div>
            <div className='cocktail-footer'>
                <h3>{name}</h3>
                <h4>{glass}</h4>
                <p>{info}</p>
                <Link to={`/cocktail/${id}`} state={{ ...item }} className='btn btn-primary btn-details'>
                    details
                </Link>
            </div>
        </article>
    )
}

export default Cocktail;
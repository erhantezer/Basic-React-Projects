import { useState } from "react"
import reviews from "./data"

const Review = () => {
const [index, setIndex] = useState(0);
const {id, name, job, image} = reviews[index];


  return (
    <article className='review'>
      <div className='img-container'>
        <img src={null} alt={null} className='person-img' />
        <span className='quote-icon'>
          {/* <FaQuoteRight /> */}
        </span>
      </div>
      <h4 className='author'>{null}</h4>
      <p className='job'>{null}</p>
      <p className='info'>{null}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={null}>
          {/* <FaChevronLeft /> */}
        </button>
        <button className='next-btn' onClick={null}>
          {/* <FaChevronRight /> */}
        </button>
      </div>
      <button className='random-btn' onClick={null}>
        surprise me
      </button>
    </article>
  )
}

export default Review
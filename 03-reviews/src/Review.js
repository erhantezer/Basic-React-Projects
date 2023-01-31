import { useState } from "react";
import reviews from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false)
  const { name, job, image, text } = reviews[index];
  console.log(reviews[0])

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    } else if (number < 0) {
      return reviews.length - 1
    } else {
      return number;
    }
  }


  const nextPerson = () => {
    setIndex((index) => {
      const newNext = index + 1;
      return checkNumber(newNext)
    })
  }

  const prevPerson = () => {
    setIndex((index) => {
      const newPrev = index - 1
      return checkNumber(newPrev)
    })
  }

  const randomPerson = () => {
    let randomNum = Math.floor(Math.random() * reviews.length);
    if (randomNum === index) {
      randomNum = index + 1;
    }
    setIndex(checkNumber(randomNum))
  }

  return (
    <article className='review'>

      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>

      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>

      <p className='info'>
        {show ? text : `${text.slice(0, 10)}... `}
        <button onClick={() => setShow(!show)}>
          {show ? " Show Less" : " Read More"}
        </button>
      </p>

      <div className='button-container'>

        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>

        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>

      </div>
      <button className='random-btn' onClick={randomPerson}>
        surprise me
      </button>
      
    </article>
  )
}

export default Review
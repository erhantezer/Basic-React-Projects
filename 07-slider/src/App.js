import { useEffect, useState } from "react";
import data from "./data";
import { FaQuoteRight } from 'react-icons/fa';


function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, people]);


  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index +1);
    }, 5000);
    return () => {
      clearInterval(slider)
    }
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, perIndex) => {
          const { id, image, name, title, quote } = person;
          return (
            <article className="activeSlide" key={id} >
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          )
        })}
      </div>
    </section>
  );
}

export default App;

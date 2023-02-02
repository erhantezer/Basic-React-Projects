import data from "./data";
import {useState} from "react";

function App() {
  const [text, setText] = useState([]);
  const [count, setCount] = useState(0);


  const handleSubmit = (e) => {
    e.preventDefault();
    let amount= parseInt(count)
    if(count <= 0) {
      amount= 0
    };
    if( count > 8){
      amount = 8
    };
    setText(data.slice(0, amount))
  }

  const erhan = ["we", "kl", "şş", "dd", "ff"]
  console.log(erhan.slice(0,2))
  console.log(erhan.slice(0,3));

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input 
        type="number"
        name="amount"
        id="amount"
        onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn">generate</button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  );
}

export default App;

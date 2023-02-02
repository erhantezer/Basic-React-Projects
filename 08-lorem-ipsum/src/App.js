import data from "./data";
import {useState} from "react";

function App() {
  const [text, setText] = useState([]);
  const [count, setCount] = useState(0);


  const handleSubmit = (e) => {
    
  }

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
    </section>
  );
}

export default App;

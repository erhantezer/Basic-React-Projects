import { useState } from "react";


function App() {
const [color, setColor] = useState("");
const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

  }
  return (
    <section className="container">
      <h3>color generator</h3>
      <form onSubmit={handleSubmit}>
        <input type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#f15025"
          className={`${error ? "error" : null}`}
        />
        <button className="btn" type="submit">
          submit
        </button>
      </form>
    </section>
  );
}

export default App;

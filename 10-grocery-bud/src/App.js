import {useEffect, useState} from "react";


function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(JSON.parse(localStorage.getItem('list')));

const handleSubmit = (e) => {
  e.preventDefault()
}

useEffect(() => {
  localStorage.setItem("list", JSON.stringify(list))
},[list])

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit} >
        <h3>grocery bud</h3>
        <div className="form-control">
          <input 
          type="text"
          className="grocery"
          placeholder="e.g. eggs"
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default App;

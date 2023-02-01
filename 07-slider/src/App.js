import { useState } from "react";
import data from "./data";


function App() {
  const [people, setPeople] = useState(data);


  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {people?.map((person, perIndex) => {
          const {id, image, name, title, quote} = person;
          
        })}
      </div>
    </section>
  );
}

export default App;

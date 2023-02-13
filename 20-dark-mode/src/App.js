import Article from "./Article";
import data from "./data";
import {useState} from "react"

function App() {
  const [theme, setTheme] = useState("aaa");

const toggleBtn = () => {
  console.log(theme)
}

  return (
    <main>
      <nav>
      <div className="nav-center">
          <h1>overreacted</h1>
          <button className="btn" onClick={toggleBtn}>
            toggle
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((item) => {
          return <Article key={item.id} {...item} />;
        })}
      </section>

    </main>
  );
}

export default App;

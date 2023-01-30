import { useEffect, useState } from "react";
import Tours from "./Tours";

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);


  const removeTours = (id) => {
    const newTours = tours.filter((item) =>item.id !== id )
    setTours(newTours)
  }


  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setTours(data)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchTours()
  }, []);



  return (
    <>
      {loading ? (
        <main>
          <div className="loading">
            <h1>Loading...</h1>
          </div>
        </main>
      ) : (
        tours.length === 0 ? (
          <main>
            <div className='title'>
              <h2>No Tours Left</h2>
              <button className='btn' onClick={() => fetchTours()}>
                Refresh
              </button>
            </div>
          </main>
        ) : (
          <main>
            <Tours tours={tours} removeTours={removeTours} />
          </main>
        )
      )}
    </>
  );
}

export default App;

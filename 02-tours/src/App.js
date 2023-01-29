import { useEffect, useState } from "react";
import Tours from "./Tours";

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours)
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
              <h2>no tours left</h2>
              <button className='btn' onClick={() => fetchTours()}>
                refresh
              </button>
            </div>
          </main>
        ) : (
          <main>
            <Tours />
          </main>
        )
      )}
    </>
  );
}

export default App;

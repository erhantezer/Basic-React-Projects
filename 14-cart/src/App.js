import CartContainer from "./CartContainer";
import { useGlobalContext } from "./context";
import Navbar from "./Navbar";


function App() {
  const { loading } = useGlobalContext();



  return (
    <>
      {loading ? (
        <div className='loading' >
          <h1>Loading...</h1>
        </div>
      ) : (
        <main>
          <Navbar />
          <CartContainer />
        </main>
      )
      }
    </>
  )

}

export default App;

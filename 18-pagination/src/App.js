import useFetch from "./hooks/useFetch";


function App() {
 const {loading, data} = useFetch()

  return (
<main>
      <div className='section-title'>
        <h1>{loading ? 'loading...' : 'pagination'}</h1>
        <div className='underline'></div>
      </div>
      <section className='followers'>
        <div className='container'>

        </div>
        {!loading && (
          <div className='btn-container'>
            <button className='prev-btn' >
              prev
            </button>
            
            <button className='next-btn' >
              next
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;

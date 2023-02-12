import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'


function App() {
  return (
    <main>
      <div className='block bcg-black'></div>
      <div className='block'>
        <div className='container'>
          <img
            // src={(person && person.image) || defaultImage}
            alt='random user'
            className='user-img'
          />
          <p className='user-title'>
            {/* My {title} is */}
            </p>
          <p className='user-value'>
            {/* {value} */}
            </p>
          <div className='values-list'>
            <button
              className='icon'
              data-label='name'
              // onMouseOver={handleValue}
            >
              <FaUser />
            </button>
            <button
              className='icon'
              data-label='email'
              // onMouseOver={handleValue}
            >
              <FaEnvelopeOpen />
            </button>
            <button 
            className='icon' 
            data-label='age' 
            // onMouseOver={handleValue}
            >
              <FaCalendarTimes />
            </button>
            <button
              className='icon'
              data-label='street'
              // onMouseOver={handleValue}
            >
              <FaMap />
            </button>
            <button
              className='icon'
              data-label='phone'
              // onMouseOver={handleValue}
            >
              <FaPhone />
            </button>
            <button
              className='icon'
              data-label='password'
              // onMouseOver={handleValue}
            >
              <FaLock />
            </button>
          </div>
          <button 
          className='btn' 
          type='button' 
          // onClick={getPerson}
          >
            {/* {loading ? 'loading...' : 'random user'} */}
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;

import React from 'react';
import { useGlobalContext } from './context';

const Stories = () => {
  const {isLoading, hits, removeStory} = useGlobalContext();
	return (
    <>
    {isLoading ? (<div className='loading'></div>)
    
    :(
    <section>
      
    </section>
    )}
    </>
    )
};

export default Stories;

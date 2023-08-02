import React from 'react'
import NewsLink from './NewsLink';

function Science() {
  const name = 'Science';
  const add = `&category=Science`;
  
  return (
      <>
          <div className='container'>
              <NewsLink name={name} add={add}/>
          </div>
      </>
  )
}

export default Science
import React from 'react'
import NewsLink from './NewsLink';

function General() {
  const name = 'General';
  const add = `&category=general`;
  
  return (
      <>
          <div className='container'>
              <NewsLink name={name} add={add}/>
          </div>
      </>
  )
}

export default General
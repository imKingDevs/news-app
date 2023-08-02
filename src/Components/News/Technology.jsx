import React from 'react'
import NewsLink from './NewsLink';

function Technology() {
  const name = 'Technology',
        add = `&category=technology`;
          
  return (
      <>
          <div className='container'>
              <NewsLink name={name} add={add}/>
          </div>
      </>
  )
}

export default Technology
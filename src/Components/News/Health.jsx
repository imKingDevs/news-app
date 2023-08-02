import React from 'react'
import NewsLink from './NewsLink';

function Health() {
  const name = 'Health';
  const add = `&category=Health`;
  
  return (
      <>
          <div className='container'>
              <NewsLink name={name} add={add}/>
          </div>
      </>
  )
}

export default Health
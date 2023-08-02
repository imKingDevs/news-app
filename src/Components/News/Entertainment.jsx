import React from 'react'
import NewsLink from './NewsLink';

function Entertainment() {
  const name = 'Entertainment';
  const add = `&category=entertainment`;
  
  return (
      <>
          <div className='container'>
              <NewsLink name={name} add={add}/>
          </div>
      </>
  )
}

export default Entertainment
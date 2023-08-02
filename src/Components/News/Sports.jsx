import React from 'react'
import NewsLink from './NewsLink';

function Sports() {
  const name = 'Sports';
  const add = `&category=sports`;
  
  return (
      <>
          <div className='container'>
              <NewsLink name={name} add={add}/>
          </div>
      </>
  )
}

export default Sports
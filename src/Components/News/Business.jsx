import React from 'react'
import NewsLink from './NewsLink'

function Business() {
    const name = 'Business';
    const add = `&category=business`;
    
    return (
        <>
            <div className='container'>
                <NewsLink name={name} add={add}/>
            </div>
        </>
    )
}

export default Business
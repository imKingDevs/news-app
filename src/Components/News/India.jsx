import React from 'react'
import NewsLink from './NewsLink'

function India() {
    const name = 'India';
    const add = `&country=in`;
    
    return (
        <>
            <div className='container'>
                <NewsLink name={name} add={add}/>
            </div>
        </>
    )
}

export default India
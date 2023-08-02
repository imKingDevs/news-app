import React from 'react';
import NewsLink from './News/NewsLink.jsx';

const News = () => {
    const name = 'Top Headline',
         add = ``;
    
    return (
        <>
            <div className='container'>
                <NewsLink name={name} add={add}/>
            </div>
        </>
    )
}

export default News;
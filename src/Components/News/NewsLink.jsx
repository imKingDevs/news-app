import React, { useEffect, useState } from 'react';
import NewsCom from './NewsCom.jsx';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function News(props) {
    
    let API_KEY = `6004b8fcb1604003b4ead57854e8d2c2`;
    let url = `https://newsapi.org/v2/top-headlines?language=en&apiKey=${API_KEY}`;
    let size = 100;
    
    if(props.size !== undefined){
        size = props.size;
    }
        
    url = `${url}&pageSize=${size}`;
    url = `${url}${props.add}`;
    
    let urls = url;
    const [user, setuser] = useState([]);
    
    useEffect(() => {
        const news = async () => {
            const response = await axios.get(urls);
            setuser(response.data.articles);
            // console.log(response.data.articles);
        }
        news();
    }, [])

  return (
    <>
        <div className='news'>
            <h2 className='name'>{props.name}</h2>
            <div className='news_boxes'>
                {user.map((article, index) => { return (
                    <NewsCom 
                        key={index}
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage}
                        author={article.author}
                        source={article.source}
                    />
                )})}
            </div>
        </div>
        <div className='tags'>
            <NavLink className="cat_link" title='Top Headline' to='/news' >Top Headline</NavLink>
            <NavLink className="cat_link" title='India' to='/news/india' >India</NavLink>
            <NavLink className="cat_link" title='Business' to='/news/business' >Business</NavLink>
            <NavLink className="cat_link" title='Entertainment' to='/news/entertainment' >Entertainment</NavLink>
            <NavLink className="cat_link" title='General' to='/news/general' >General</NavLink>
            <NavLink className="cat_link" title='Health' to='/news/health' >Health</NavLink>
            <NavLink className="cat_link" title='Science' to='/news/science' >Science</NavLink>
            <NavLink className="cat_link" title='Sports' to='/news/sports' >Sports</NavLink>
            <NavLink className="cat_link" title='Technology' to='/news/technology' >Technology</NavLink>
        </div>
    </>
  )
}

export default News;
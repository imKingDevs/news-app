import React, { useEffect } from 'react';
import axios from 'axios';
import NewsLink from './News/NewsLink.jsx';

const Home = () => {
    function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else { 
          console.log('error')
        }
    }
    getLocation();
    
    function showPosition(position) {
        console.log(`Lat: ${position.coords.latitude}  -- Long: ${position.coords.longitude}`);
    }

    const name = 'Top Headline',
        add = ``,
        size = 6;
    
    return (
        <>
            <div className='home'>
                {/* <img src='../logo.png'/>
                <h1>News App</h1>
                <p>Always Updated News</p> */}
            </div>
            <div className='container'>
                <NewsLink name={name} add={add} size={size}/>
                <NewsLink name={`India`} add={`&country=in`} size={size}/>
            </div>
        </>
    )
}

export default Home;
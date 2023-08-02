import React from 'react';

const NewsCom = (props) => {
    
    let title = props.title.split(' - ');

    let newsPublisher = props.url.split('/')
    newsPublisher = `${newsPublisher[0]}//${newsPublisher[2]}`;
    
    return (
        <>
            <div className='news_box'>
                <div className='news_detail'>
                    <a href={props.url} target='_' className='title'>
                        <h4>{title[0]}</h4>
                    </a>
                    <a href={newsPublisher} target='_' className='publisher' title={props.source.name}>
                        <span>{title[1]}</span>
                    </a>
                <p>{props.description}</p>
                </div>
                {props.urlToImage !== null ? <img src={props.urlToImage} /> : null}
            </div>
        </>
    )
}

export default NewsCom;
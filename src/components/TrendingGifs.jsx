import React from 'react';
import Gif from './Gif';
import '../styles/Gif.css';

function TrendingGifs ({ trendingGifs }) {
  return (
    <div className='gif-container'>
      {
        trendingGifs.map(gif => (
          <Gif key={gif.id} title={gif.title} url={gif.url} id={gif.id} />
        ))
      }
    </div>
  );
}

export default TrendingGifs;

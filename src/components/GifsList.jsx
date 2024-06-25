import React from 'react';
import Gif from './Gif.jsx';
import ClipLoader from 'react-spinners/ClipLoader';
import { useGifs } from '../hooks/useGifs.js';
import '../styles/Gif.css';

function GifsList ({ keyword }) {
  const { isLoading, gifs } = useGifs({ keyword });

  if (isLoading) {
    return <ClipLoader
      color="#ffffff"
      loading={isLoading}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />;
  }

  return (
    <div className='gif-container'>
      {
        gifs.map(({ title, id, url }) =>
          <Gif
            key={id}
            title={title}
            url={url}
            id={id}
          />
        )
      }
    </div>);
}

export default GifsList;

import React, { useState } from 'react';
import { useLocation } from 'wouter';
import GifsList from '../components/GifsList';
import TrendingGifs from '../components/TrendingGifs';
import { useTrendingGifs } from '../hooks/useTrendingGifs';

function HomePage () {
  // eslint-disable-next-line no-unused-vars
  const [path, pushLocation] = useLocation();
  const [keyword, setKeyWord] = useState('');

  const { trendingGifs } = useTrendingGifs();

  const handleChange = (e) => {
    setKeyWord(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    pushLocation(`/search/${keyword}`);
    localStorage.setItem('lastKeyWord', keyword);
  };

  const lastKeyWord = (!localStorage.getItem('lastKeyWord') ? 'random' : localStorage.getItem('lastKeyWord'));

  return (
    <>
      <header>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} type="text" placeholder='Buscar gif'/>
          <input type="submit" value="Buscar" />
        </form>
      </header>
      <h2>Última búsqueda: {lastKeyWord}</h2>
      <GifsList keyword={lastKeyWord}/>
      <h2>Tendencias de hoy:</h2>
      <TrendingGifs trendingGifs={trendingGifs}/>
    </>
  );
}

export default HomePage;

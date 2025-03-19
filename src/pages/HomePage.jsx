import React, { useState } from 'react';
import '../styles/HomePage.css';
import { useLocation } from 'wouter';
import GifsList from '../components/GifsList';
import TrendingGifs from '../components/TrendingGifs';
import { useTrendingGifs } from '../hooks/useTrendingGifs';
import { getAutocomplete } from '../services/getAutocomplete';
import { useDebouncedCallback } from 'use-debounce';
import usePageTitle from '../hooks/usePageTitle';

function HomePage () {
  // eslint-disable-next-line no-unused-vars
  const [path, pushLocation] = useLocation();
  const [keyword, setKeyWord] = useState('');
  const [autoComplete, setAutoComplete] = useState([]);

  usePageTitle('Inicio');

  const { trendingGifs } = useTrendingGifs();

  const debounced = useDebouncedCallback(
    (value) => {
      getAutocomplete(value).then(data => setAutoComplete(data.data));
    },
    300
  );

  const handleChange = (e) => {
    setKeyWord(e.target.value);
    debounced(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalKeyword = keyword.trim() === '' ? 'random' : keyword;

    pushLocation(`/search/${finalKeyword}`);
    localStorage.setItem('lastKeyWord', keyword);
  };

  const lastKeyWord = (!localStorage.getItem('lastKeyWord') || localStorage.getItem('lastKeyWord') === '' ? 'random' : localStorage.getItem('lastKeyWord'));

  return (
    <>
      <header>
        <form onSubmit={handleSubmit}>
          <input className='input-search' onChange={handleChange} type="text" placeholder='Buscar gif'/>
          <input className='input-submit' type="submit" value="Buscar" />
          <ul>
            {
              autoComplete.map((result, index) => (
                <li key={index}><a onClick={() => localStorage.setItem('lastKeyWord', result.name)} href={'/search/' + result.name}>{result.name}</a></li>
              ))
            }
          </ul>
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

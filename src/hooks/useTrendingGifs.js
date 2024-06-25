import { useState, useEffect } from 'react';
import { getTrendingGifs } from '../services/getTrendingGifs';

export function useTrendingGifs () {
  const [trendingGifs, setTrendingGifs] = useState([]);

  useEffect(() => {
    getTrendingGifs().then(setTrendingGifs);
  }, []);

  return { trendingGifs };
}

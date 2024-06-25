import { useState, useEffect } from 'react';
import { getGifs } from '../services/getGifs';

export function useGifs ({ keyword }) {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getGifs({ keyword })
      .then(gifs => {
        setGifs(gifs);
        setIsLoading(false);
      });
  }, [keyword]);

  return { isLoading, gifs };
}
